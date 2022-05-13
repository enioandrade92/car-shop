import Joi from 'joi';

export default {
  async login(value:object) {
    try {
      const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
      });
      const result = await loginSchema.validateAsync(value);
      return result;
    } catch (error: any) {
      console.log(error);
      const err = new Error(error.message as unknown as string);
      err.name = 'bad_request';
      throw err;
    }
  },

  async createUser(value:object) {
    try {
      const createUserSchema = Joi.object({
        username: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
      });
      const result = await createUserSchema.validateAsync(value);
      return result;
    } catch (error: any) {
      console.log(error);
      const err = new Error(error.message);
      err.name = 'bad_request';
      throw err;
    }
  },

};
