import { createPool } from 'mysql2';

export const SqlQuery = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydatabase',
    connectionLimit: 100,
    multipleStatements: true,
});


