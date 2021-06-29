const fs = require('fs');
const path = require('path');

module.exports = function (dir, keyword, callback) {
  keyword = '.' + keyword;
  fs.readdir(dir, (err, data) => {
    if (err) return callback(err);
    data = data.filter((file) => file.includes(keyword));
    callback(null, data);
  });
};
