const fs =require('fs')
const path = require('path')
module.exports = (dir, ext, callback) =>{
    
    fs.readdir(dir, (err, data) =>{
        if(err){
            return callback(err)
        }
            data = data.filter(el => path.extname(el) === '.' + ext)
                  
        
        return callback(null,  data)
        
    })
}