const names = require('./people') //by using require, node is locating the file, reading, and then running its contents. 
// if accessing a single key value use " const {name} = require('./people') "

//console.log(names.people, names.ages)

const os = require('os') //built-in node module to provide info about current operating system.

// console.log(os)
console.log(os.platform(), os.homedir())