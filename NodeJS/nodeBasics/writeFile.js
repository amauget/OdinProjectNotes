const fs = require('node:fs')

const content = 'Sample Content!'

fs.writeFile('./test.txt', content, err => {
    if(err){
        console.log(err)
    }
    else{
        console.log('file written successfully.')
    }
})

// "node writeFile.js" to run the file.