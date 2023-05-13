<template>
    <div>
      <div
        :style="{
          marginTop: '50px',
          backgroundColor: '#00224F',
          padding: '8px',
          textAlign: 'center',
          width:'100%',
          overflowY: 'hidden',
        }"
      >
        <p :style="p1">方便又省钱!</p>
        <p :style="p2">立即注册，享受优惠好价</p>
        <div :style="{ padding: '10px' }">
          <input :style="input1" type="text" placeholder="您的邮箱地址" />
          <button :style="button">订阅</button>
        </div>
      </div>
      <div
        :style="{
          backgroundColor: '#003580',
          paddingTop: '20px',
          paddingBottom: '15px',
          border: 'none',
          padding: '8px',
          width: '100%',
          overflowY: 'hidden',
        }"
      >
        <button
          :style="{
            padding: '5px',
            backgroundColor: 'transparent',
            border: '1px solid white',
            color: 'white',
            borderRadius: '4px',
            cursor: 'pointer',
            textAlign: 'center',
            margin: 'auto',
            marginLeft: '50%',
          }"
        >
          上线我的住宿
        </button>
        <hr
          :style="{
            border: 'none',
            background: 'white',
            height: '1px',
            marginTop: '15px',
          }"
        />
        <div
          :style="{
            width: '70%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
          }"
        >
          <a href="/" :style="link">手机版视图</a>
          <a href="/" :style="link">你的账户</a>
          <a href="/" :style="link"
            >调整订单</a
          >
          <a href="/" :style="link">联系客服</a>
          <a href="/" :style="link">加入我们</a>
          <a href="/" :style="link">Booking商旅服务</a>
        </div>
      </div>
      <FooterWhite />
    </div>
  </template>
  <script>
  import FooterWhite from "./FooterWhite.vue";
  export default {
    components: {
      FooterWhite,
    },
    data() {
      return {
        input1: {
          width: "25%",
          marginRight: "5px",
          height: "44px",
          border: "none",
          borderRadius: "4px",
          fontSize: "20px",
          fontWeight: "100",
          paddingLeft: "8px",
        },
        label: { color: "white", fontSize: "17px", padding: "0", margin: "0" },
        button: {
          backgroundColor: "#0071C2",
          border: "none",
          borderRadius: "4px",
          height: "46px",
          padding: "13px",
          color: "white",
          fontSize: "18px",
          fontWeight: "100",
        },
        p1: {
          color: "#F6F7F9",
          fontSize: "30px",
          fontWeight: "300",
          padding: "0",
          margin: "0",
        },
        p2: {
          color: "#AFB1B5",
          fontSize: "16px",
          padding: "0",
          margin: "5px",
          marginBottom: "14px",
        },
        link: {
          color: "white",
          fontSize: "18px",
          fontWeight: "500",
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* if needed, you can add CSS styles here. Since we're using inline styles, this section can be empty */
  </style>
  
