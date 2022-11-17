const { PrismaClient } = require('@prisma/client');
const scheduleSeeds = require('./prisma/seeds/scheduleSeeds')
const doctorsSeed = require('./prisma/seeds/doctorsSeed')

const prisma = new PrismaClient();

async function main() {
    await prisma.doctors.createMany({
        data: doctorsSeed
    })
    await prisma.schedule.createMany({
      data: scheduleSeeds,
    });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });