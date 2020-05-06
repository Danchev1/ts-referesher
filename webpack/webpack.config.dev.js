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
        test: /\.ts?$/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js' ],
  }
};
