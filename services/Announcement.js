const con = require('../dbconnection');
const SQL = require('sql-template-strings')



exports.announcement= async (req,res) => {
    // console.log("hello")
try{
    // console.log("inside")
    const {titleName,contentName,description,createrName,createdDate,isActive} = req;
    // console.log("titleName",titleName)
    const sqlnewuser=SQL `INSERT INTO announcement SET titleName=${titleName}, contentName=${contentName}, description=${description}, createrName=${createrName}, createdDate=${createdDate}, isActive=${isActive}`;
    //console.log("request",sqlnewuser)
    const [query] = await con.promise().query(sqlnewuser).catch(err => {throw err});
    return query;
}catch(err){
    console.log(err)
    throw err;
}
};

