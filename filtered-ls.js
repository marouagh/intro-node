const fs = require('fs')
const path = require('path')
const fl = process.argv[2]
const ext = '.'+ process.argv[3]

fs.readdir(fl, (err, data) =>{
    if(err){
        console.log('can not read the file')
    }else{
        data.forEach((el) =>{
            if(path.extname(el) ===ext)
            console.log(el)
        })
    }
    
})