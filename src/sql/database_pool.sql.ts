const mysql = require('mysql2');
const { DB_HOST, DB_PASSWORD, DB_USER, DB } = require('../infrastructure/config/config');


export default function SqlQuery(query: string, params?: any[]): Promise<any> {
    const connection = mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB
    });

    return new Promise((resolve, reject) => {
        connection.query(query, params, (error: Error | null, results: any[]) => {
            connection.end(); 

            if (error) {
                console.error('SQL Query Error:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}
