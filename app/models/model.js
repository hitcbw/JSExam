const mysql = require('mysql')

/**
 * 
 */
class Model {
    static conn = null;

    static connect() {
        Model.conn = mysql.createConnection({
            host: '127.0.0.1',
            port: '3306',
            user: 'root',
            password: 'chenbowen',
            database: 'exam'
        })

        Model.conn.connect(err => {
            if (err) {
                console.log(`数据库连接失败：${err.msg}`)
            }
        })

    }

    static disconnect() {
        if (null != Model.conn) {
            Model.conn.end()
        }
    }

    static query(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.connect();
            Model.conn.query(sql, params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                    this.disconnect();
                }
            });

        })
    }
}

module.exports = Model;