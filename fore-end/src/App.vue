<template>
  <div id="app">
     <router-view></router-view>
    <Navbar/>
    <Loginshow/>
    <Search/>
    <HotSpot>
    </HotSpot>
    <SpotCarousel/>
  </div>
</template>
<script>
import SpotCarousel from './components/SpotCarousel.vue'
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
    HotSpot,
    SpotCarousel
  }
}
</script>
<style>
body
{
  margin:0;
  padding:0;
}
</style>
