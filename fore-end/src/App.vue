<template>
  <div id="app">
    <Navbar/>
    <Loginshow/>
    <Search/>
  </div>
</template>
<script>
import Loginshow from './components/Loginshow.vue'
import Search from './components/Search.vue'
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Loginshow,
    Search
  }
}
</script>
<style>
</style>
