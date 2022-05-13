import { Prisma } from '@prisma/client';

const userData: Prisma.UserCreateInput[] = [
  {
    email: 'adm@carshop.com',
    username: 'Car Shop Admin',
    password: '$2a$10$wX2Xp5MnOEHVoAUGdNlN0.VblAaRRQ4Q1DIdOBLz.valrfxfduWbq',
    // senha: md5('--adm2@21!!--')
    role: 'ADMIN',
  },
  {
    email: 'fulana@deliveryapp.com',
    username: 'Fulana Pereira',
    password: '$2a$10$QUj/gqJ1HaNu07KtEpNXouAYNAWAGPSrFgpfi6WoQqIKMMX9qP82e',
    // senha: md5('fulana@123')
    role: 'USER',
  },
  {
    email: 'zebirita@email.com',
    username: 'Cliente Zé Birita',
    password: '$2a$10$fUu19OtH2vkxa7AiVDza2etVXev8d0ToHQN0COnk4aShlMRZOT1iO',
    // senha: md5('$#zebirita#$')
    role: 'USER',
  },
];

export default userData;
