var server		=	require('express')();
var http		=	require('http').Server(server);

http.listen(process.env.PORT || 3000, function(){
	console.log('JSONTest');
	console.log('Server Started');
});

server.get('/',function(req,res){
	var obj	=	{id: new Date().getTime(), Content: "Bravo Anton", SecondContent: "Mobatec Rules ;)"};
	res.writeHead(200,{"Content-Type":"application/json"});
	res.write(JSON.stringify(obj));	
});