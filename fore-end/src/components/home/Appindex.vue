<!-- index是登陆前界面 -->
<template>
  <div>
    <Navbar/>
    <Loginshow/>
    <Search/>
    <HotSpot>
    </HotSpot>
    <SpotCarousel/>
    <Degination/>
    <FooterBlue/>
   
  </div>
</template>

<script>
import Degination from './Degination/Degination.vue'
import SpotCarousel from './SpotCarousel.vue'
import Loginshow from './Loginshow.vue'
import Search from './Search.vue'
import Navbar from './Navbar.vue'
import HotSpot from './HotSpot.vue'
import FooterBlue from './Footer/FooterBlue.vue'
export default {
  name: 'AppIndex',
  components: {
    Navbar,
    Loginshow,
    Search,
    HotSpot,
    SpotCarousel,
    FooterBlue,
    Degination
}
}
</script>

<style scoped>

</style>
