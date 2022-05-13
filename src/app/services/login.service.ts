import * as bcryptjs from 'bcryptjs';
import { Login, User } from '../../types';
import userModel from '../models/user.model';
import jwtUtils from '../ultils/jwt.utils';

export default {
  async login(user: Login): Promise<User> {
    const userDb = await userModel.findByEmail(user.email);
    if (!bcryptjs.compareSync(user.password, userDb.password)) {
      const err = new Error('Incorret password');
      err.name = 'unauthorized';
      throw err;
    }
    
    const token = jwtUtils.jwtSign(userDb);
    const { id, username, role, email } = userDb;
    return { id, username, role, email, token };
  },
};
