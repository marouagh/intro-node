const mymodule = require('./mymodule.js')
const dir= process.argv[2]
const ext= process.argv[3]
mymodule(dir, ext, (err, data) => {
    if(err) {console.log('error')}
    data.forEach(elt => console.log(elt));
})