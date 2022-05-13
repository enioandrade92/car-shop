import { Prisma } from '@prisma/client';
import * as bcryptjs from 'bcryptjs';
import { prismaClient } from '../../database/prisma.client';
import { FullUser, CreateUser } from '../../types';

export default {
  async update(id:string, user:CreateUser):Promise<FullUser> {
    const encryptedPass = bcryptjs.hashSync(user.password);
    const upUser = await prismaClient.user.update({ 
      where: { id: +id },
      data: { 
        ...user,
        password: encryptedPass,
        updateAt: Date.now(), 
      } as Prisma.UserCreateInput, 
    });

    return upUser as FullUser;
  },
  async create(user:CreateUser):Promise<FullUser> {
    const encryptedPass = bcryptjs.hashSync(user.password);
    const createdUser = await prismaClient.user.create({
      data: { ...user, password: encryptedPass } as Prisma.UserCreateInput,
    });
    return createdUser as FullUser;
  },
  
  async findAll():Promise<FullUser[]> {
    return prismaClient.user.findMany();
  },

  async findById(id: string):Promise<FullUser> {
    const foundUser = await prismaClient.user.findUnique({
      where: { id: +id },
      // select: {
      //   id: true,
      //   username: true,
      //   email: true,
      //   role: true,
      // },
    });

    if (!foundUser) {
      const err = Error('Not found user');
      err.name = 'bad_request';
      throw err;
    }

    return foundUser;
  },

  async findByEmail(email: string):Promise<FullUser> {
    const foundUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (!foundUser) {
      const err = Error('Not found user');
      err.name = 'bad_request';
      throw err;
    }

    return foundUser;
  },
};
