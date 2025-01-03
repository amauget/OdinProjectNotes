const { Router } = require('express')
const { getAuthorId } = require('../controllerFiles/authorController')

const authorRouter = Router()

authorRouter.get('/:authorId', getAuthorId)