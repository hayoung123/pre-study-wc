const fs = require('fs');
const fileDir = process.argv[2];

const file = fs.readFileSync(fileDir);
const lines = file.toString().split('\n').length-1;
console.log(lines);
