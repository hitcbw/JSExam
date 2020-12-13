const { rejects } = require("assert");
const { Console } = require("console");
const fs = require("fs");
const { resolve } = require("path");


exports.returnExt = function(extName) {

    // 这里的var 在fs.readfile里赋值时不起作用的？？
    //json parse后通过.无法访问，因为extName里本来属性就是.html，.重复了
    return new Promise((resolve, reject) => {
        fs.readFile("resources/mime.json", (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            mime = JSON.parse(data.toString());
            resolve(mime[extName]);
        });
    })

}