var mysql= require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'wobuaiwo',
    database : 'lcb_website'
});
connection.connect();
module.exports=connection ;