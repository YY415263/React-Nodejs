/**
 * Created by zhekexinxi on 23/01/2018.
 */
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 页面入口文件配置
    entry : {
        'main': './main.js'
    },
    // 入口文件输出配置
    output : {
        path : __dirname + '/static/output/',
        filename : '[name].bundle.js'
    },
    module: {
        // // 加载器配置
        // loaders: [
        //     {
        //         test: /\.js$/,
        //         loader: 'babel-loader!jsx-loader?harmony'
        //     },
        //     {
        //         test: /\.css$/,
        //         loader: 'style-loader!css-loader'
        //     }
        // ]
    },
    // 插件项
    plugins : [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new HtmlWebpackPlugin({
           title: 'React-Nodejs'
     })
    ]
}