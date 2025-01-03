const db = require('../db')
const CustomNotFoundErr = require('../errors/customNotFoundErr')

async function getAuthorId(req, res){ 
    //controller extracts author ID from req.params
    const { authorId } = req.params
    
    try{
        const author = await db.getAuthorId(Number(authorId))

        if(!author){
            // res.status(404).send('Author not found!')  CHANGED TO CUSTOM ERROR
            // return

            throw new CustomNotFoundErr('Author Not Found!')
        }
    
        res.send(`Author Name: ${author.name}`)
    }
    catch(err){
        console.error('error retrieving author:', err)
        res.status(500).send('Internal Server Error')
    }

}

