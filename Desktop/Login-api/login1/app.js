

const express = require("express");
const app = express();
const mysql = require("mysql");
app.use(express.json());
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors=require('cors');
app.use(cors());
const db = mysql.createConnection({
    host: 'intranet-db.mysql.database.azure.com',
    user: 'IntranetDevAdmin',
    password: 'Admin@123',
    database: 'intranet-db',
    ssl:{'required':true}
});
app.use(
    cors()
    );
app.use(express.json());
db.connect((err, res) => {
    if (err) {
        console.log("Failure")
        console.log(err)
    }
    else {
        console.log(res)
        console.log("Success")
    }
});
app.post("/login", (req, res) => {
    const UserEmail = req.body.emailid;
    const UserPassword = req.body.password;
    console.log(UserPassword)
    // console.log(hashPassword)
    //bcrypt.hash(UserPassword,saltRounds,(err,hash)=>{
        db.query(
            "SELECT * FROM login WHERE user_email = ? ", 
        [UserEmail],
        (error, results) => {
            //console.log(hash)
            console.log(UserPassword)
            // console.log("result if0")
            if (error) {
                res.send({error: err});
                // res.send("result if1")           result[0].password1              
            }
            if (results.length > 0) {               
                console.log(results[0].user_password)
                // res.send(results);
                bcrypt.compare(UserPassword, results[0].user_password, (error, response) => {
                    if (error) {
                        res.send({error: err});
                    }
                    if (response) {
                        console.log("results ", response);
                        res.send(results);
                     } else {
                        console.log("Wrong email or password ");
                        res.send({ message: "Wrong email or password " });
                    }
                });
            } else{
                 res.send({ message: "User doesn't Exist"});
            }
            });
    //})
});
app.listen(5001, () => {
    console.log(`App is listening on port 5001`);
});