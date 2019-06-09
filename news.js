var http = require('http')

var server = http.createServer(function(req, res){
    var request_url = req.url;
    if(request_url == "/abc")
    {
        res.end("<html><body>Portal de notícias Home</body></html>");
    }else{
        res.end("<html><body>Portal de notícias</body></html>");
    }
});

server.listen(3000);