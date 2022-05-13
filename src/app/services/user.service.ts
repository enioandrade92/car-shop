import { FullUser, User, CreateUser } from '../../types';
import userModel from '../models/user.model';
import jwtUtils from '../ultils/jwt.utils';

export default {
  async update(id: string, user:CreateUser) {
    await userModel.findById(id);
    const upUser = await userModel.update(id, user);
    return upUser;
  },

  async create(user: CreateUser): Promise<User> {
    const createdUser = await userModel.create(user);
    const token = jwtUtils.jwtSign(createdUser);
    const { id, username, role, email } = createdUser;
    return { id, username, role, email, token };
  },
  
  async findAll(): Promise<FullUser[]> {
    return userModel.findAll();
  },

  async findById(id: string): Promise<FullUser> {
    return userModel.findById(id);
  },
};
