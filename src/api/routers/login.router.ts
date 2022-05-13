import { Router } from 'express';
import loginController from '../../app/controllers/login.controller';

const loginRouter = Router();

loginRouter.post('/', loginController.login);

export { loginRouter };
