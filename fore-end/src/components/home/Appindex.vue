<!-- index是登陆前界面 -->
<template>
  <div>
    <Navbar />
    <Loginshow />
    <Search />
    <HotSpot>
    </HotSpot>
    <SpotCarousel />
    <NextTrip />
    <Degination />
    <FooterBlue />

  </div>
</template>

<script>
import NextTrip from './NextTrip/NextTrip.vue'
import Degination from './Degination/Degination.vue'
import SpotCarousel from './Spot/SpotCarousel.vue'
import Loginshow from './Loginshow.vue'
import Search from './Search/Search.vue'
import Navbar from './Navbar/Navbar.vue'
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
    Degination,
    NextTrip
  }
}
</script>

<style scoped>body {
  margin: 0;
  padding: 0;
}</style>
