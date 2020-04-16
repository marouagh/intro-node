const fs = require('fs')
const file = process.argv[2]
fs.readFile(file , (err, data) => {
    if(err){
        console.log('can t read the file')
    }
    else{
        const res = data.toString().split('\n').length - 1
        console.log(res)
    }
})

