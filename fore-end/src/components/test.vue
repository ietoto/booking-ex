<template>
  <body id="poster">
  <el-form class="login-container" label-position="left"
           label-width="0px">
    <h3 class="login_title">测试</h3>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: rgba(107,167,238,0.60);border: none" v-on:click="login">测试</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      responseResult: []
    }
  },
  methods: {
    login () {
      console.log(this.$store.state)
      this.$axios
        .post('/test/insert_hr', {})
        .then(successResponse => {
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>

<style>
#poster {
  background:url("../assets/login.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body{
  margin: 0px;
}
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(234, 234, 234, 0.6);
  box-shadow: 0 0 25px rgba(202, 198, 198, 0.6);
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

</style>
