<template>
    <div class="facility-list">
      <div class="facility-item" v-for="(item, index) in listfacilities" :key="index">
        <el-row>
          <el-col :span="2">
            <i class="el-icon-check green-check"></i>
          </el-col>
          <el-col :span="8">{{ item.name }}</el-col>
        </el-row>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FacilityList',
    props: {
    listfacilities: {
      type: Array,
      required: true
    }
  }
  }
  </script>
  
  <style scoped>
  .facility-list {
    margin: 0;
    padding: 0;
  }
  
  .facility-item {
    margin-bottom: 20px;  /* Adjust the space between list items */
  }
  
  .green-check {
    color: green;  /* Set the check color to green */
  }
  
  .custom-tag {
    padding: 2px 6px;  /* Adjust the size of el-tag */
    font-size: 10px;  /* Adjust the font size of el-tag */
  }
  </style>
  