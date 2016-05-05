var http = require('http');
var myModule = require('./module');
myModule.setName('超级无敌大帅哥就是---》》杨俊')

http.createServer(function(req, res) { 

	res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.write('<head><meta charset="utf-8"/></head>');  
	res.write("杨俊大帅哥");
	res.write(myModule.sayHello());
	res.end('<p>Hello World!</p>');
		}).listen(3000);
console.log("HTTP server is listening at port 3000.");
