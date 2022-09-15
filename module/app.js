const handleBlogRouter = require('../src/router/blog');
const handleUserRouter = require('../src/router/user');
const url = require('url');
const serverHandle = (req, res) => {
    res.setHeader('Content-type','application/json');
    const q = url.parse(req.url, true);
    var path=q.pathname;
    var method = req.method;
    var searchquery = q.searchquery;
    const blogData = handleBlogRouter(req, res)
    if(blogData){
        res.end(JSON.stringify(blogData));
        return;
    }
    const userData = handleUserRouter(req, res)
    if(userData){
        res.end(JSON.stringify(userData));
        return;
    }

    res.writeHead('404',{'Content-type':'text/plain'});
    res.write ('404 not found');
    res.end();
}

module.exports = serverHandle