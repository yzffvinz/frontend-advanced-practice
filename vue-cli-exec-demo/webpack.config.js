const path = require('path');



module.exports = env => {
  env = env || {};
  return {
    entry: './src/components/index.js',
    ...(env.development) ? require('./config/webpack.development.js') : require('./config/webpack.production.js'),
    module: {
      rules: []
    }
  }
}