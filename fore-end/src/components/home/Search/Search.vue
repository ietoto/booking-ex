<template>
  <div class="background">
    <div class="search-container">
      <div class="search-item destination-item">
        <el-input v-model="destination" prefix-icon="el-icon-s-cooperation" type="text" placeholder="目的地/住宿" />
        <el-date-picker v-model="date" type="daterange" range-separator="至" start-placeholder="到店日期"
          end-placeholder="离店日期" :picker-options="pickerOptions" value-format="yyyy-MM-dd" />
        <SearchPeople @change="people"/>
        <el-button type="primary" class="search-button"  @click="goToPage">搜索</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import SearchPeople from './SearchPeople.vue'
export default {
  name: 'Search',
  mounted: function () {
    console.log('挂载开始')
    this.checksearch()
  },
  data() {
    return {
      date: '',
      destination:'',
      adults: 2,
      children: 0,
      rooms: 1,
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
      var date1 = new Date(this.date[1]);
      var date2 = new Date(this.date[0]);
      var diffTime = Math.abs(date2 - date1);
      var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      let search;
      search=
        {location:this.destination,
          startdate:this.date[0],
          enddate:this.date[1],
          adult:this.adults,
          child:this.children,
          room_num:this.rooms,
          date_num: diffDays}
      this.$store.commit("search",search)
      let searchtype;
      searchtype= {type:0}
      this.$store.commit("searchtype",searchtype)
      this.$router.push('/search'); // 这里的 '/path/to/page' 是你要跳转的页面的路由
    },
    // 事件处理函数
    async people(adults,children,rooms) {
      this.adults=adults
      this.children=children
      this.rooms=rooms
    },
    checksearch(){
      console.log('checksearch')
      if(this.$store.state.search.location!==null)this.destination=this.$store.state.search.location
      if(this.$store.state.search.startdate!==null&&this.$store.state.search.enddate!==null)this.date=[this.$store.state.search.startdate,this.$store.state.search.enddate]
    }
}

}
</script>

<style scoped>
.background {
  position: absolute;
  top:335px;
  left:17%;
  background-size: cover;
  background-position: center;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-container {
  background-color: #fff;
  padding: 20px;
  border: 3px solid #f0b90b;
  border-radius: 10px;
  margin-left: 10px;
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

}
</style>
