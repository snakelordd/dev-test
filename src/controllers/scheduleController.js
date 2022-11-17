const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient({})

class ScheduleController {
    async getSchedule(req, res) {
        const {date} = req.body
        const dateFrom = new Date(date)
        const dateTo = new Date()
        dateTo.setDate(dateFrom.getDate() + 1)

        const schedule = await prisma.schedule.findMany({
            where: {
              time_from: {
                gte: dateFrom.toISOString(),
                lte: dateTo.toISOString()
              },
            },
          })
          
        return res.json({schedule})
    }

}

module.exports = new ScheduleController()