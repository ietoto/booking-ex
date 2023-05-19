<template>
    <div class="hotel-list">
        <PropertyCard
        v-for="hotel in hotels.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"
        :key="hotel.id"
        :hotel="hotel"
        @navigate="handleNavigate"/>
      <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="total,prev, pager, next, jumper"
        :page-size="6"
        :total="hotels.length">
      </el-pagination>
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
    if(this.$store.state.searchtype.type===0){
      this.created()
    }
    else{
      this.createdsecond()
    }
  },
  data() {
      return {
        hotels: [],
        hotel_num:{
          num: null
        },
        page: {
          currentPage: 1, // 当前页
          pageSize: 6, // 每页条数
        }
      }
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.currentPage = val
    },
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
            this.hotel_num.num=successResponse.data.hotels.length
            console.log(this.hotel_num)
            this.$store.commit("hotel_num",this.hotel_num.num)
            this.$store.commit("searchshow",successResponse.data)
            this.hotels=successResponse.data.hotels
          }
          else {
          }
        })
        .catch(failResponse => {
        })
    },
    createdsecond() {
      // 在这里获取你的酒店数据
      console.log('根据现有条件查询酒店')
      var _this = this
      this.$axios
        .post('/search/SearchForSecondLimit', {
          location: this.$store.state.search.location,
          startdate: this.$store.state.search.startdate,
          enddate: this.$store.state.search.startdate,
          adult: this.$store.state.search.adult,
          child: this.$store.state.search.child,
          date_num: this.$store.state.search.date_num,
          select_score_num: this.$store.state.search.select_score_num,
          select_star_num: this.$store.state.search.select_star_num,
          select_distance_num: this.$store.state.search.select_distance_num,
          select_policy_num: this.$store.state.search.select_policy_num,
          select_hotelFacList: this.$store.state.search.select_hotelFacList,
          select_roomFacList: this.$store.state.search.select_roomFacList
        })
        .then(successResponse => {
          if (successResponse.data != null) {
            console.log(successResponse.data)
            this.hotel_num.num=successResponse.data.hotels.length
            console.log(this.hotel_num)
            this.$store.commit("hotel_num",this.hotel_num.num)
            this.hotels=successResponse.data.hotels
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
