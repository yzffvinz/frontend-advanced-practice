<template>
  <div>
    <router-link to="/">Main</router-link> |
    <router-link to="/foo">FOO</router-link> |
    <router-link to="/bar">BAR</router-link> |
    <router-link to="/baz">BAZ</router-link>
    <br />
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>

</style>