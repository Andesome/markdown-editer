/**
 *  created by ling on 2017-12-6 15:10.
 */
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Create multiple instances
const extractCSS = new ExtractTextPlugin('css/[name]-one.css');
const extractLESS = new ExtractTextPlugin('css/[name]-two.css');
const extractSCSS = new ExtractTextPlugin('css/[name]-three.css');

module.exports = {
    entry: path.resolve(__dirname, './src/script/index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/bundle.js',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
                // plugins: ['transform-runtime',"transform-object-rest-spread"]
            }
        }, {
            test: /\.css$/,
            use: extractCSS.extract({
                fallback: "style-loader",
                use:['css-loader']
            })
        }, {
            test: /\.scss$/,
            use: extractSCSS.extract({
                fallback: "style-loader",
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.(png|jpg)$/,
            use: 'url?limit=25000'
        }]
    },
    plugins: [
        extractCSS,
        extractLESS,
        extractSCSS
    ]
};

