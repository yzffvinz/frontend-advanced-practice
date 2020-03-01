const fs = require('fs')
const path = require('path')
const express = require('express')
const vueRenderer = require('vue-server-renderer')
const resolve = file => path.resolve(__dirname, file)

const app = express()

const createRenderer =  bundle => {
  // https://github.com/isaacs/node-lru-cache#options
  return vueRenderer.createBundleRenderer(bundle, {
    template: fs.readFileSync(resolve('../public/index.ssr.html'), 'utf-8')
  })
}

let renderer = createRenderer(fs.readFileSync(resolve('../dist/server-bundle.js'), 'utf-8'))

app.get('*', async (req, res) => {
  try {
    const context = {url: req.url}
    const renderStream = await renderer.renderToString(context)
    res.end(renderStream);
  } catch (e) {
    console.log(e)
    res.end()
  }
})

app.listen(7070)