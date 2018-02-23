const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  const names = ['francis', 'james', 'rob'];
  const cars = {
    name: 'Ford',
    model: 'Fiesta',
  };

  const jsonData = JSON.stringify({ names, cars });
  response.end(jsonData);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
