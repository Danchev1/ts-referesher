const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: false
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new CleanWebpackPlugin.CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: dir.indexHtmlPath,
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        })
    ]
};
