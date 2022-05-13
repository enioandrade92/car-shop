import express from 'express';
import 'express-async-errors';
import { errorHandler } from './middleware';
import { userRouter, loginRouter } from './routers';

const api = express();

// req middleares
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

// router
api.use('/user', userRouter);
api.use('/login', loginRouter);

// res middleware
api.use(errorHandler);

export default api;
