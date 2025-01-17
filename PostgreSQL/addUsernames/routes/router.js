const { Router } = require('express')
const router = Router()
const { getUsernames, searchUserName, createUsernameGet, createUsernamePost } = require('../controllers/controller')


router.get('/', (req, res) => {
    const query = req.query.searchInput
    console.log('searching...')
    const result = searchUserName(query)

    res.render('index', {result})
})

router.get('/new', (req, res) => {
    //form retrieved 
    res.status(200).render('new')
})

router.post('/new', (req, res) => {
    console.log('username to be saved', req.body.username)
    //res.redirect('/')
})

router.get('/search', (req, res) => {
    res.status(200).render('search')
})

module.exports = router