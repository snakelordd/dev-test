const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient({})

class AppointmentsController {
    async createAppointment(req, res) {
        const {patient_id, doctor_id, schedule_id} = req.body
        const currentDT = new Date(Date.now())

        const schedule = await prisma.schedule.findUnique({where: {id: Number(schedule_id)}})
        const patient = await prisma.patients.findUnique({where: {id: Number(patient_id)}})
        const doctor = await prisma.doctors.findUnique({where: {id: Number(doctor_id)}})

        if (!schedule || !patient || !doctor) {
            return res.json('Ошибка записи')
        }
        if (schedule.time_from < currentDT) {
            return res.json('Слот недоступен для записи')
        }
        if (schedule.is_free != true) {
            return res.json('Слот недоступен для записи')
        }

        const appointment = await prisma.appointments.create({
            data: {
                doctor_id: doctor.id,
                patient_id: patient.id,
                schedule_id: schedule.id
            }
        }).then(async () => {
            await prisma.schedule.update({
                where: { id: schedule.id },
                data: { 
                    is_free: false,
                    patient_id: patient.id
                },
            })
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            //process.exit(1)
            return res.json('Непредвиденная ошибка')
        })
        
        return res.json({appointment})
    }
}

module.exports = new AppointmentsController()