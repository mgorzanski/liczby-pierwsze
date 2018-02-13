const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin('./../css/app.css');
const webpack = require('webpack');

module.exports = {
    entry: "./_js/index.js",
    output: {
        filename: "app.js",
        path: path.join(__dirname, "assets/js")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["env"]
                    }
                }
            },
            {
                test: /\.css|\.scss$/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: "css-loader", options: { sourceMap: true } },
                        { loader: "postcss-loader", options: { sourceMap: true } },
                        { loader: "sass-loader", options: { sourceMap: true } }
                    ]
                })
            }
        ]
    },
    devtool: 'source-map',
    stats: { children: false },
    plugins: [
        extractSass
    ]
};