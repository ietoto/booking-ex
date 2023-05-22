<template>
  <body id="poster">
   <Navbar/>
  <el-form class="register-container" :model="registerForm" status-icon :rules="rules" ref="registerForm" label-position="left" label-width="0px">
    <h3 class="register_title">系统注册</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="registerForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="registerForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item prop="name">
      <el-input type="text" v-model="registerForm.name" auto-complete="off" placeholder="姓名"></el-input>
    </el-form-item>
    <el-form-item prop="postbox">
      <el-input type="text" v-model="registerForm.postbox" auto-complete="off" placeholder="邮箱"></el-input>
    </el-form-item>
    <el-form-item prop="phone">
      <el-input type="text" v-model="registerForm.phone" auto-complete="off" placeholder="电话"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: rgba(107,167,238,0.60);
         border: none;" v-on:click="register('registerForm')">注册</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>
import Navbar from './home/Navbar/Navbar.vue'
export default {
  name: 'Register',
  data() {
    var valusername = (rule, value, callback) => {
      var usernamereg = /(?=.*\d)(?=.*[a-zA-Z]).{6,16}/;
      value=this.registerForm.username
      if (value === '') {
        this.$message({
          duration: 1000,
          showClose: true,
          message: '请输入用户名！',
          type: 'error'
        });
        callback(new Error('请输入用户名'));
      } else if (!usernamereg.test(value)) {
        this.$message({
          duration: 3000,
          showClose: true,
          message: '用户名必须包含数字和字母，长度在6到16个字符之间。',
          type: 'error'
        });
        callback(new Error('用户名必须包含数字和字母，长度在6到16个字符之间。'));
      } else {
        callback();
      }
    };
    var valpassword = (rule, value, callback) => {
      var passwordreg = /(?=.*\d)(?=.*[a-zA-Z]).{6,16}/;
      value=this.registerForm.password
      if (value === '') {
        this.$message({
          duration: 1000,
          showClose: true,
          message: '请输入密码！',
          type: 'error'
        });
        callback(new Error('请输入密码'));
      } else if (!passwordreg.test(value)) {
        this.$message({
          duration: 3000,
          showClose: true,
          message: '密码必须包含数字和字母，长度在6到16个字符之间。',
          type: 'error'
        });
        callback(new Error('密码必须包含数字和字母，长度在6到16个字符之间。'));
      } else {
        callback();
      }
    };
    var valname = (rule, value, callback) => {
      var namereg = /^[\u4e00-\u9fa5]{2,5}$/;
      value=this.registerForm.name
      if (value === '') {
        this.$message({
          duration: 1000,
          showClose: true,
          message: '请输入姓名！',
          type: 'error'
        });
        callback(new Error('请输入姓名'));
      } else if (!namereg.test(value)) {
        this.$message({
          duration: 3000,
          showClose: true,
          message: '姓名必须全为中文且长度在二到五之间',
          type: 'error'
        });
        callback(new Error('姓名必须全为中文且长度在二到五之间'));
      } else {
        callback();
      }
    };
    var valpostbox = (rule, value, callback) => {
      var postboxreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
      value=this.registerForm.postbox
      if (value === '') {
        this.$message({
          duration: 1000,
          showClose: true,
          message: '请输入邮箱！',
          type: 'error'
        });
        callback(new Error('请输入邮箱'));
      } else if (!postboxreg.test(value)) {
        this.$message({
          duration: 3000,
          showClose: true,
          message: '请满足邮箱的格式！',
          type: 'error'
        });
        callback(new Error('请满足邮箱的格式！'));
      } else {
        callback();
      }
    };
    var valphone = (rule, value, callback) => {
      var phonereg = /^1[3456789]\d{9}$/;
      value=this.registerForm.phone
      if (value === '') {
        this.$message({
          duration: 1000,
          showClose: true,
          message: '请输入电话号码！',
          type: 'error'
        });
        callback(new Error('请输入电话号码'));
      } else if (!phonereg.test(value)) {
        this.$message({
          duration: 3000,
          showClose: true,
          message: '请满足电话号码的格式',
          type: 'error'
        });
        callback(new Error('请满足电话号码的格式'));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        username: '',
        password: '',
        name: '',
        postbox: '',
        phone: ''
      },
      responseResult: [],
      rules: {
        password: [
          { validator: valpassword, trigger: 'blur' }
        ],
        username: [
          { validator: valusername, trigger: 'blur' }
        ],
        name: [
          { validator: valname, trigger: 'blur' }
        ],
        postbox: [
          { validator: valpostbox, trigger: 'blur' }
        ],
        phone: [
          { validator: valphone, trigger: 'blur' }
        ]
      }
    }

  },
  components :{
    Navbar
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
    register(formName) {
      let valid1=true
      this.$refs[formName].validate((valid) => {
        if (valid) {
        } else {
          console.log('error submit!!');
          valid1=valid
        }
      });
      if(!valid1)return
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
          if (successResponse.data.username !=null) {
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

<style scoped>
#poster {
  background: url("../assets/login1.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}

body {
  margin: 0px;
}

.register-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 600px;
  padding: 35px 35px 15px 35px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(234, 234, 234, 0.6);
  box-shadow: 0 0 25px rgba(202, 198, 198, 0.6);
}

.register_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>
