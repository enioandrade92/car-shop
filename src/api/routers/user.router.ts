import { Router } from 'express';
import userController from '../../app/controllers/user.controller';

const userRouter = Router();

userRouter.put('/:id', userController.update);
// userRouter.delete('/:id', userController.delete);
userRouter.post('/', userController.create);

userRouter.get('/:id', userController.findById);
userRouter.get('/', userController.findAll);

export { userRouter };
