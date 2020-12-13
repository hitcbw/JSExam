const mysql = require('mysql');
const md5 = require('md5');
/**
 * 
 */
class userModel extends require('./model') {
    static conn = null;

    static checkPassword(id, password) {
        var md5Psw = md5(password);
        return new Promise((resolve, reject) => {
            let sql = `select count(*) from user where id = ${id} and password = ${md5Psw}`;
            this.query(sql, [id, password]).then(result => {
                if (Number(result) == 1) {
                    resolve('get user success');
                } else {
                    resolve('get user failed');
                }
            }).catch(err => {
                console.log(`catch exception: ${err}`);
                reject(err);
            })
        })
    }
}

module.exports = userModel;