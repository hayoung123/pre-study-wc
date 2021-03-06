const fs = require('fs');
const http = require('http');

const fileLocation = process.argv[3];

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  fs.createReadStream(fileLocation).pipe(res);
});

server.listen(+process.argv[2]);
