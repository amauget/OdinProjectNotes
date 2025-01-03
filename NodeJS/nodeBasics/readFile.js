const fs = require('fs/promises') //CHANGE FS TO INCLUDE PROMISES

const fileName = './test.txt'

//asyncronous promise-based access and update of file.

async function logAccess(){
    const fileName = './test.txt'
    
  try {
    const data = await fs.readFile(fileName, 'utf8'); // UTF8 REFERS TO TEXT TYPE OF FILE.
    console.log(data)

    const logged = await fs.appendFile(fileName, `\nAccessed: ${new Date()}`) // "\n" indicates to append to next line
    
    }
    catch(err){
        console.log(err)
    }
}

logAccess()