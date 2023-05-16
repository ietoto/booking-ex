<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#0D47A1"
    text-color="#fff" active-text-color="#409EFF" @select="handleSelect">
    <router-link to="/index" class="logo-link">
    <Bookingicon></Bookingicon>
     </router-link>
    <div class="menu-right">
      <span class="currency">CNY</span>
      <img class="china-img" src="https://t-cf.bstatic.com/design-assets/assets/v3.68.0/images-flags/Cn@3x.png"
        alt="中国" />
      <div class="wechat-container">
        <i class="wechat-icon"></i>
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
<!--        <p  style="color: white;font-size:150%;">{{this.$store.state.user.username}},欢迎回来！</p>-->
        <el-dropdown @command="information">
          <span placement= bottom-start class="el-dropdown-link" style="color: white;font-size:150%;">
            {{this.$store.state.user.username}},欢迎回来！<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="myorder" icon="el-icon-s-order" style="font-size: 20px;padding: 8px 50px;">我的订单</el-dropdown-item>
            <el-dropdown-item command="user" icon="el-icon-user" style="font-size: 20px;padding: 8px 50px;">个人信息</el-dropdown-item>
            <p v-if= "this.$store.state.user.state === 1">
            <el-dropdown-item command="hotel_manage" icon="el-icon-office-building" style="font-size: 20px;padding: 8px 50px;">酒店管理</el-dropdown-item>
            <el-dropdown-item command="user_manage" icon="el-icon-s-custom" style="font-size: 20px;padding: 8px 50px;">个人信息管理</el-dropdown-item>
            <el-dropdown-item command="order_manage" icon="el-icon-edit" style="font-size: 20px;padding: 8px 50px;">订单管理</el-dropdown-item>
            </p>
            <p v-if= "this.$store.state.user.state === 2">
            <el-dropdown-item command="order" icon="el-icon-school" style="font-size: 20px;padding: 8px 50px;">我的酒店</el-dropdown-item>
              <el-dropdown-item command="user" icon="el-icon-s-check" style="font-size: 20px;padding: 8px 50px;">酒店订单</el-dropdown-item>
            </p>
            <el-dropdown-item command="quit" icon="el-icon-switch-button" style="font-size: 20px;padding: 8px 50px;">退出登录</el-dropdown-item>
      </el-dropdown-menu>
        </el-dropdown>
      </p>
    </div>
  </el-menu>
</template>

<script>
import Bookingicon from './Bookingicon.vue'
export default {
  components: { Bookingicon },
  name: 'Navbar',
  components: {
    Bookingicon
  },
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
    },
    information(command) {
      switch (command) {
        case 'quit' :
          this.$store.state.user.username=null
          this.$store.state.user.state=null
          this.$router.push("/index")
          break
        case 'user' :
          this.$router.push("/user")
          break
        case 'myorder' :
          this.$router.push("/myorder")
          break
        case 'hotel_manage' :
          this.$router.push("/hotel_manage")
          break
        case 'user_manage' :
          this.$router.push("/user_manage")
          break
        case 'order_manage' :
          this.$router.push("/order_manage")
          break
      }
      // this.$message('click on item ' + command);
    }
  },
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
  margin-top: auto;
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
    /* 设置背景图像 */
  background-image: url('./wechat.png');
  background-size: contain; /* 按比例扩大或缩小背景图片以完全覆盖元素的内容区 */
  background-repeat: no-repeat; /* 不重复显示背景图片 */
  /* 你可能需要设置一个固定的宽度和高度 */
  width: 20px;
  height: 20px;
  display: inline-block; /* 允许你设置元素的宽度和高度 */
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
