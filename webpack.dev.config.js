const path = require('path')
const webpack = require('webpack');

module.exports = {
    //入口文件
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],

    output: {
        //打包文件名
        filename: 'bundle.js',
        //打包文件主路径
        path: path.join(__dirname, './dist'),
    }, //出口
    devServer: {
        contentBase: path.join(__dirname, './dist'), //启动路径
        port: 8080, //服务端口号
        historyApiFallback: {
            rewrites: [{
                from: /.*/g,
                to: '/index.html'
            }]
        },
        hot: true, //热更新
    }, //开发服务器
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }, //模块配置
    plugins: [
        //热更新插件
        new webpack.HotModuleReplacementPlugin(),
    ], //插件配置

    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router')
        }
    }
}