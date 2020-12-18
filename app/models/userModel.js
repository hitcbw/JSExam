const mysql = require('mysql');
const md5 = require('md5');
/**
 * 
 */
class userModel extends require('./model') {
    static conn = null;

    static async checkPassword(id, password) {
        let sql = `select count(*) from user where userId = ${id} and password = '${password}'`;
        var result = await userModel.query(sql, [id, password]).catch(err => {
            //TODO: need to catch exception when db error occured in query process
        });

        // 去除结果中的RowDataPacket
        result = JSON.parse(JSON.stringify(result[0]));
        return result;
    }
}

module.exports = userModel;