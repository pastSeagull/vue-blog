<template>
  <div id="app">

    <Head />
    <router-view></router-view>
  </div>
</template>

<script>
import Head from './components/header/Head'
export default {
  name: 'App',
  components: {
    Head,
  }
}
</script>

<style lang='stylus' scoped></style>
