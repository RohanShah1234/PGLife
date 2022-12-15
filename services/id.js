const con = require('../dbconnection');
const SQL = require('sql-template-strings')



exports.announcementId = async (req, res) => {
    try {
        // console.log("inside one");
        // const {loginid,password,location}= req;
        const{id}=req;
        const queryString = SQL `SELECT * FROM announcement WHERE id = ${id} `;
        const [query] = await con.promise().query(queryString).catch(err => {throw err}); 
        return query;
    } catch (err) {
        console.log(err);
        throw err;
    }
    
};