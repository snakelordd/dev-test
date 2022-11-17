const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient({})

class UserController {
    async registration(req, res) {
        try {
            const {email, name, phone, gender} = req.body
            if (!email && !name && !phone && !gender) {
                return res.json('Некорректные данные')
            }

            const candidate = await prisma.patients.findUnique({where: {email: email}})

            if (candidate) {
                return res.json('Пользователь уже существует')
            }
            const user = await prisma.patients.create({
                     data: {
                         phone: phone,
                         email: email,
                         name: name,
                         gender: gender
                     },
                 })
                 .then(async () => {
                     await prisma.$disconnect()
                 })
                 .catch(async (e) => {
                     console.error(e)
                     await prisma.$disconnect()
                     return res.json('Ошибка регистрации')
                 })

            return res.json({user})
        }
        catch (e) {
            res.json('Ошибка регистрации')
        }
    }
}

module.exports = new UserController()