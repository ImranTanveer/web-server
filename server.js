var express = require('express');
var app = express();
var port = 3000;

/*app.get('/',function(req,res){

	res.send('Hello Express');
});*/

var middleWare = require('./middleware.js');
/*var middleWare = {

	requireAuthentication : function(req,res,next){
		console.log('Private route hit')
		next();
	},

	logger : function(req,res,next){
		console.log ('Request '+req.originalUrl+' '+req.method+' on '+ new Date().toString());
		next();
	}
};*/

app.use(middleWare.logger);


app.get('/about',middleWare.requireAuthentication,function(req,res){

	res.send('About Express!!');
});

//app.use(middleWare.requireAuthentication);

app.use(express.static(__dirname+'/public'));
app.listen(port,function(){
	console.log('Server got started using port'+port);
});