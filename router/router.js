var express = require('express');
var router=express.Router();
var news=require('../models/news');
var connection=require('../models/connection');
router.get('/news/insert',news.insert);
router.get('/news/select',news.select);
//connection.end();
module.exports=router;