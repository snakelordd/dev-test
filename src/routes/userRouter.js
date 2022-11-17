const Router = require('express')
const router = new Router
const userController = require('../controllers/userController')

router.post('/create', userController.registration)

module.exports = router