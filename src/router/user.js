var url = require('url');
const handleUserRouter = (req, res) => {
    var method = req.method;
    var q = url.parse(req.url, true);
    var path = q.pathname;


    //log in
    if (method == 'POST' && path == '/api/user/login'){
        return {
            msg: 'this is the user login api'
        }
    }
}
module.exports = handleUserRouter