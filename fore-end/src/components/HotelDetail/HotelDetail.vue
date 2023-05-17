<template>
    <div>
        <Navbar />
        <el-container>
            <el-aside width="10%" class="searchbar">
                <Searchbar />
            </el-aside>
            <el-main width="80%">
                <HotelShow />
            </el-main>
        </el-container>
        <div class="hotel-detail-block">
            <img src="./hoteldetail.jpg" alt="hotel-detail" width="80%">
        </div>
        <el-container>
            <el-aside width="45%" class="hotel-description">
                <h2>
                    北京大酒店
                </h2>
                <p class="hotel-description-font">
                    奢华的北京千禧大酒店位于北京财富中心，地理位置优越，靠近新的中央电视台总部，配有室内游泳池、舒适的spa服务、4个餐饮场所以及覆盖各处的免费网络连接。
                    北京千禧大酒店距离金台西昭地铁站（10号线）有5分钟步行路程，而距离朝外SOHO有6分钟车程，距离中国国际贸易中心有7分钟车程，距离北京火车站约有22分钟车程，距离北京首都国际机场有52分钟车程。

                    北京千禧大酒店的典雅宽敞的客房配有现代装饰，配有可欣赏城市景观的大型落地窗、平板电视、迷你吧和个人保险箱。每间设备齐全的浴室均配有独立淋浴、浴缸、浴袍和免费洗浴用品。

                    客人可以在健身中心锻炼身体，或在spa享受按摩服务。北京千禧大酒店提供汽车租赁服务，其旅游咨询台可以安排观光活动。

                    CBD 西餐厅供应当地美食和国际美食；酒店的其他用餐选择包括供应传统中式菜肴的瑶池中餐厅、提供雪茄和烈酒的哈瓦那酒吧以及供应鸡尾酒的大堂吧。

                    根据我们网站上的真实住客点评，这里是北京的人气地区之一。

                    夫妻/情侣特别喜欢这家住宿的位置，为两人住宿体验给出了9.4分。
                </p>
                <img src="./hoteldescription.jpg" alt="hoteldescription" width="100%">
            </el-aside>
            <el-main width="50%" class="hotel-booking-icon">
                <div>
                    <h3 class="heading">住宿特色</h3>
                    <div class="section1">
                        <h4>1晚好去处</h4>
                    </div>
                    <div class="section2">
                        <h4>早餐信息</h4>
                    </div>
                    <div class="section3">
                        <h4>住了又住</h4>
                    </div>
                    <div>
                        <el-button class="bookingnow">现在就预定</el-button>
                    </div>
                </div>
            </el-main>
        </el-container>
        <FooterBlue />
    </div>
</template>

<script>
import HotelShow from './HotelShow.vue'
import Searchbar from '../HotelSearch/SearchAside/Searchbar.vue'
import Navbar from '../home/Navbar/Navbar.vue'
import FooterBlue from '../home/Footer/FooterBlue.vue'
import FooterWhite from '../home/Footer/FooterWhite.vue';
export default {
    name: 'HotelDetail',
    components: {
        Navbar,
        FooterBlue,
        FooterWhite,
        Searchbar,
        HotelShow
    }
}
</script>

<style scoped>
.bookingnow{
    background-color: #0D47A1;
    color:#fff;
}
.bookingnow:hover{
    background-color: #409EFF;
    color:#fff;
}

.section1{
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
}
.hotel-description-font{
    font-size:14px;
    line-height: 2;
}
.hotel-booking-icon {
    background-color: #f0f6ff;
    border-radius: 8px;
    margin: 0 auto;
    width: 50%;
    height: 320px;
    margin-right: 15%;
    margin-left:30px;
}

.hotel-description {
    margin: 0 auto;
    width: 80%;
    margin-left: 20%;
}

.hotel-detail-block {
    margin: 0 auto;
    width: 80%;
    margin-left: 20%;
}

.searchbar {
    width: 20% !important;
    padding: 0 !important;
    margin-top: 0;
    font-size: 88%;
    margin-bottom: 1em;
    font-style: normal;
    float: left;
    margin-left: 18%;
}</style>