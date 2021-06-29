const filterFn = require('./mymodule.js');
const dir = process.argv[2];
const keyword = process.argv[3];

filterFn(dir, keyword, (err, data) => {
  if (err) return console.error(err);

  data.forEach((file) => console.log(file));
});
