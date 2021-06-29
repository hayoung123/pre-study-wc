const argv = process.argv;
const numList = process.argv.slice(2).map(v=>+v);
const sum = numList.reduce((acc,cur)=>(acc+cur));
console.log(sum)
