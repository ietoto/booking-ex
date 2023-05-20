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
            <img src="./img/hoteldetail.jpg" alt="hotel-detail" width="80%">
        </div>
        <el-container>
            <el-aside width="45%" class="hotel-description">
                <h2>
                    {{ hotel.name  }}
                </h2>
                <p class="hotel-description-font">
                    {{ hotel.desciption }}
                </p>
                <img src="./img/hoteldescription.jpg" alt="hoteldescription" width="100%">
            </el-aside>
            <el-main width="50%" class="hotel-booking-icon">
                <div>
                    <h3 class="heading">住宿特色</h3>
                    <div>
                        <h4 class="section1">1晚好去处！</h4>
                        <div>
                            <span class="span1"><i class="el-icon-location-outline"></i>这家酒店位于{{ hotel.city }}中心，位置评分非常高：{{ hotel.score  }}</span>
                        </div>
                        <div>
                            <span class="span2"><i class="el-icon-moon"></i>想要一觉安睡到天亮？客人都说这家酒店的床很舒服</span>
                        </div>
                    </div>
                    <div>
                        <h4 class="section1">早餐信息</h4>
                        <span><i class="el-icon-dish"></i>早餐提供亚洲、美式</span>
                    </div>
                    <div>
                        <h4 class="section1">住了又住</h4>
                        <span><i class="el-icon-refresh-right"></i>这家住宿有超多的回头客</span>
                    </div>
                    <div>
                        <el-button class="bookingnow" @click="scrollToRoomTable" >现在就预定</el-button>
                    </div>
                </div>
            </el-main>
        </el-container>
        <hr width="70%">
        <div>
            <DetailSearch/>
        </div>
        <div>
            <HotelFacility/>
        </div>
        <div>
            <HotelRegistration/>
        </div>
        <FooterBlue />
    </div>
</template>

<script>
import HotelRegistration from './HotelRegistration/HotelRegistration.vue'
import HotelFacility from './HotelFacility/HotelFacility.vue'
import DetailSearch from './DetailSearch/DetailSearch.vue'
import HotelShow from './HotelShow/HotelShow.vue'
import Searchbar from '../HotelSearch/SearchAside/Searchbar.vue'
import Navbar from '../home/Navbar/Navbar.vue'
import FooterBlue from '../home/Footer/FooterBlue.vue'
import FooterWhite from '../home/Footer/FooterWhite.vue';
export default {
    name: 'HotelDetail',
    data() {
        return {
            hotel: {
                id: 5,
                name: "北京古北口长城团园客栈",
                desciption: "你可以享受北京古北口长城团园客栈的Genius优惠！只需即可省钱。暖气客房均设有石墙和木质家具，享有长城的景致。庭院设有共用浴室和带暖气的卫生间设施。私人客房均提供iPod基座、电热水壶和连接浴室。北京古北口长城团园客栈在庭院设有一个户外休息区，还设有一个公共用餐区。夏季，客人可以在周边地区徒步旅行，并进行野餐。客人可以在温暖的壁炉周围阅读书籍。业主每日以天然食材烹制当地中式菜肴，也供应自制素食。北京古北口长城团园客栈距离古北口火车站3公里，距离北京国际机场100公里。 ",
                distance: -1,
                city: "北京",
                location: "密云",
                address: "密云古北口镇西队主街甲18号",
                score: 9,
                star: 2,
                img: null,
                imgList: ["http://localhost:8443/image/1/0.jpg", "http://localhost:8443/image/1/1.jpg", "http://localhost:8443/image/1/2.jpg", "http://localhost:8443/image/1/3.jpg", "http://localhost:8443/image/1/4.jpg", "http://localhost:8443/image/1/5.jpg", "http://localhost:8443/image/1/6.jpg", "http://localhost:8443/image/1/7.jpg"],
            }
        };
    },
    components: {
        Navbar,
        FooterBlue,
        FooterWhite,
        Searchbar,
        HotelShow,
        DetailSearch,
        HotelFacility,
        HotelRegistration
    },
    methods: {
    scrollToRoomTable() {
            const roomTableElement = document.querySelector('.roomtable');
            if (roomTableElement) {
                roomTableElement.scrollIntoView({ behavior: 'smooth' });
            }
        },
        }
}
</script>

<style scoped>
.span1.span2 {
    font-size: 5px;
    line-height: 1;
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

}

.section1 {
    font-weight: bold;
    font-size: 18px
}

.heading {
    font-weight: 600;
}

.bookingnow {
    margin-top: 20px;
    background-color: #0D47A1;
    color: #fff;
    width: 100%;
}

.bookingnow:hover {
    background-color: #409EFF;
    color: #fff;
}

.hotel-description-font {
    font-size: 18px;
    line-height: 2;
}

.hotel-booking-icon {
    background-color: #f0f6ff;
    border-radius: 8px;
    margin: 0 auto;
    width: 50%;
    height: auto;
    margin-right: 15%;
    margin-left: 30px;

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
}
</style>