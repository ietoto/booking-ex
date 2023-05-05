<template>
  <body id="poster">
  <el-form class="login-container" label-position="left"
           label-width="0px">
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: rgba(107,167,238,0.60);border: none" v-on:click="test1">测试按钮1</el-button>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: rgb(122,122,207);border: none" v-on:click="test2">测试按钮2</el-button>
    </el-form-item>
  </el-form>
  <el-form class="show-container" label-position="left"
           label-width="0px">

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
    test1 () {
      console.log(this.$store.state)
      this.$axios
        .post('/test/insert_hr', {})
        .then(successResponse => {
        })
        .catch(failResponse => {
        })
    },
    test2 () {
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
  /*background:url("../assets/login.jpg") no-repeat;*/
  /*background-position: center;*/
  /*height: 100%;*/
  /*width: 100%;*/
  /*background-size: cover;*/
  /*position: fixed;*/
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
.show-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 600px;
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
