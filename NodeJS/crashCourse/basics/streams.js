const fs = require('fs')

// streaming begins presenting data before the fetch is complete..  just like youtube vids.

const readStream = fs.createReadStream('./docs/lorem.txt', {encoding: 'utf8'}) //second arg is optional to alphabetize incoming data

const writeStream = fs.createWriteStream('./docs/write.txt')

readStream.on('data', (chunk) => { // ".on" is an event listener for the stream that is triggered when a buffer(chunk) of data is received.
    console.log(' --- NEW CHUNK --- ')
    console.log(chunk)
    writeStream.write('\n NEW CHUNK')
    writeStream.write(chunk) //passes buffered data to new file.
})


//piping
readStream.pipe(writeStream) //does the same thing as .write above.