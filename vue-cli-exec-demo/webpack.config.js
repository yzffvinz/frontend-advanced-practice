const path = require('path');

module.exports = {
  mode: 'none', // none, development, production：压缩级别逐渐提高
  entry: './src/components/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};