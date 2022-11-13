const http = require('http');
const host = 'localhost';
const port = 8000;

const server = http.createServer(function(req, res){

if (req.url == '/home' && req.method == 'GET'){
    res.write(200,"This is the home page");
    res.end();

        }else{
        res.write("Homepage");
        res.end();
    }

}).listen(8000);