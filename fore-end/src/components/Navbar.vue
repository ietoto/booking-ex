<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#0D47A1"
    text-color="#fff" active-text-color="#409EFF" @select="handleSelect">
    <div class="logo-container">
      <router-link to="/index" class="logo-link">
        <h1 class="logo-text">Booking.com</h1>
      </router-link>
    </div>
    <div class="menu-right">
      <span class="currency">CNY</span>
      <img class="china-img" src="https://t-cf.bstatic.com/design-assets/assets/v3.68.0/images-flags/Cn@3x.png"
        alt="中国" />
      <div class="wechat-container">
        <i class="el-icon-chat-dot-round wechat-icon"></i>
        <div class="wechat-qr-code">
          <p class="qr-title">关注 Booking.com 官方微信</p>
          <img src="/static/qr-code.jpg" alt="QR Code" />
        </div>
      </div>
      <p v-if= "!this.$store.state.user.username">
        <el-button class="custom-button" type="primary" v-on:click="register"
          style="color:#0D47A1; background-color: white; border-color: white;">注册</el-button>
        <el-button class="custom-button" type="primary" v-on:click="login"
          style="color:#0D47A1; background-color: white; border-color: white;">登录</el-button>
      </p>
      <p v-else>
        <p >{{this.$store.state.user.username}}</p>
      </p>
    </div>
  </el-menu>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    login() {
      var path = this.$route.query.redirect
      this.$router.replace({ path: path === '/' || path === undefined ? '/login' : path })
    },
    register() {
      var path = this.$route.query.redirect
      this.$router.replace({ path: path === '/' || path === undefined ? '/reg' : path })
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1000;
}

.el-menu-demo.el-menu--horizontal {
  height: 70px;
  line-height: 60px;
}

.el-menu-demo .el-submenu__title {
  color: #fff;
}

.logo-container {
  height: 100%;
}

.logo-link {
  text-decoration: none;
}

.logo-text {
  color: white;
  margin: 0;
  padding: 0;

}

.menu-right {
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

.wechat-container {
  position: relative;
  cursor: pointer;
  margin-right: 10px;
}

.wechat-icon {
  color: white;
  font-size: 20px;
  margin-left: 10px;
  animation: breathe 2s infinite;
  /* 添加呼吸式动画 */
  transition: all 0.3s ease-in-out;
  /* 添加平滑过渡效果 */
}

.wechat-qr-code {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  /* 调整宽度 */
  height: 200px;
  /* 设置为自动 */
  background-color: white;
  padding: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: none;
  text-align: center;
  /* 居中文本 */
  border-radius: 4px;
  /* 添加圆角 */
}

.qr-title {
  font-size: 15px;
}

/* 更新二维码背景样式 */
.wechat-qr-code img {
  width: 120px;
  /* 调整宽度 */
  height: 120px;
  /* 调整高度 */
  object-fit: cover;
  margin: 0 auto;
  /* 水平居中 */
  margin-bottom: 10px;
  /* 添加底部外边距 */
}

.wechat-container:hover .wechat-qr-code {
  display: block;
}

.custom-button {
  font-size: 16px;
  line-height: 1.5;
  padding: 6px 12px;
}</style>
