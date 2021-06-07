import dotenv from "dotenv";
dotenv.config();

export interface Config {
    port: number;
}

export const config: Config = {
    port: +(process.env.PORT || 3000),
};

export const baseUrl: string = `https://jsonplaceholder.typicode.com/posts`;
