const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/client'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      appMountId: 'root',
      title: 'Hello',
    }),
  ],

}