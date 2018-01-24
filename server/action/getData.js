/**
 * Created by zhekexinxi on 24/01/2018.
 */
var getData = require('../data/mysql');

exports.execute = function (req, res) {
    getData.getData(function (data) {
        res.send(data);
    });
};