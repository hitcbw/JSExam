const mysql = require('mysql');
const dbConfig = require('../../config');
const appConfig = require('../../config')
    /**
     * the base class of data model
     * all the model class need to be extended from this
     */
class Model {
    static conn = null;

    static connect() {
        Model.conn = mysql.createConnection(appConfig.dbConfig)

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
                console.log(sql)
                console.log(params)
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