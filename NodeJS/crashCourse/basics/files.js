const fs = require('fs') //built-in file system module

//reading files
fs.readFile('./docs/blog.txt', (err, data) => { //async function
    if(err){
        console.error(err)
    }
    console.log(data.toString()) //outputting "buffer" if ".toString" isn't used.
})


//writing files
fs.writeFile('./docs/blog.txt', 'adding context', () => {
    console.log('file was written')
})

//directories
if(!fs.existsSync('./test')){ //if file doesn't exist -> then
    fs.mkdir('./test', (err) => {
        if(err){
            console.error(err)
        }
        console.log('folder created')
    })
} else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder removed.')
    })
}

//deleting files

if(fs.existsSync('./docs/deleteMe.txt')){
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if(err){
            console.error(err)
        }
    
        console.log('file deleted.')
    })
}