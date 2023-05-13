<template>
  <body id="poster">
  <Navbar/>
  <v-sidebar/>
  <el-container style="height: 625px; width: 1500px;">
    <el-aside style="width: 250px;margin-top: 50px;">
    </el-aside>
    <el-container style="height: 575px;margin-top: 20px;border: 1px solid #de1b4f;width: 1200px;position: relative;left: 20px;">
      <el-header>
      <el-form  :inline="true">
        <el-row>
          <el-col :span="60" :offset="100">
            <el-form-item label="用户名：">
              <el-input v-model="username" placeholder="请输入用户名" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="50">
            <el-form-item>
              <el-button type="primary" icon="el-icon-search" @click="getByUserName">查询</el-button>
              <el-button type="primary" icon="el-icon-plus" @click="SetAddInformationVisible">新增</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      </el-header>
      <el-dialog title="添加个人信息" :visible.sync="AddInformationVisible">
        <el-form label-width="100px" style="text-align: center;">
          <el-form-item label="用户名" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="adduser.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="adduser.password"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="adduser.name"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="adduser.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="adduser.postbox"></el-input>
          </el-form-item>
          <el-form-item label="身份" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-select v-model="adduser.state" placeholder="请选择">
              <el-option
                v-for="item in state"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <p v-if="adduser.state===2">
            <el-form-item label="负责酒店" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
              <el-input v-model="adduser.hotel_id"></el-input>
            </el-form-item>
          </p>
          <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
            <el-button type="primary" @click="adduser()" style="width: 80%;">提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="修改个人信息" :visible.sync="SetInformationVisible">
        <el-form label-width="100px" style="text-align: center;">
          <el-form-item label="姓名" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="newname"><el-input v-model="newname"></el-input></a>
          </el-form-item>
          <el-form-item label="电话" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="newphone"><el-input v-model="newphone"></el-input></a>
          </el-form-item>
          <el-form-item label="邮箱" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="newpostbox"><el-input v-model="newpostbox"></el-input></a>
          </el-form-item>
          <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
            <el-button type="primary" @click="updateuser()" style="width: 80%;">提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-main>
        <el-container style="height: 485px;margin-top: -15px;border: 1px solid #de1b4f;width: 1200px;position: relative;left: 0px;">
          <el-table
            border
            height="450"
            :data="userList"
            v-loading="loading"
            element-loading-text="努力加载中"
            @cell-mouse-enter="mouseEnter"
          >
            <el-table-column label="序号" type="index" width="55">
<!--              <template slot-scope="scope">-->
<!--                &lt;!&ndash; (当前页 - 1) * 当前显示数据条数 + 当前行数据的索引 + 1  &ndash;&gt;-->
<!--                <span>{{ (page.currentPage - 1) * page.pageSize + scope.$index + 1 }}</span>-->
<!--              </template>-->
            </el-table-column>
            <el-table-column label="用户名" prop="username" min-width="25px"/>
            <el-table-column label="密码" prop="password" min-width="25px"/>
            <el-table-column label="真实姓名" prop="name" min-width="25px"/>
            <el-table-column label="邮箱" prop="postbox" min-width="50px"/>
            <el-table-column label="手机号" prop="phone" min-width="50px"/>
            <el-table-column label="身份" prop="state" min-width="50px"/>
            <el-table-column label="管理酒店号" prop="hotel_id" min-width="50px"/>
            <el-table-column label="操作" prop="operation" width="200">
              <template>
                <el-button
                  type="text"
                  icon="el-icon-edit"
                  @click="SetSetInformationVisible"
                >修改</el-button>
                <el-button
                  type="text"
                  icon="el-icon-delete"
                  style="color: red;"
                  @click="deleteuser"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-container>
      <!-- el-table中的height用于固定表头 -->

      </el-main>
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
      var _this = this
      this.loading=true
      this.$axios
        .post('/user/showbyusername', {
          username: this.username
        })
        .then(successResponse => {
          if (successResponse.data !=null) {
            console.log('查询成功')
            this.userList=successResponse.data
            for (let i = 0; i < this.userList.length; i++) {
              switch (this.userList[i].state){
                case 0:
                  this.userList[i].state='用户'
                  break
                case 1:
                  this.userList[i].state='系统管理员'
                  break
                case 2:
                  this.userList[i].state='酒店管理员'
                  break
              }
            }
            this.loading=false
          }
          else {
          }
        })
        .catch(failResponse => {
        })
    },
    SetAddInformationVisible(){
      this.AddInformationVisible=true
    },
    adduser(){
    },
    getall(){
      var _this = this
      this.username=null
      this.loading=true
      this.$axios
        .post('/user/showall', {
        })
        .then(successResponse => {
          if (successResponse.data !=null) {
            console.log('查询成功')
            this.userList=successResponse.data
            for (let i = 0; i < this.userList.length; i++) {
              switch (this.userList[i].state){
                case 0:
                  this.userList[i].state='用户'
                  break
                case 1:
                  this.userList[i].state='系统管理员'
                  break
                case 2:
                  this.userList[i].state='酒店管理员'
                  break
              }
            }
            this.loading=false
          }
          else {
          }
        })
        .catch(failResponse => {
        })
    },
    deleteuser(){
      this.$confirm('此操作将永久删除该用户，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then((res) => {
        this.$axios
          .post('/user/delete', {
            id: this.chooseUser.id
          })
          .then(successResponse => {
            if (successResponse.data !=null) {
              console.log('删除成功')
              this.$message({
                duration: 1000,
                showClose: true,
                type: 'success',
                message: '删除成功！'
              })
              this.getall()
            }
            else {
              this.$message({
                duration: 1000,
                showClose: true,
                type: 'error',
                message: '删除失败！'
              })
              this.getall()
            }
          })
          .catch(failResponse => {
          })
      }).catch(() => {
        this.$message({
          duration: 1000,
          showClose: true,
          type: 'info',
          message: '取消删除'
        })
      })
    },
    SetSetInformationVisible(){
      this.SetInformationVisible=true
    },
    updateuser(){

    },
    mouseEnter (data) {
      this.chooseUser = Object.assign({}, data)
    }
  },
  data() {
    return {
      loading: true,
      username: null,
      userList: [],
      chooseUser: null,
      AddInformationVisible: false,
      SetInformationVisible: false,
      adduser:{
        username:null,
        password:null,
        phone:null,
        postbox:null,
        state:null,
        hotel_id:null
      },
      state:[{
        value: 0,
        label: '用户'
      },{
        value: 1,
        label: '系统管理员'
      },{
        value: 2,
        label: '酒店管理员'
      }]
    }
  }
}
</script>

<style scoped>

</style>
