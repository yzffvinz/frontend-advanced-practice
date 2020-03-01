const fs = require('fs');
const path = require('path');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');
const resolve = file => path.resolve(__dirname, file);
const server = express();

const bundle = fs.readFileSync(resolve('../dist/server/server-bundle.js'), 'utf-8');
const template = fs.readFileSync('../public/index.ssr.html', 'utf-8')
const renderer = createBundleRenderer(bundle, { template });

server.get('*', async (req, res) => {
  try {
    if (renderer) {
      const renderStream = await renderer.renderToString({ url: req.url });
      res.end(renderStream);
    } else {
      res.end('renderer is not ready')
    }
  } catch (e) {
    console.log(e);
    res.end('inner error');
  }
});

server.listen(7070);