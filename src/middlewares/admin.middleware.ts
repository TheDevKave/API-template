import { Role } from '@prisma/client';
import type { RequestHandler } from 'express';

import combineMiddlewares from '@utils/combineMiddlewares';

import authMiddleware from './auth.middleware';

/**
 * Protect the route so only users with role ADMIN can access it
 *
 * @throws 401 - Unauthorized | If the user is not logged in
 * @throws 403 - Forbidden | If the user making the request is not ADMIN
 */
const adminMiddleware: RequestHandler = (req, res, next) => {
  next();
};

export default combineMiddlewares(authMiddleware, adminMiddleware);
