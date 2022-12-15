var mysql = require('mysql2');
var con = mysql.createConnection({
    host: 'intranet-db.mysql.database.azure.com',
    user: 'IntranetDevAdmin',
    password: 'Admin@123',
    database: 'intranet-db',
    ssl:{'required':true}
});
con.connect(function(err) {
    if (err) throw err;
    console.log("DB Connected !");
  });
module.exports = con;