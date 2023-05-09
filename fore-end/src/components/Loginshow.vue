<template>
<div class="container">
    <div class="content">
        <div class="text-section">
                <header>
                    <h1 class="title">
                        登录可省钱
                    </h1>
                </header>
                <p class="description">
                预定参与的住宿至少可以节省10%的价格，只需寻找蓝色Genius图标即可
                </p>
                <button class="cta-button">
                    登录或注册账号
                </button>
        </div>
        <div class="image-section">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x300/215304012.png?k=b77b02154b788db65955fd7c7ba2b62b0e7206053c53c950165f8959aa0f6021&o=" alt="带有Genius会员奖励计划标签的礼物盒。">
            <div class="footer-text">
                Booking.com会员奖励计划
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Loginshow'
}
</script>

<style scoped>
.container {
display: flex;
justify-content: center;
background-color: #082c5d;
min-height: 50vh;
padding: 15px 0;
}

.content {
display: flex;
align-items: flex-start;
}

.text-section {
margin-right: 20px;
margin-top: 60px;
}

.title {
font-size: 40px;
margin-bottom: 8px;
color: #fff;
}

.description {
margin-bottom: 22px;
font-size: 20px;
color: #fff;
}

.cta-button {
background-color: #187bcd;
border: none;
color: #fff;
padding: 12px 24px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 0;
cursor: pointer;
border-radius: 4px;
transition: background-color 0.3s;
}

.cta-button:hover {
background-color: #0D47A1;
}

.image-section {
display: flex;
flex-direction: column;
}

.footer-text {
font-size: 22px;
margin-top: 8px;
color: #fff;
}
</style>
