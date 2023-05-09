<template>
      <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#0D47A1"
      text-color="#fff"
      active-text-color="#409EFF"
      @select="handleSelect"
    >
      <div class="logo-container">
        <h1 class="logo-text">Booking.com</h1>
      </div>
      <div class="menu-right">
        <span class="currency">CNY</span>
        <img class="china-img" src="https://t-cf.bstatic.com/design-assets/assets/v3.68.0/images-flags/Cn@3x.png" alt="中国" />
        <el-button class="custom-button" type="primary" style="color:#0D47A1; background-color: white; border-color: white;">注册</el-button>
        <el-button class="custom-button" type="primary" style="color:#0D47A1; background-color: white; border-color: white;">登录</el-button>
      </div>
    </el-menu>
  </template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
  <style scoped>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-menu-demo {
  background-color: #0D47A1;
  border: none;
  text-align: center;
  padding: 0;
}

.el-menu-demo.el-menu--horizontal {
  height: 60px;
  line-height: 60px;
}

.el-menu-demo .el-submenu__title {
  color: #fff;
}

.logo-container {
  float: left;
  margin-left:300px;
  display: flex;
  align-items: center;
  height: 100%;
}

.logo-text {
  color: white;
  margin: 0;
  padding: 0;
}

.menu-right {
  float: right;
  margin-right: 350px;
  display: flex;
  align-items: center;
  height: 100%;
}

.currency {
  color: white;
  margin-right: 10px;
}

.china-img {
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
  object-fit: cover;
}

.custom-button {
  font-size: 16px; /* 调整字体大小 */
  line-height: 1.5; /* 调整行高 */
  padding: 6px 12px; /* 调整内边距 */
}
</style>
