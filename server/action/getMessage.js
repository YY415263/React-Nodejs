/**
 * Created by zhekexinxi on 23/01/2018.
 */
var getMessageList = require('../data/message');

exports.execute = function (req, res) {
    getMessageList.getMessageList(function (data) {
        res.send(data);
    });
};