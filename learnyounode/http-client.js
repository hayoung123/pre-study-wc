const http = require('http');
const url = process.argv[2];

http.get(url, (res) => {
  res.setEncoding('utf8');
  res.on('data', console.log);
});

// http
//   .get(url, function (response) {
//     response.setEncoding('utf8');
//     response.on('data', console.log);
//     response.on('error', console.error);
//   })
//   .on('error', console.error);
