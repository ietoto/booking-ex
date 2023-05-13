<template>
  <div>
    <!-- <Searchbar/>
    <Searchcheck/> -->
    <HotelFilter/>
  </div>
</template>

<script>
import HotelFilter from './HotelFilter.vue';
import Searchcheck from './Searchbar.vue';
import Searchbar from './Searchcheck.vue';
export default {
  name: "SearchAside",
  components: {
    Searchbar,
    Searchcheck,
    HotelFilter
  }
}
</script>

<style></style>