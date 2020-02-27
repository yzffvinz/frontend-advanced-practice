const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer();

const app = new Vue({
  data() {
    return {
      name: 'lwz'
    }
  },
  template: `
    <html>
      <h1>this is server renderer demo by {{ name }}</h1>
    </html>
  `
});

renderer.renderToString(app).then(content => {
  console.log(content);
});