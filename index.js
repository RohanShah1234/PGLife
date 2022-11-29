const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

const mysql = require('mysql2');

//to call our database


app.use(cors());

app.use(express.json());  //middle ware , This will allow us to get the data from the frontend

app.use(bodyParser.urlencoded({extended: true}));

app.get('/insert/',(req, res)=>{

res.send("hello world")
   

});

app.listen(3001,()=>{

    console.log("server running");

});