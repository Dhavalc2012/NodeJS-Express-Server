'use strict';

var express = require('express'),
	posts = require('./mock/posts.json');

var app = express();
/* Req is Request and res is Response*/
app.get('/',function(req,res){
	res.send("Hello World Again");
});

app.get('/blog',function(req, res){
	res.send(posts);
});
app.listen(3000, function(){
	console.log("The front-end server is running on port 3000!");
});