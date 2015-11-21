    var http = require('http');

    var server = http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('hello\n');
    });

    // start server at a port
    var port = 3000;
    server.listen(port);
    console.log('Starting server at port: ' + port);
