var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

/*app.get('/',function(req,res){

	res.send('Hello Express');
});*/

var middleWare = require('./middleware.js');

app.use(middleWare.logger);


app.get('/about',middleWare.requireAuthentication,function(req,res){

	res.send('About Express!!');
});

//app.use(middleWare.requireAuthentication);

app.use(express.static(__dirname+'/public'));
app.listen(port,function(){
	console.log('Server got started using port'+port);
});