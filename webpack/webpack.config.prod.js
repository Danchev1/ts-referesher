const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dir = require('./utils/dir');

module.exports = {
    mode: 'production',
    entry: dir.entryPath,
    output: {
        filename: 'app.js',
        path: dir.distPath
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin.CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: dir.indexHtmlPath
        })
    ]
};
