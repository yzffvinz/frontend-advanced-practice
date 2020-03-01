const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueServerRendererPlugin = require('vue-server-renderer/server-plugin')
const webpack = require('webpack')

module.exports = (env) => {
  return {
    mode: env && env.production ? 'production' : 'development',
    entry: './src/entry-server.js',
    target: 'node',
    output: {
      filename: './server/server-bundle.js',
      libraryTarget: 'commonjs2'
    },
    module: {
      rules: [
        { test: /\.vue$/, use: 'vue-loader' }
      ]
    },
    plugins: [
      new VueLoaderPlugin({
        optimizeSSR: false
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
      }),
      // new VueServerRendererPlugin({
      //   filename: 'server/server-bundle.js'
      // }),
      // new webpack.NamedModulesPlugin(),
      // new webpack.HotModuleReplacementPlugin()
    ],
    // devServer: {
    //   port: 9000,
    //   // hot: true,
    //   // https: true
    // }
  }
}