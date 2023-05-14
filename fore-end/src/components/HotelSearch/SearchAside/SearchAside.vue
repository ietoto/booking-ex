<template>
    <div id="left" class="rlt-left leftsmall" role="complementary">
      <div id="left_col_wrapper" style="z-index: 101;">
        <div>
          <Searchbar />
        </div>
        <div>
          <HotelFilter />
        </div>
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
.rlt-left,
.rilt-left {
  float: left;
}

.rlt-left {
  width: 40% !important;
  padding: 0 !important;
}

#left.leftsmall {
  font-size: 88%;
}</style>