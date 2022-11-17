const Router = require('express')
const router = new Router

const userRouter = require('./userRouter')
const scheduleRouter = require('./scheduleRouter')
const appointmentsRouter = require('./appointmentsRouter')

router.use('/user', userRouter)
router.use('/schedule', scheduleRouter)
router.use('/appointments', appointmentsRouter)

module.exports = router