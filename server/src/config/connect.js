import { Pool } from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tradeloom',
    password: 'areuDAYcare',
    port: 5432, 
  });
  