<template>
  <body id="poster">
    <Navbar />
    <el-container style="height: 718px; width: 1500px;border: 1px solid #de1b4f;">
      <el-aside style="width: 300px;margin-top: 50px;border: 1px solid #de1b4f;">
        <el-container style="height: 60px;width: 200px;border: 1px solid #28de1b;">
          <el-button type="primary" style="height: 100%;width: 100%;background: #a5c8fa;border: none"
            v-on:click="setpassword">修改密码</el-button>
        </el-container>
        <el-dialog title="密码修改" :visible.sync="SetPasswordVisible">
          <el-form label-width="100px" style="text-align: center;">
            <el-form-item label="原始密码" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
              <a v-if="user"><el-input v-model="user.password" :disabled=true></el-input></a>
            </el-form-item>
            <el-form-item label="新密码" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
              <a v-if="newpassword"><el-input v-model="newpassword"></el-input></a>
            </el-form-item>
            <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
              <el-button type="primary" @click="updatePassword()" style="width: 80%;">提交</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <el-container style="height: 60px;width: 200px;border: 1px solid #28de1b;position: relative;top: 20px;">
          <el-button type="primary" style="height: 100%;width: 100%;background: #a5c8fa;border: none"
                     v-on:click="SetInformation">修改信息</el-button>
        </el-container>
        <el-dialog title="信息" :visible.sync="SetInformationVisible">
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
              <el-button type="primary" @click="updateInformation()" style="width: 80%;">提交</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </el-aside>
      <el-container style="height: 718px;border: 1px solid #de1b4f;margin-top: 50px;">
        <el-descriptions class="margin-top" title="个人信息" :column="3" :data="user">
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user"></i>
              用户名
            </template>
            <a v-if="user">{{ user.username }}</a>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-mobile-phone"></i>
              手机号
            </template>
            <a v-if="user">{{ user.phone }}</a>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-location-outline"></i>
              姓名
            </template>
            <a v-if="user">{{ user.name }}</a>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-tickets"></i>
              密码
            </template>
            <a v-if="user">{{ user.password }}</a>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              邮箱
            </template>
            <a v-if="user">{{ user.postbox }}</a>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              身份
            </template>
            <a v-if="user">
              <a v-if="user.state === 0">用户</a>
              <a v-else-if="user.state === 1">系统管理员</a>
              <a v-else-if="user.state === 2">酒店管理员</a>
            </a>
          </el-descriptions-item>
          <a v-if="user"><a v-if="user.state === 2">
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-office-building"></i>
                  管理的酒店
                </template>
                <a v-if="user">{{ user.hotel_id }}</a>
              </el-descriptions-item>
            </a>
          </a>
        </el-descriptions>
      </el-container>
    </el-container>
  </body>
</template>

<script>
import Navbar from './home/Navbar/Navbar.vue'
export default {
  name: "user",
  components: {
    Navbar
  },
  mounted: function () {
    console.log('挂载开始')
    this.getuser()
  },
  methods: {
    updatePassworderror1() {
      this.$message({
        duration: 1000,
        showClose: true,
        message: '密码不能为空！',
        type: 'error'
      });
    },
    updatePassworderror2() {
      this.$message({
        duration: 1000,
        showClose: true,
        message: '密码冲突！',
        type: 'error'
      });
    },
    updatePassworderror3() {
      this.$message({
        duration: 1000,
        showClose: true,
        message: '密码不能和原密码一致！',
        type: 'error'
      });
    },
    updatePasswordright() {
      this.$message({
        duration: 1000,
        showClose: true,
        message: '密码修改成功！',
        type: 'success'
      });
    },
    updateInformationright(){
      this.$message({
        duration: 1000,
        showClose: true,
        message: '个人信息修改成功！',
        type: 'success'
      });
    },
    setpassword() {
      this.SetPasswordVisible = true
    },
    SetInformation() {
      this.SetInformationVisible = true
    },
    getuser() {
      console.log('getuser')
      var _this = this
      this.$axios
        .post('/user/login', {
          username: this.$store.state.user.username,
          password: this.$store.state.user.password
        })
        .then(successResponse => {
          if (successResponse.data.username != null) {
            this.user = successResponse.data
            this.newpassword = successResponse.data.password
            this.newname = successResponse.data.name
            this.newphone = successResponse.data.phone
            this.newpostbox = successResponse.data.postbox
            if(!this.newpassword)this.newpassword=' '
            if(!this.newname)this.newname=' '
            if(!this.newphone)this.newphone=' '
            if(!this.newpostbox)this.newpostbox=' '
          }
          else {
            var path = this.$route.query.redirect
            this.$router.replace({ path: path === '/' || path === undefined ? '/index' : path })
          }
        })
        .catch(failResponse => {
        })
    },
    updatePassword(){
      console.log('updatePassword')
      var _this = this
      if(this.newpassword===''){
        this.updatePassworderror1();
        return
      }
      if(this.newpassword===this.user.password){
        this.updatePassworderror3();
        return
      }
      this.$axios
        .post('/user/update', {
          username: this.user.username,
          password: this.newpassword,
          id: this.user.id,
          phone: this.user.phone,
          name: this.user.name,
          state: this.user.state,
          postbox: this.user.postbox,
          hotel_id: this.user.hotel_id
        })
        .then(successResponse => {
          if (successResponse.data.username != null) {
            this.user = successResponse.data
            this.newpassword = successResponse.data.password
            _this.$store.commit('login', successResponse.data)
            this.updatePasswordright()
            this.SetPasswordVisible = false
          }
          else {
            this.updatePassworderror2();
          }
        })
        .catch(failResponse => {
        })
    },
    updateInformation(){
      console.log('updateInformation')
      var _this = this
      this.$axios
        .post('/user/update', {
          username: this.user.username,
          password: this.user.password,
          id: this.user.id,
          phone: this.newphone,
          name: this.newname,
          state: this.user.state,
          postbox: this.newpostbox,
          hotel_id: this.user.hotel_id
        })
        .then(successResponse => {
          if (successResponse.data.username != null) {
            this.user = successResponse.data
            this.newphone = successResponse.data.phone
            this.newname = successResponse.data.name
            this.newpostbox = successResponse.data.postbox
            _this.$store.commit('login', successResponse.data)
            this.updateInformationright()
            this.SetInformationVisible = false
          }
          else {
          }
        })
        .catch(failResponse => {
        })
    }
  },
  data() {
    return {
      user: null,
      SetPasswordVisible: null,
      SetInformationVisible: null,
      newpassword: null,
      newpostbox: null,
      newphone: null,
      newname: null
    }
  }
}
</script>

<style scoped></style>
