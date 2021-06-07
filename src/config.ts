import dotenv from 'dotenv';
dotenv.config();

export interface Config {
    port: number;
    redisPort: number;
}

export const config: Config = {
    port: +(process.env.PORT || 3000),
    redisPort: +(process.env.REDIS_PORT || 4000)
};

export const baseUrl: string = `https://jsonplaceholder.typicode.com/posts`;