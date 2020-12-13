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
            let sql = `select count(*) from user where userId = ${id} and password = '${md5Psw}'`;
            userModel.query(sql, [id, password]).then(result => {
                result = JSON.parse(JSON.stringify(result[0]));
                resolve(result)
            }).catch(err => {
                console.log(`catch exception: ${err}`);
                reject(err);
            })
        })
    }
}

module.exports = userModel;