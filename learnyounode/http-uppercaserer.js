const http = require('http');
const map = require('through2-map');

const port = +process.argv[2];
const toUpperCase = map((chunk) => chunk.toString().toUpperCase());

const server = http.createServer(function (req, res) {
  if (req.method !== 'POST') return res.end('wrong http Method');

  req.pipe(toUpperCase).pipe(res);
});

server.listen(port);
