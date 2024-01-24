import { Request, Response } from "express";
import * as userService from "../services/user";

// Example Code POST Request -> Call to the Service
/* 
    1º - Extracts the data from the request body
    2º - Calls the service with the extracted data
    3º - Sends the response
*/
export const createUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body as {
        username: string;
        email: string;
        password: string;
    };

    try {
        //2º - Here we call the service
        const newUser = await userService.createUser(username, email, password);
        //3º
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getUsers = async (req: Request, res: Response) => {
    //1º
    const { username, email, password } = req.body as {
        username: string;
        email: string;
        password: string;
    };

    try {
        //2º
        const newUser = await userService.getUsers();
        //3º
        res.status(201).json({ user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};