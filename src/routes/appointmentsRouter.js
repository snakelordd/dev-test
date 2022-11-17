const Router = require('express')
const appointmentsController = require('../controllers/appointmentsController')
const router = new Router

router.post('/create', appointmentsController.createAppointment)

module.exports = router