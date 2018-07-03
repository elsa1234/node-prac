var http = require('http');
http.createServer(function(req,res){
	switch(req.method) {
		case 'GET': message = 'That\'s GET message'; break;
		case 'POST': message = 'That\'s POST message'+req.params; break;
		case 'PUT':
				message = 'That\'s PUT message. You are reading "' + req.body + '" book.'; 
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(message + '\n');		
			return;
		break;
		case 'DELETE': message = 'That\'s DELETE message'; break;
	}
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(message + '\n');	

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
