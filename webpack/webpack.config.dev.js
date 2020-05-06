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
    contentBase: dir.distPath,
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
