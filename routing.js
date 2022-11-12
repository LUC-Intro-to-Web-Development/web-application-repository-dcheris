const http = require("http")
const fs = require("fs")


const server = http.createServer(function(req, res) {

    if (req.url == '/home'  && req.method == "GET"){
        res.writeHead(200, {"Content-type": "text/html"})
        fs.readFile("home.html",function(err, data) {
            // console.log("Uh oh")
        res.write(data)
        res.end()
    })
    }else if (req.url == '/bookmarks'  && req.method == "GET") {
        res.writeHead(200, {"Content-type": "text/html"})
        fs.readFile("bookmarks.html", function(err, data) {
        res.write(data)
        res.end()
    })
    }else if (req.url == '/favorites'  && req.method == "GET") {
        res.writeHead(200, {"Content-type": "text/html"})
        fs.readFile("favorites.html", function(err, data) {
        res.write(data)
        res.end()
    })
    }else if 
        (req.url == '/all'  && req.method == "GET") {
        res.writeHead(200, {"Content-type": "text/html"})
        fs.readFile("all.html", function(err, data) {
        res.write(data)
        res.end()
    })

   }else {
    res.writeHead(200, {"Content-type": "text/html"})
        fs.readFile("home.html", function(err, data) {
        res.write(data)
        res.end()
    })
    }
if (err.code ---)

}).listen(3000)
