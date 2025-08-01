import knex from 'knex';
import knexConfig from '../../knexfile';

const environment = (process.env.NODE_ENV || 'development') as keyof typeof knexConfig;

const db = knex(knexConfig[environment]);

export default db;
