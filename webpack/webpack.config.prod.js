const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// const src = path.join(process.cwd(), 'src');
const app = path.join(process.cwd(), 'src/app.ts');
const dist = path.join(process.cwd(), 'dist');

module.exports = {
  mode: 'production',
  entry: app,
  output: {
    filename: 'app.js',
    path: dist
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
      new CleanWebpackPlugin.CleanWebpackPlugin()
  ]
};
