<template>
   <div class="form-container">
     <el-form>
       <div class="formitem">
         <el-form-item>
           <div class="label">境内外特价搜不停</div>
         </el-form-item>
         <el-form-item label="目的地/住宿名称：" style="margin-left: 8px;">
           <el-input v-model="destination" placeholder="目的地？" prefix-icon="el-icon-search" class="input" style="margin-left: 5px;"></el-input>
         </el-form-item>
         <el-form-item label="入住日期：" style="margin-left: 8px; margin-top: -20px;">
           <el-date-picker
             style="margin-left: 6px;"
             v-model="value"
             type="daterange"
             range-separator="至"
             start-placeholder="到店日期"
             end-placeholder="离店日期"
             :picker-options="pickerOptions"
             class="date"
           />
         </el-form-item>
       </div>
     </el-form>
     <div class="search-bar-wrapper">
       <SearchPeople style="margin-left: 3px; margin-top: -5px;" @change="people"/>
     </div>
     <el-button type="primary" class="search-button">搜索</el-button>
   </div>
 </template>

 <script>
 import SearchPeople from '../../home/Search/SearchPeople.vue';

 export default {
   name: "Searchbar",
   components: {
     SearchPeople,
   },
   methods: {
     // 事件处理函数
     async people(adults,children,rooms) {
       this.adults=adults
       this.children=children
       this.rooms=rooms
     }
   },
   data() {
     return {
       value: [this.$store.state.search.startdate,this.$store.state.search.enddate],
       destination: this.$store.state.search.location,
       adults: 2,
       children: 0,
       rooms: 1,
       pickerOptions: {
         disabledDate: (time) => {
           const currentDate = new Date();
           if (time.getTime() < currentDate.getTime() - 86400000) {
             // 禁止选择今天及今天之前的日期
             return true;
           } else {
             return false;
           }
         },
       },
     };
   },
 };
 </script>

 <style scoped>
 .form-container {
   margin-top: 20px;
   border-radius: 8px;
   margin-bottom: 8px;
   background-color: #ffc489;
 }

 form {
   margin: 0;
   padding: 0;
 }

 .formitem {
   color: #1a1a1a;
   font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
   font-size: 12px;
   font-weight: 400;
   line-height: 20px;
   width: 100%;
   margin-bottom: 0;
 }

 .label {
   font-family: Avenir Next, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
   padding: 20px 10px;
   background: #FFB700;
   font-weight: bolder;
   font-size: 20px;
   line-height: 28px;
   border-radius: 20px;
   margin-bottom: -4px;
 }

 .search-button {
   text-align: center;
   color: #0D47A1;
   margin-top: 6%;
   margin-left:5%;
   padding:15px 10px;
   margin-bottom: 5%;
   width: 92%;
 }

 .search-bar-wrapper {
   position: relative;
   margin-top:10%;
   z-index: 1;
   width: 95%;
   margin-left:2.5%;
 }
 .input {
   margin-left:5%;
   width: 93%;
 }
 .date{
   margin-left:5%;
   width: 93%;
 }
 </style>
