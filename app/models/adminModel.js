const mysql = require('mysql');

/**
 * 
 */
class adminModel extends require('./model') {
    static conn = null;

    /**
     * 
     * @param {userid} id 
     * @param {md5-encrypted password } password 
     */
    static checkPassword(id, password) {
        return new Promise((resolve, reject) => {
            let sql = `select count(*) from user where userId = ${id} and password = '${password}'`;
            userModel.query(sql, [id, password]).then(result => {
                result = JSON.parse(JSON.stringify(result));
                resolve(result)
            }).catch(err => {
                console.log(`catch exception: ${err}`);
                reject(err);
            })
        })
    }
}

module.exports(adminModel);