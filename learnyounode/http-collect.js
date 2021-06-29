const http = require('http');
const bl = require('bl');
const url = process.argv[2];
let body = '';

http.get(url, (res) => {
  res.pipe(
    bl((err, data) => {
      if (err) return console.error(err);
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
// http.get(url, (res) => {
//   res.on('data', (data) => (body += data));
//   res.on('end', () => {
//     console.log(body.length);
//     console.log(body);
//   });
// });
