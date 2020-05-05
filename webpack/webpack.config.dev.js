const path = require('path');

const src = path.dirname(path.resolve(__dirname)) + '/src/app.ts';
const dist = path.dirname(path.resolve(__dirname)) + '/dist';

module.exports = {
  mode: 'development',
  entry: src,
  output: {
    filename: 'app.js',
    path: dist,
    publicPath: 'dist'
  },
  devtool: 'inline-source-map',
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
  }
};
