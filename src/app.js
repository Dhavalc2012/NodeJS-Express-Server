'use strict';

var express = require('express');

var app = express();
/* Req is Request and res is Response*/
app.get('/',function(req,res){
	response.send("Hello World");
});
app.listen(3000);