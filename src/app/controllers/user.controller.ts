import { Request, Response } from 'express';
import userService from '../services/user.service';
import joi from '../validator/joi.validator';

export default {
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const upUser = await userService.update(id, req.body);
    return res.status(201).json(upUser);
  },

  async create(req: Request, res: Response) {
    await joi.createUser(req.body);
    const createdUser = await userService.create(req.body);

    return res.status(201).json(createdUser);
  },

  async findAll(_req: Request, res: Response) {
    const users = await userService.findAll();
    return res.status(200).json(users);
  },

  async findById(req: Request, res: Response) {
    const user = await userService.findById(req.params.id);
    return res.status(200).json(user);
  },
};
