const http = require('http');
const server = http.createServer(function(req, res){

if (req.url == '/home' && req.method == 'GET'){
    res.write("This is the home page");
    res.end();

        }else{
        res.write("Homepage");
        res.end();
    }

}).listen(3000);