<template>
    <div class="DeatailSearch">
         <div class="formheader">
            <h2>空房情况</h2>
            <div class="searchbar">
            <SearchHotel/>
            </div>
            <div class="roomtable">
                <RoomTable/>
            </div>
         </div>
    </div>
</template>

<script>
import RoomTable  from './RoomTable.vue'
import SearchHotel from './SearchHotel.vue'
export default {
     name:'DetailSearch',
     components: {
        SearchHotel,
        RoomTable
}}
</script>

<style>
.DeatailSearch {
  width:80%;
  margin-left:15%;
}
.formheader{
    margin-top:20px;

}
.roomtable{
    margin-top:20px;
    margin-right: 5%;
}
</style>