const md5 = require('md5')
const userModel = require('../models/userModel')

exports.getAuth = async function(id, password) {
    var md5Psw = md5(password);
    var result = await userModel.checkPassword(id, md5Psw).catch(err => {
        return 'error: ' + err;
    });
    // result is a JSON
    var rowNumber = result['count(*)'];
    if (rowNumber == 1) {
        return 'success';
    } else {
        return 'false';
    }
}