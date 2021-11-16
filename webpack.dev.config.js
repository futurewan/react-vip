const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = merge(base,{
    devtool:'cheap-module-eval-source-map',
    output:{
        path: path.join(__dirname, 'dist'),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html'),
            favicon:path.join(__dirname, 'src/favicon.ico')
        }),
        new webpack.HotModuleReplacementPlugin(), // 热加载(全局刷新)
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        publicPath: '/',
        host:'127.0.0.1',
        port: 9006,
        historyApiFallback: true,
        hot: true // 激活服务器的HMR
    }
})