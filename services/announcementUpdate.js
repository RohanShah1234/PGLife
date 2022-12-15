const con = require('../dbconnection');
const SQL = require('sql-template-strings')

 

exports.updateAnnouncement= async (req,res) => {
try{
    // console.log("update announcement", req.query.id)
    const id = req.query.id;
    const {titleName , contentName, description , createrName, createdDate } = req.body;
    // console.log(titleName)
    const sqluserupdate=SQL `UPDATE announcement SET titleName = ${titleName}, contentName= ${contentName},description= ${description},createrName= ${createrName},createdDate= ${createdDate} WHERE id = ${id}`;
    const [query] = await con.promise().query(sqluserupdate).catch(err => {throw err});
    return query;
}catch(err){
    throw err;
}
};