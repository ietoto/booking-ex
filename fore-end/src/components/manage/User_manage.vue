<template>
  <body id="poster">
  <Navbar/>
  <v-sidebar/>
  <el-container style="height: 625px; width: 1500px;">
    <el-aside style="width: 250px;margin-top: 50px;">
    </el-aside>
    <el-container style="height: 575px;margin-top: 20px;border: 1px solid #de1b4f;width: 1200px;position: relative;left: 20px;">
      <el-form  :inline="true">
        <el-row>
          <el-col :span="6000" :offset="10000">
            <el-form-item label="用户名：">
              <el-input v-model="username" placeholder="请输入用户名" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="50">
            <el-form-item>
              <el-button type="primary" icon="el-icon-search" @click="getByUserName">查询</el-button>
              <el-button type="primary" icon="el-icon-plus" @click="adduser">新增</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-container>
  </el-container>
  </body>
</template>

<script>
import Navbar from '../home/Navbar/Navbar.vue'
import vSidebar from './Sidebar.vue';
export default {
  name: "User_manage",
  components :{
    Navbar,
    vSidebar
  },
  mounted: function () {
    console.log('挂载开始')
    this.getall()
  },
  methods: {
    getByUserName(){

    },
    adduser(){

    },
    getall(){

    }
  },
  data() {
    return {
      username:null,
      userList:[]
    }
  }
}
</script>

<style scoped>

</style>
