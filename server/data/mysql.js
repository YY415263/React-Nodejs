/**
 * Created by zhekexinxi on 24/01/2018.
 */
var mysql = require('mysql');


exports.getData = function (callback) {

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '123456',
        database : 'gamepk'
    });

    connection.connect();

    connection.query('SELECT * FROM game', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        callback(results);
    });

};