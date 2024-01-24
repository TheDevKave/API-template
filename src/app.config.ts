import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT ?? "8000",
};

export const dbConfig = {
  url: process.env.DATABASE_URL,
};
