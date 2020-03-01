const webpack = require('webpack')
const base = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const config = Object.assign({}, base, {
  plugins: base.plugins.concat([
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      // inject: process.env.NODE_ENV !== 'production' ? 'body' : false,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    })
  ])
})

module.exports = config