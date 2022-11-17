# Тестовое задание для проектного разработчика в компанию ROBOT MIA

Реализация API медицинской информационной системы (МИС) и сервис напоминания о записи к врачу.


## API медицинской информационной системы (МИС)
### Методы API:
1. Регистрация пациента 
    method: POST
    url: 'http://localhost:5000/api/user/create'
2. Запись на прием к врачу 
    method: POST
    url: 'http://localhost:5000/api/appointments/create'
3. Получение расписания врачей за определенную дату
    method: POST
    url: 'http://localhost:5000/api/schedule/'

## Запсук:
    `npm i`
    `npm run dev`

## Cтэк
- Node.js
- MySQL
- prisma/any other ORM for mysql and node.js

## Установленные зависимости
- CORS
- Express
- Nodemon
- Moment
- Node-Cron
- Nodemailer
- Prisma Client
