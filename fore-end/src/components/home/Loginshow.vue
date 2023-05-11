<template>
    <div class="container">
        <div class="content">
            <div class="text-section">
                <header>
                    <h1 class="title">为你的旅行获取更多礼遇</h1>
                </header>
                <p class="description">
                    预定住宿可以节省10%的价格，寻找蓝色Genius图标升级你的旅行
                </p>
                <button class="cta-button">升级为Genius会员</button>
            </div>
            <div class="image-section">
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
    background-image: url("https://r-xx.bstatic.com/xdata/images/xphoto/2880x868/215577801.jpeg?k=c7f3c36ff700afff6bd7a92935e0a0b4b84dab2f7adf0079f2614eb488b0ed04&o=");
    background-size: cover;
    background-position: center;
    min-height: 90%;
    padding: 20px 0;
}

.content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    flex-wrap: wrap;
}

.text-section {
    max-width: 50%;
    padding: 0 10px;
    box-sizing: border-box;
}

.title {
    font-size: 35px;
    color: #fff;
}

.description {
    font-size: 15px;
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
    background-color: #0d47a1;
}

.image-section {
    display: flex;
    flex-direction: column;
    max-width: 50%;
    padding: 0 20px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
}

.footer-text {
    font-size: 22px;
    margin-top: 8px;
    color: #fff;
}

@media screen and (max-width: 768px) {
    .content {
        flex-direction: column;
        align-items: center;
    }

    .text-section {
        max-width: 100%;
    }

    .image-section {
        max-width: 100%;
    }
}
</style>
