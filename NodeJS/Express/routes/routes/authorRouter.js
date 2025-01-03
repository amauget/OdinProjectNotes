const { Router } = require('express')

const authorRouter = Router()
//Destructures whole server obj to allow middleware methods to be applied locally to authorRouter. Instead of the whole server obj.

authorRouter.get('/', (req, res) => res.send('All authors'))

authorRouter.get('/:authorId', (req, res) => {
    const { authorId } = req.params
    res.send(`Author ID: ${authorId}`)
})

module.exports = authorRouter