<template>
    <div class="hotel-list">
        <PropertyCard
        v-for="hotel in hotels"
        :key="hotel.name"
        :hotel="hotel"
        @navigate="handleNavigate"/>
    </div>
</template>

<script>
import PropertyCard from './HotelItem/PropertyCard.vue';
export default {
  name: 'HotelList',
  components: {
      PropertyCard
  },
  mounted: function () {
    console.log('挂载开始')
    this.created()
  },
  data() {
      return {
          hotels: []
      }
  },
  methods: {
    handleNavigate(id) {
      console.log(id);
    },
    created() {
      // 在这里获取你的酒店数据
      console.log('根据现有条件查询酒店')
      var _this = this
      this.$axios
        .post('/search/search', {
          location: this.$store.state.search.location,
          startdate: this.$store.state.search.startdate,
          enddate: this.$store.state.search.startdate,
          adult: this.$store.state.search.adult,
          child: this.$store.state.search.child,
          date_num: this.$store.state.search.date_num
        })
        .then(successResponse => {
          if (successResponse.data != null) {
            console.log(successResponse.data)
            this.hotels=successResponse.data.hotels
            console.log(successResponse.hotels)
            this.$store.commit("hotel_num",this.hotels.getLength())
          }
          else {
          }
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>

<style>
.hotel-list {
    width: 80%;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
}
</style>
