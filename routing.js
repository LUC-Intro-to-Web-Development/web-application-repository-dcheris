const http = require("http")
const fs = require("fs")
//const router = require("router")



const server = http.createServer(function(req, res) {

    if (req.url == '/home'  && req.method == "GET"){
        res.writeHead(200, {"Content-type": "text/html; charset=utf-8"})
        fs.readFile("home.html",function(err, data) {
            // console.log("Uh oh")
        res.write(data)
        res.end()
    })
    }else if (req.url == '/bookmarks'  && req.method == "GET") {
        res.writeHead(200, {"Content-type": "text/html; charset=utf-8"})
        fs.readFile("bookmarks.html", function(err, data) {
        res.write(data)
        res.end()
    })
    }else if (req.url == '/favorites'  && req.method == "GET") {
        res.writeHead(200, {"Content-type": "text/html; charset=utf-8"})
        fs.readFile("favorites.html", function(err, data) {
        res.write(data)
        res.end()
    })
    }else if 
        (req.url == '/all'  && req.method == "GET") {
        res.writeHead(200, {"Content-type": "text/html; charset=utf-8"})
        fs.readFile("all.html", function(err, data) {
        res.write(data)
        res.end()
    })

   }else {
    res.writeHead(200, {"Content-type": "text/html; charset=utf-8"})
        fs.readFile("home.html", function(err, data) {
        res.write(data)
        res.end()
    })
    }
//if (err.code ---)

}).listen(3000)


//Attempting to structure a callback error

function errorFirstCallback(err, data) {
  if (err) {
    console.error('There was an error', err);
    return;
  }
  console.log(data);
}

fs.readFile('', errorFirstCallback);
fs.readFile('/some/file/that/does-exist', errorFirstCallback);