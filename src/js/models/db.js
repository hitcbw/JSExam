const DbClient = require('ali-mysql-client');

const db = new DbClient({
    host: '127.0.0.1:3306',
    user: 'root',
    password: 'chenbowen',
    database: 'exam'
});

async function getCount() {
    return new Promise((resolve, reject) => {
            setTimeout(function() {
                var name = "Lucy";
                resolve(name);
            }, 1000)
        })
        /* try {
            const result = await app.db.select('count(*)')
                .from('user')
                .queryValue();

            return result;
        } catch (error) {

        } */

};
async function main() {
    var r = await getCount();
    console.log(r);
}
main();
/* var promise = getCount();
promise.then(function resolve() {
    console.log(promise);
}, function reject() {}); */