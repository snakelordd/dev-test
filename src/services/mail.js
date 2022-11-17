const nodemailer = require('nodemailer')

const mail = async (mail) => {
 
    let testEmailAccount = await nodemailer.createTestAccount()

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
          user: testEmailAccount.user,
          pass: testEmailAccount.pass,
        },
    })

    let result = await transporter.sendMail({
        from: '"МИС" <mis@example.com>',
        to: mail.to,
        subject: mail.subject,
        text: mail.text
    })

    return result
}

module.exports = mail