const { PrismaClient } = require("@prisma/client")
const moment = require('moment')
const prisma = new PrismaClient({})
const mail = require('./mail')

const notification = async () => {
    const schedule = await prisma.schedule.findMany({
        where: {
            is_free: false
        }
    })
    
    if (!schedule || schedule.length === 0) {
        return
    }

    schedule.map( async item => {
        const patient = await prisma.patients.findUnique({
            where: {
                id: item.patient_id
            }
        })
        const doctor = await prisma.doctors.findUnique({
            where: {
                id: item.doctor_id
            }
        })

        const time = moment(new Date(item.time_from))
        const currentDT = moment()

        if (time.diff(currentDT, 'minutes') === 120) {
            const email = await mail({
                to: patient.email,
                subject: 'Запись к врачу',
                text: `${currentDT.format('HH:mm DD.MM.YYYY')}! Через 2 часа у вас приём у ${doctor.spec} в ${time.format('HH:mm')}!`
            }).catch(e => '')
        }
        if (time.diff(currentDT, 'minutes') === 1440) {
            const email = await mail({
                to: patient.email,
                subject: 'Запись к врачу',
                text: `${currentDT.format('HH:mm DD.MM.YYYY')} | Привет ${patient.name}! Напоминаем что вы записаны к ${doctor.spec} завтра в ${time.format('HH:mm')}!`
            })
        }
    })
}

module.exports = notification