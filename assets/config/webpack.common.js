var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.(pug|jade)$/,
                loader: 'pug-html-loader'
            },
          /*  {
                test: /\.html$/,
                loader: 'html'
            },*/
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
          /*  {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' }/!*'style', 'css?sourceMap'*!/)
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            },*/
            {
                test: /\.styl$/,
                loaders: ['css-to-string', 'css?sourceMap', 'resolve-url', 'stylus']
            },
/*            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass']
            },*/
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'url?limit=10000'
            },
            {
                test: /bootstrap\/dist\/js\/umd\//,
                loader: 'imports?jQuery=jquery'
            },
            {
                loader: 'babel',
                test: /\.js$/,
                exclude: /node_modules/,
                query: {
                    'plugins': ['lodash'],
                    'presets': ['es2015']
                }
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.pug'
        }),

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new LodashModuleReplacementPlugin
    ]
};