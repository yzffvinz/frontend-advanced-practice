const Vue = require('Vue');
const server = require('express')();
const fs = require('fs');
const renderer = require('vue-server-renderer').createRenderer();

function createApp(url) {
  // if (url === '/') {
  //
  // } else {
  //
  // }
  // let _html = fs.readFileSync(`temlate${url}`.html, 'UTF-8')

  return new Vue({
    data() {
      return {
        url
      }
    },
    template: `
      <div>
        you visit <font color="red">${url}</font>
      </div>
    `
  })
}

server.get('*', (req, resp) => {
  const app = createApp(req.url);
  renderer.renderToString(app).then(html => {
    resp.end(html)
  });
});

server.listen(7070);