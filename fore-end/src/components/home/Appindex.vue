<!-- index是登陆前界面 -->
<template>
  <div>
    <Navbar/>
    <Loginshow/>
    <Search/>
    <HotSpot>
    </HotSpot>
    <SpotCarousel/>

  </div>
</template>

<script>
import SpotCarousel from '../SpotCarousel.vue'
import Loginshow from '../Loginshow.vue'
import Search from '../Search.vue'
import Navbar from '../Navbar.vue'
import HotSpot from '../HotSpot.vue'
export default {
  name: 'AppIndex',
  components: {
    Navbar,
    Loginshow,
    Search,
    HotSpot,
    SpotCarousel,
    Display
  }
}
</script>

<style scoped>

</style>
