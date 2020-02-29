const Vue = require('Vue');
const server = require('express')();
const fs = require('fs');
const createRenderer = require('vue-server-renderer').createRenderer;

const renderer = createRenderer({
  template: fs.readFileSync('./index.template.html', 'utf-8')
});

function createApp(url) {
  return new Vue({
    data() {
      return {
        url
      }
    },
    beforeCreate () {
      setTimeout(() => {
        console.log('beforeCreated');
      }, 500);
    },
    created() {
      setTimeout(() => {
        console.log('created');
      }, 500);
    },
    beforeMount () {
          setTimeout(() => {
        document.getElementById('app').innerHTML = 1;
        window.alert('1');
      }, 500);
    },
    mounted () {
      setTimeout(() => {
        window.alert('1');
      }, 500);
    },
    template: `
      <div id="app">
        ${url}
      </div>
    `
  })
}

server.get('*', (req, resp) => {
  console.log(req.url);
  const app = createApp(req.url);
  context = {
    title: 'vue-ssr',
    meta: '<h1>meta-info</h1>'
  };
  renderer.renderToString(app, context, (err, html) => {
    resp.end(html);
  });
});

server.listen(7070);