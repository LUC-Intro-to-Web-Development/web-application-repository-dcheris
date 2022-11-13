const fs = require('fs');
const http = require('http');
 

const host = 'localhost';
const port = 8000;

const server = http.createServer(function(req, res){
   if (req.url == '/all' && req.method == 'GET') {
    res.writeHead(200, {'Content-type': 'text/html'});
    fs.readFile('all.html', function(err, data){
        res.write(data);
        res.end();
    });

    }
})