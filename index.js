var http = require("http");
http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type':'text/plain'})
    response.end('Testing\n');//end = the last thing I am sending
}).listen(1337,'127.0.0.1');//post and IP to listen on

//console.log("Here");