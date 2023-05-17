<template>
    <div class="header">
        <div class="clearfix">
            <el-rate v-model="rating" disabled></el-rate>
            <div>
                <el-tooltip class="item" effect="dark"
                    content="此为參与首选方案之住宿。首选住宿服务优良且拥有高性价比，致力提供顾客絕佳的住宿体验。住宿可能需額外付费給 Booking.com 以加入此方案。"
                    placement="top-start">
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
            <el-button style="margin-left: 60%;" type="primary" class="float-right" @click="bookNow">現在就預訂</el-button>
        </div>
        <span class="hotel-name">{{ hotelName }}</span>
        <el-tooltip class="item" effect="dark" content="位置絕佳—获评 9.3/10！" placement="top-start">
            <p>{{ address }}</p>
        </el-tooltip>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            hotelName: '北京千禧大酒店',
            address: '北京, 朝陽區, 东三环中路7号',
            rating: 5,
            locationScore: '9.3'
        };
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
        }
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
  color:#fff
}
</style>
  