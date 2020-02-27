const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // none, development, production：压缩级别逐渐提高
  entry: './src/components/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: '../public/index.html',
      filename: './index.html'
    })
  ]
};