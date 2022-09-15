var url = require('url');
const handleBlogRouter = (req, res) => {
    var method = req.method;
    var q = url.parse(req.url, true);
    var path = q.pathname;


    //get blog list
    if (method == 'GET' && path == '/api/blog/list'){
        return {
            msg: 'this is the blog list api'
        }
    }

    //get blog detail
    if (method == 'GET' && path == '/api/blog/detail'){
        return {
            msg: 'this is the blog detail api'
        }
    }

    //create a blog
    if (method == 'POST' && path == '/api/blog/new'){
        return {
            msg: 'this is to create a new blog'
        }
    }
     //update blog detail
    if (method == 'POST' && path == '/api/blog/update'){
        return {
            msg: 'this is the blog update'
        }
    }

    //delete a blog
    if (method == 'POST' && path == '/api/blog/delete'){
        return {
            msg: 'this is to delete a blog'
        }
    }
}

module.exports = handleBlogRouter