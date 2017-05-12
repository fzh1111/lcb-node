var express = require('express');
var app = express();
var Router=require("./router/router");
app.use(express.static('public'));
 
//app.get('/index.html', function (req, res) {
//   res.sendFile( __dirname + "/" + "index.html" );
//});
 
var server = app.listen(8081, 'lcb.node.com',function () {
  //var host = server.address().address;
  //var port = server.address().port;
});
app.use("/",Router);