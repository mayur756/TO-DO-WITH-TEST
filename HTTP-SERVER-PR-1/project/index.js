const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

    res.writeHead(200, { 'content-type': 'text/html' });
    if (req.url == '/') {
        fs.readFileSync('index.html', (data) => {
            res.end(data);
        })
        res.end('Hello World!');
    }
    else if (req.url == '/login') {
        res.end('Login Page');
    }
    else if (req.url == '/signup') {
        res.end('signup Page');
    }
    else if (req.url == '/service') {
        res.end('Service Page');
    }
    else if (req.url == '/contact') {
        res.end('Contact Page');
    }
});

const PORT = 8090;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});