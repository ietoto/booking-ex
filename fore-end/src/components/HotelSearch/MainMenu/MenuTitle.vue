<template>
  <div class="Menutitle">
    <h1 class="h1style1 h1style2">
      {{ this.$store.state.search.location }}: 共{{ this.$store.state.hotel_num }}家住宿
    </h1>
    <h1 class="h1style1 h1style2">
      <el-button type="primary" class="search-button" @click="clear">清除筛选条件</el-button>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    hotel: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedSorter: 'popularity',
    }
  },
  methods: {
    clear() {
      let search = null
      search = this.$store.state.search
      search.select_star_num = []
      search.select_distance_num = []
      search.select_policy_num = []
      search.select_score_num = []
      search.select_hotelFacList = []
      search.select_roomFacList = []
      let searchtype;
      searchtype =
        { type: 0 }
      this.$store.commit("search", search)
      this.$store.commit("searchtype", searchtype)
      this.$router.go(0);
    },

  },
};
</script>

<style scoped>
.Menutitle {
  width: 50%;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.h1style1 {
  flex: 1;
  margin-top: 20px;
  padding: 0;
  font-family: Avenir Next, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-block-end: .67em;
}


</style>
