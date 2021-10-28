const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    var url = req.url;
    if (url === '/Home') {
        res.write('Estas en el Home');
        res.end();
    } else {
        res.write('Esto es quienes somos');
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });


