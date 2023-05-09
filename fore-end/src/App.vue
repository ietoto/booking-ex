<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <Navbar/>
    <Loginshow/>
    <Search/>
    <HotSpot>
    </HotSpot>
  </div>
</template>
<script>
import Loginshow from './components/Loginshow.vue'
import Search from './components/Search.vue'
import Navbar from './components/Navbar.vue'
import HotSpot from './components/HotSpot.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Loginshow,
    Search,
    HotSpot
  }
}
</script>
<style>
</style>
