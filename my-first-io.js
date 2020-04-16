const fs = require('fs')
const file = fs.readFileSync (process.argv[2])
const res = file.toString().split('\n').length - 1
console.log(res)