const express = require('express')
require('dotenv').config()
const cors = require('cors')
const router = require('./src/routes/index')
const PORT = process.env.PORT || 5000
const cron = require('node-cron')
const notification = require('./src/services/notification')

const app = express()


app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    app.listen(PORT, () => console.log(`App started on PORT ${PORT}`))
}

cron.schedule('* * * * *', function(){
    notification()
});


start()