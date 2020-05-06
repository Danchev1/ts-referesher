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
        test: /\.tsx?$/,
        use: 'babel-loader'
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
      new CleanWebpackPlugin.CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: dir.indexHtmlPath
      })
  ]
};
