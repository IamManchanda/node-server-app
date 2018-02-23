const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const HTML = fs.readFileSync(`${__dirname}/index.html`);
    response.end(HTML);
  } else if (request.url === '/api/user') {
    response.writeHead(200, {
      'Content-Type': 'application/json',
    });
    const user = JSON.stringify({
      name: {
        firstname: 'Harry',
        lastname: 'Manchanda',
      },
    });
    response.end(user);
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
