<template>
  <div class="background">
    <div class="search-container">
      <div class="search-item destination-item">
        <!-- <el-input v-model="destination" prefix-icon="el-icon-s-cooperation" type="text" placeholder="目的地/住宿" /> -->
        <el-date-picker v-model="date" type="daterange" range-separator="至" start-placeholder="到店日期"
          end-placeholder="离店日期" :picker-options="pickerOptions" value-format="yyyy-MM-dd" />
        <SearchPeople @change="people"/>
        <el-button type="primary" class="search-button"  @click="goToPage">变更住宿日期</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import SearchPeople from '../../home/Search/SearchPeople.vue'
export default {
  name: 'SearchHotel',
  data() {
    return {
      date: [this.$store.state.search.startdate,this.$store.state.search.enddate],
      destination:this.$store.state.search.location,
      adults: this.$store.state.search.adult,
      children: this.$store.state.search.child,
      rooms: this.$store.state.search.room_num,
      pickerOptions: {
        disabledDate: (time) => {
          const currentDate = new Date()
          if (time.getTime() < currentDate.getTime() - 86400000) {
            // 禁止选择今天及今天之前的日期
            return true
          } else {
            return false
          }
        }
      }
    }
  },
  components: {
    SearchPeople
  },
  methods: {
    goToPage() {
      console.log('goToPage')
      let search;
      search=
        {location:this.destination,
          startdate:this.date[0],
          enddate:this.date[1],
          adult:this.adults,
          child:this.children,
          room_num:this.rooms}
      this.$store.commit("search",search)
      this.$router.go(0);
      // this.$router.push('/hoteldetail'); // 这里的 '/path/to/page' 是你要跳转的页面的路由
    },
    // 事件处理函数
    async people(adults,children,rooms) {
      this.adults=adults
      this.children=children
      this.rooms=rooms
    }
}

}
</script>

<style scoped>
.background {
  margin-left:10px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-container {
  margin-right:45%;
  background-color: #fff;
  padding: 20px;
  border: 3px solid #f0b90b;
  border-radius: 10px;
}

.search-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.el-input {
  width: 300px;
}

.el-date-editor {
  width: 300px;
}

.search-button {
  background-color: #0d47a1;
  color: #fff;
}
.search-button:hover {
  background-color: #409EFF;
  color:#fff
}
</style>
