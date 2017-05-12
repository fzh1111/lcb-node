var connection=require('./connection');

var news={
    insert:function (req, res) {
        response = {
            title:req.query.title,
            content:req.query.content,
            pubTime:new Date().toLocaleString(),
            author:req.query.author
        };
        var  addSql = 'INSERT INTO news(newsId,title,content,type,pubTime,author) VALUES(null,?,?,1,?,?)';
        var  addSqlParams = [response.title,response.content,response.pubTime,response.author];
        //增
        connection.query(addSql,addSqlParams,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
            console.log('--------------------------INSERT----------------------------');
            //console.log('INSERT ID:',result.insertId);
            console.log('INSERT ID:',result);
            console.log('-----------------------------------------------------------------\n\n');
        });
        res.end(JSON.stringify(response));
    },
    select:function (req, res) {
        var  addSql = 'SELECT * FROM news';
        //增
        connection.query(addSql,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
            console.log(result)
        });
        res.end();
    }
};
//connection.end();
module.exports=news;