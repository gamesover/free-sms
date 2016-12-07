var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

const url = 'http://localhost:8080/';

module.exports = webpackMerge(commonConfig, {
    devtool: 'inline-source-map',

    output: {
        path: helpers.root('.temp'),
        publicPath: url,
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new OpenBrowserPlugin({url: url})
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                pathRewrite: {'^/api': ''}
            }
        }
    }
});
