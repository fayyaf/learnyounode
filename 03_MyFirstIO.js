var fs = require('fs');

var info = fs.readFileSync(process.argv[2]);

var numLines = info.toString().split('\n').length - 1;
console.log(numLines);