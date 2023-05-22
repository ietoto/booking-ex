<template>
   <div class="rlt-right" role="main">
      <MenuTitle />
      <div>
         <el-select v-model="selectedSorter" placeholder="选择排序方式" class="sorter-select" @change="handleSortCommand">
            <el-option label="星级降序" value="popularitytopdown"></el-option>
            <el-option label="星级升序" value="popularitybottomup"></el-option>
            <el-option label="评分降序" value="ratingtopdown"></el-option>
            <el-option label="评分升序" value="ratingbottomup"></el-option>
         </el-select>
      </div>
      <HotelList />
   </div>
</template>

<script>
import HotelList from './HotelList.vue';
import MenuTitle from './MenuTitle.vue';
export default {
   name: 'MainMenu',
   data() {
      return {
         selectedSorter: '',
      }
   },
   components: {
      MenuTitle,
      HotelList
   },
   methods: {
      handleSortCommand(command) {
         console.log('Selected Sorter:', command);
         // Fetch the hotel data from your Vuex store
         let hotels = this.$store.state.searchshow.hotels;

         switch (command) {
            case 'popularitytopdown':
               hotels.sort((a, b) => b.star - a.star);
               break;

            case 'popularitybottomup':
               hotels.sort((a, b) => a.star - b.star);
               break;
            case 'ratingtopdown':
               hotels.sort((a, b) => b.score - a.score);
               break;

            case 'ratingbottomup':
               hotels.sort((a, b) => a.score - b.score);
               break;

            default:
               console.log('Unknown command:', command);
               break;
         }

         this.$store.commit('setHotels', hotels);
      }
   }
}
</script>

<style scoped>
.sorter-select {
   width: 200px;
}

.rlt-right {
   width: 60% !important;
   padding: 0 !important;
   margin-top: 1em;
   margin-bottom: 1em;
   margin-left: 0px;
   margin-right: 0px;
   float: right;
   font-style: normal !important;
   ;
}
</style>
