/**
 * Created by zhekexinxi on 23/01/2018.
 */
var MessageList = [

    { "Message":"Hello React"},

    { "Message":"Hello Webpack"},

    { "Message":"Hello Nodejs"},

    { "Message":"Hello Express"}

];

exports.getMessageList = function (callback) {
    callback(MessageList);
};