
var middleWare = {

	requireAuthentication : function(req,res,next){
		console.log('Private route hit')
		next();
	},

	logger : function(req,res,next){
		console.log ('Request '+req.originalUrl+' '+req.method+' on '+ new Date().toString());
		next();
	}
};


module.exports = middleWare;