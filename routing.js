const http = require("http")
const fs = require("fs")


const server = http.createServer(function(req, res) {

    if (req.URL == '/home'  && req.method == GET) {
        res.write("Home page")
        res.end()
    }
    else if (req.URL == '/bookmarks'  && req.method == GET) {
        res.write("Bookmarks")
        res.end()
    }
    else if (req.URL == '/favorites'  && req.method == GET) {
        res.write("Favorites")
        res.end()
    }
    else { (req.URL == '/all'  && req.method == GET) 
        res.write("All")
        res.end()
    }

}) .listen(3000)