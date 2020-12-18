const mysql = require('mysql');

/**
 * 
 */
class generalModel extends require('./model') {
    static conn = null;

    /**
     * 
     * @param {querySql} id 
     * @param {md5-encrypted password } password 
     */
    static querySql(sql) {
        return new Promise((resolve, reject) => {
            userModel.query(sql).then(result => {
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