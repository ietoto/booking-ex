<template>
  <body id="poster">
  <el-form class="register-container" label-position="left" label-width="0px">
    <h3 class="register_title">系统注册</h3>
    <el-form-item>
      <el-input type="text" v-model="registerForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="text" v-model="registerForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="text" v-model="registerForm.name" auto-complete="off" placeholder="姓名"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="text" v-model="registerForm.postbox" auto-complete="off" placeholder="邮箱"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="text" v-model="registerForm.phone" auto-complete="off" placeholder="电话"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: rgba(107,167,238,0.60);
         border: none;" v-on:click="register">注册</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>

export default {
  name: 'Register',
  data() {
    return {
      registerForm: {
        username: '',
        password: '',
        name: '',
        postbox: '',
        phone: ''
      },
      responseResult: []
    }
  },
  methods: {
    registererror1() {
      this.$message({
        duration: 1000,
        showClose: true,
        message: '用户名和密码组合已存在！',
        type: 'error'
      });
    },
    registererror2() {
      this.$message({
        duration: 1000,
        showClose: true,
        message: '用户名或密码不能为空！',
        type: 'error'
      });
    },
    registerright() {
      this.$message({
        duration: 1000,
        showClose: true,
        message: '注册成功！',
        type: 'success'
      });
    },
    register() {
      var _this = this
      console.log(this.$store.state)
      if (this.registerForm.username === ''||this.registerForm.password === ''){
        // alert(this.registerForm.phone)
        this.registererror2()
        return
      }
      this.$axios
        .post('/user/register', {
          username: this.registerForm.username,
          password: this.registerForm.password,
          name: this.registerForm.name,
          postbox: this.registerForm.postbox,
          phone: this.registerForm.phone
        })
        .then(successResponse => {
          if (successResponse.data !=null) {
            // var data = this.registerForm
            this.registerright()
            _this.$store.commit('login', successResponse.data)
            var path = this.$route.query.redirect
            this.$router.replace({ path: path === '/' || path === undefined ? '/index' : path })
          }
          else {
            this.registererror1()
            this.registerForm.password=''
          }
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>

<style>
/*#poster {*/
/*  background: url("../assets/register.jpg") no-repeat;*/
/*  background-position: center;*/
/*  height: 100%;*/
/*  width: 100%;*/
/*  background-size: cover;*/
/*  position: fixed;*/
/*}*/

body {
  margin: 0px;
}

.register-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 600px;
  padding: 35px 35px 15px 35px;
  background: rgba(255, 255, 255);
  border: 1px solid rgba(234, 234, 234);
  box-shadow: 0 0 25px rgba(202, 198, 198);
}

.register_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>
