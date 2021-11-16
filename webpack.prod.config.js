const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(baseConfig, {
    devtool:'cheap-module-source-map',
    output: {
        path: path.join(__dirname, 'server/public'),
        filename: 'js/[name].[chunkhash:10].js'
    },
    plugins: [
        new CleanWebpackPlugin(['./server/public/','./server/views/']),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            filename: '../views/index.html',
            template: path.join(__dirname, 'src/index.html'),
            favicon:path.join(__dirname, 'src/favicon.ico')
        }),
        new ExtractTextPlugin('css/[name].[contenthash:10].css'),
        new UglifyJSPlugin()
    ]
})