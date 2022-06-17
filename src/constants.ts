export const ENV = process.env.NODE_ENV;
export const ENVFILE = ENV ? `.env.${ENV}` : '.env';

export const EnvKeys = {
    JWT_SECRET: 'JWT_SECRET',
    DATABASE_URL: 'DATABASE_URL',
};
