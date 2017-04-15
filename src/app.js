'use strict';

var express = require('express'),
	posts = require('./mock/posts.json');

var	postsLists = Object.keys(posts).map(
		function(value) {
		return posts[value];
	});
	
var app = express();
/* Req is Request and res is Response*/

//debugger;
app.use('/static',express.static(__dirname + '/public'));
app.set('view engine','jade');
app.set('views', __dirname + '/templates');
app.get('/',function(req,res){
	res.render('index');
});

app.get('/blog/:title?',function(req, res){
	var title = req.params.title;
	if (title === undefined) {
			res.status(503);
			//res.send("This page is under construction");
			res.render('blog',{posts : postsLists});
	}
	else {
			var post = posts[title] || {};
			res.render('post',{post : post});
	}
});
app.listen(3000, function(){
	console.log("The front-end server is running on port 3000!");
});