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
          <el-form label-width="100px">
            <el-form-item label="原始密码" prop="pass" style="width: 80%;">
              <a v-if="user"><el-input v-model="user.password" :disabled=true></el-input></a>
            </el-form-item>
            <el-form-item label="新密码" prop="pass" style="width: 80%;">
              <a v-if="newuser"><el-input v-model="newuser.password"></el-input></a>
            </el-form-item>
            <el-form-item style="width: 80%;">
              <el-button type="primary" @click="updatePassword()" style="width: 80%;">提交</el-button>
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
              <a v-else="user.state === 2">酒店管理员</a>
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
    setpassword() {
      this.SetPasswordVisible = true
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
            this.newuser = successResponse.data
          }
          else {
            var path = this.$route.query.redirect
            this.$router.replace({ path: path === '/' || path === undefined ? '/index' : path })
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
      newuser: null
    }
  }
}
</script>

<style scoped></style>
