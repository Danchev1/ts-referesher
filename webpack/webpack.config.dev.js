const path = require('path');

// const src = path.join(process.cwd(), 'src');
const app = path.join(process.cwd(), 'src/app.ts');
const dist = path.join(process.cwd(), 'dist');

module.exports = {
  mode: 'development',
  entry: app,
  output: {
    filename: 'app.js',
    path: dist,
    publicPath: 'dist'
  },
  devServer: {
    port: 8888,
    contentBase: dist,
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
