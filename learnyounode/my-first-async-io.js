const fs = require('fs');

const fileDir = process.argv[2];

fs.readFile(fileDir,'utf-8',(err,data)=>{
	if(err) throw err;
	const count = data.toString().split('\n').length-1;
	console.log(count)
})

