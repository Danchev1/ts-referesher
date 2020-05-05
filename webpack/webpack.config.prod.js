const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const src = path.dirname(path.resolve(__dirname)) + '/src/app.ts';
const dist = path.dirname(path.resolve(__dirname)) + '/dist';

module.exports = {
  mode: 'production',
  entry: src,
  output: {
    filename: 'app.js',
    path: dist
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader']
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
      new CleanWebpackPlugin.CleanWebpackPlugin()
  ]
};
