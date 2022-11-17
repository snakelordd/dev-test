const Router = require('express')
const scheduleController = require('../controllers/scheduleController')
const router = new Router

router.post('/', scheduleController.getSchedule)

module.exports = router