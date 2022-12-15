const con = require('../dbconnection');
const SQL = require('sql-template-strings')




exports.announcementData= async (req, res) => {
    try {
        // console.log(req + "inside one");
        // const {titleName,contentName,description,createrName,createdDate,isActive} = req;
        
        const queryString = SQL`SELECT * FROM announcement`;
        const [query] = await con.promise().query(queryString).catch(err => {throw err}); 
        return query;
    } catch (err) {
        console.log(err);
        throw err;
    }
    
};
