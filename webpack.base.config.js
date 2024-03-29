const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: {
        app:'./src/main.js',
        verdor:['react','react-dom','react-redux']
    },
    output: {
        publicPath: '/',
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: [".js", ".jsx", ".less", ".json"]
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader:'css-loader',
                        options:{
                            minimize:true
                        }
                    }]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [autoprefixer({ browsers: ['> 1%', 'IE >= 10'] })],
                            },
                        },
                        { loader: 'less-loader' }
                    ]
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options:{
                        limit: 10000,
                        name: 'imgs/[name].[ext]?[hash]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor",'runtime'],
            minChunks: 2
        })
    ]
}

module.exports = config;