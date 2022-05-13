import { PrismaClient } from '@prisma/client';
import { userData, carData } from './seedData';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');
  await prisma.user.createMany({ data: userData });
  await prisma.car.createMany({ data: carData });
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
