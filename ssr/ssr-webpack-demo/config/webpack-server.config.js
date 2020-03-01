const webpack = require('webpack')
const base = require('./webpack.base.config')

const config = Object.assign({}, base, {
  target: 'node',
  devtool: false,
  entry: './src/entry-server.js',
  output: Object.assign({}, base.output, {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  })
})

module.exports = config