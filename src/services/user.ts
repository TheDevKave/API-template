// user.model.ts
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (username: string, email: string, password: string): Promise<User> => {
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    return newUser;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

export const getUsers = async (): Promise<User[]> => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw new Error(`Error getting user: ${error.message}`);
  }
};
