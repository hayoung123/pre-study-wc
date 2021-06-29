const fs = require('fs');
const dir = process.argv[2];
const keyword = '.' + process.argv[3];

fs.readdir(dir, (err, list) => {
  const filteredList = list.forEach((file) => {
    if (file.includes(keyword)) console.log(file);
  });
});
