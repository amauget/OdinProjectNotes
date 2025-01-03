const { Router } = require('express')
const userRouter = Router()

const userController = require('../controllers/userController')

userRouter.get('/', userController.usersListGet) 
userRouter.get('/create', userController.usersCreateGet)
userRouter.post('/create', userController.usersCreatePost)
userRouter.get('/:id/update', userController.usersUpdateGet)
userRouter.post('/:id/update', userController.usersUpdatePost)
userRouter.post('/:id/delete', userController.usersDeletePost)

/* TRANSLATES PATH REQUESTS INTO CONTROLLER FUNCTION CALLS*/

module.exports = userRouter
