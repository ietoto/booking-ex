<template>
 <div class="rlt-right" role="main">
    <MenuTitle/>
    <HotelList/>
<!--    <ListFooter/>-->
 </div>
</template>

<script>
import ListFooter from './ListFooter.vue';
import HotelList from './HotelList.vue';
import MenuTitle from './MenuTitle.vue';
export default {
   name: 'MainMenu',
   components: {
         MenuTitle,
          HotelList,
            ListFooter
   }
}
</script>

<style scoped>
.rlt-right {
    width: 60%!important;
    padding: 0!important;
    margin-top:1em;
    margin-bottom: 1em;
    margin-left: 0px;
    margin-right: 0px;
    float: right;
    font-style: normal!important;;
}
</style>
