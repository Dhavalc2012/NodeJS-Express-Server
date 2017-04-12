'use strict';

var express = require('express'),
	posts = require('./mock/posts.json');

var app = express();
/* Req is Request and res is Response*/

//debugger;
app.get('/',function(req,res){
	res.send("Hello World Again");
});

app.get('/blog/:title?',function(req, res){
	var title = req.params.title;
	if (title === undefined) {
			res.status(503);
			res.send("This page is under construction");
	}
	else {
			var post = posts[title];
			res.send(post);
	}
});
app.listen(3000, function(){
	console.log("The front-end server is running on port 3000!");
});