const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
  entry: {
    app: './src/entry-client.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist',
    filename: '[name].[chunkhash:5].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

// if (process.env.NODE_ENV !== 'production') {
//   config.plugins = []
//   return module.exports = config
// }
//
//
// config.plugins.push(
//   new webpack.LoaderOptionsPlugin({
//     minimize: true
//   }),
//   new webpack.optimize.UglifyJsPlugin({
//     compress: {
//       warnings: false
//     }
//   })
// )

module.exports = config