const mysql = require('mysql2');

export default function SqlQuery(sqlQuery: string): Promise<any> {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'account'
        });

        connection.connect();

        connection.query(sqlQuery, (err: any, rows: any) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });

    })


}