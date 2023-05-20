<template>
    <div class="header">
        <div class="clearfix">
            <el-rate v-model="hotel.star" disabled></el-rate>
            <div>
                <el-tooltip class="item" effect="dark" v-bind:content="tooltipContent" placement="top-start">
                    <svg aria-hidden="true" class="bk-icon -iconset-thumbs_up_square pp-icon-valign--initial"
                        data-bui-component="Tooltip" data-et-mouseenter="" data-tooltip-position="bottom" data-tooltip-text="
                       此為參與首選方案之住宿。首選住宿服務优良且拥有高性价比，致力提供顧客绝佳的住宿体验。住宿可能需額外付費給 Booking.com 以加入此方案。 
" fill="#FEBB02" height="24" rel="300" width="24" viewBox="0 0 128 128" role="presentation" focusable="false">
                        <path
                            d="M112 8H16a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8V16a8 8 0 0 0-8-8zM48 96H24V58h24zm56-25a8.7 8.7 0 0 1-2 6 8.9 8.9 0 0 1 1 4 6.9 6.9 0 0 1-5 7c-.5 4-4.8 8-9 8H56V58l10.3-23.3a5.4 5.4 0 0 1 10.1 2.7 10.3 10.3 0 0 1-.6 2.7L72 52h23c4.5 0 9 3.5 9 8a9.2 9.2 0 0 1-2 5.3 7.5 7.5 0 0 1 2 5.7z">
                        </path>
                    </svg>
                </el-tooltip>
            </div>
            <el-button style="margin-left: 60%;" type="primary" class="float-right" @click="scrollToRoomTable" >現在就預訂</el-button>
        </div>
        <span class="hotel-name">{{ hotel.name }}</span>
        <el-tooltip class="item" effect="dark" v-bind:content="locationRating" placement="top-start">
            <p>{{ hotel.address }}</p>
        </el-tooltip>
    </div>
</template>

  
<script>
export default {
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
    computed: {
        tooltipContent() {
            return `此为參与首选方案之住宿。首选住宿服务优良且拥有高性价比，致力提供顾客絕佳的住宿体验。住宿可能需額外付费給 Booking.com 以加入此方案。`;
        },
        locationRating() {
            return `位置绝佳—获评 ${this.hotel.score}/10！`;
        },
    },
    //     props: {
    //     hotel: {
    //       type: Object,
    //       required: true
    //     }
    //   },
    methods: {
        bookNow() {
            // handle the booking logic here
        },
        scrollToRoomTable() {
            const roomTableElement = document.querySelector('.roomtable');
            if (roomTableElement) {
                roomTableElement.scrollIntoView({ behavior: 'smooth' });
            }
        },
    }
};
</script>
  
<style scoped>
.hotel-name {
    font-family: Avenir Next, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    margin: 4px 0 0;
    padding: 0;
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
}

.clearfix {
    display: flex;
    align-items: center;
}

.float-right {
    float: right;
    background-color: #0d47a1;
    color: #fff;
}

.float-right:hover {
    background-color: #409EFF;
    color: #fff
}
</style>
  