const mysql = require('mysql2');

export default function SqlQuery(query: string, params?: any[]): Promise<any[]> {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'uppa_accounts'
    });

    return new Promise((resolve, reject) => {
        connection.query(query, params, (error: Error | null, results: any[]) => {
            connection.end(); // Close connection after query execution
            
            if (error) {
                console.error('SQL Query Error:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}
