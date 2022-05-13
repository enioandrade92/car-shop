import { Request, Response } from 'express';
import loginService from '../services/login.service';
import joi from '../validator/joi.validator';

export default {
  async login(req:Request, res:Response) {
    await joi.login(req.body);
    const user = await loginService.login(req.body);
    return res.status(200).json(user);
  },
};
