const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dir = require('./utils/dir');

module.exports = {
    mode: 'development',
    entry: dir.entryPath,
    output: {
        filename: 'app.js',
        path: dir.distPath,
        publicPath: 'dist'
    },
    devServer: {
        port: 8888,
        contentBase: dir.distPath
    },
    devtool: 'inline-source-map',
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
                            hmr: true
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
            filename: '[name].css'
        })
    ]
};
