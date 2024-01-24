import type { RequestHandler } from 'express';

const authMiddleware: RequestHandler = (req, res, next) => {
  next();
};

export default authMiddleware;
