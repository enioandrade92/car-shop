import { ErrorRequestHandler } from 'express';

export const errorHandler:ErrorRequestHandler = (err, _req, res, next):void => {
  const { name, message } = err;

  switch (name) {
    case 'unauthorized': 
      res.status(401).json({ message });
      break;
    case 'bad_request':
      res.status(400).json({ message });
      break;
  
    default:
      console.log(err);
      res.status(500).json({ message });
      break;
  }
  next();
};
