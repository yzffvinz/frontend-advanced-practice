import Vue from 'vue/dist/vue.esm'


const vm = new Vue({
  el: '#app',
  template: `
    <nameband></nameband>
  `,
  components: {
    nameband: {
      data() {
        return {
          name: 'VincentLew'
        }
      },
      template: `
        <div>
          <h1>{{ name }}</h1>
        </div>
      `,
    }
  }
})