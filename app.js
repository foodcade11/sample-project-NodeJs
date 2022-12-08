var express = require('express');
var app=express();

app.set('view engine','ejs');







app.listen(3000);

app.get('/',function(req,res){
    res.render('home' );
    // console.log(req.query);
});
app.get('/adduser',function(req,res){
    res.render('adduser' );
    // console.log(req.query);
});
app.get('/view',function(req,res){
    res.render('view' );
    // console.log(req.query);
});
