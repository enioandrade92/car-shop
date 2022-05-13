import dotenv from 'dotenv';

dotenv.config();

const { env } = process;

export default {
  api: {
    port: Number(env.API_PORT || env.PORT || 3001),
  },
  prisma: {
    database_url: 'mysql://root:password@localhost:3306/prismaDB?schema=public',
  },
};
