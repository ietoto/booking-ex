<template>
    <div  class="rlt-left">
      <div id="left_col_wrapper" style="z-index: 101;">
          <Searchbar />
          <HotelFilter />
      </div>
    </div>
</template>

<script>
import HotelFilter from './HotelFilter.vue';
import Searchbar from './Searchbar.vue';
export default {
  name: "SearchAside",
  components: {
    Searchbar,
    HotelFilter
  }
}
</script>

<style scoped>

.rlt-left {
  width: 20% !important;
  padding: 0 !important;
  margin-top: 0;
  font-size: 88%;
  margin-bottom: 1em;
  font-style: normal;
  float: left;
  margin-left: 18%;
}
</style>