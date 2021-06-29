const http = require('http');
const bl = require('bl');

const results = [];
let count = 0;

const httpGet = (idx) => {
  const url = process.argv[2 + idx];
  http.get(url, (res) => {
    res.pipe(
      bl((err, data) => {
        if (err) return console.error(err);

        data = data.toString();
        results[idx] = data;
        count++;
        if (count === 3) results.forEach((v) => console.log(v));
      })
    );
  });
};

for (let i = 0; i < 3; i++) httpGet(i);
