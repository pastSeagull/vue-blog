<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <Head />
  </div>
</template>

<script>
import Head from './components/header/Head'

export default {
  name: 'App',
  components: {
    Head
  }
}
</script>

<style>
</style>
