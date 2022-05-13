import jwt from 'jsonwebtoken';
import { readFileSync } from 'fs';
import { FullUser } from '../../types';

const JWT_SECRET = readFileSync('./src/jwt.evaluation.key', 'utf-8');

export default {
  jwtSign(payload: FullUser) {
    const sign = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '5h',
      algorithm: 'HS256',
    });

    return sign;
  },

  verifyToken(token: string) {
    const verifying = jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });

    return verifying;
  },

  decodeToken(token: string) {
    const decode = jwt.decode(token);

    return decode;
  },
};
