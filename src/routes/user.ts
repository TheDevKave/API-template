// user Code for Routes

import express from "express";
import * as controller from "../controllers/user";
import adminMiddleware from "../middlewares/admin.middleware";

const userRouter = express.Router();

// Routes (direction, mideleware, controller)
userRouter.post('/createUser', adminMiddleware, controller.createUser);
userRouter.get('/getUsers', adminMiddleware, controller.getUsers);


export default userRouter;