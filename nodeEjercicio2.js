const http = require('http');
const fs = require('fs');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html');
    let route = './';
    switch (req.url) {
        case '/programacion':
            route += 'programacion.html';
            break;
        case '/banana':
            route += 'banana.html';
            break;
        default:
            route += 'index.html';
            break;
    }


    fs.readFile(route, (err, data) => {
        if(err) {
            console.log(err)
            res.end()
        } else {
            res.end(data)
        }
    })
});
server.listen(3000, 'localhost', () =>{
    console.log(`Estas en el puerto 3.000 que es el local, http://${hostname}:${port}/`)
})