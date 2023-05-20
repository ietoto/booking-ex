<template>
    <div class="facilitytop">
        <el-row>
            <el-col :span="18">
                <header>
                    <div class="facility-title">住宿规定</div>
                    <div class="facility-score">{{ hotel.name }}可接受特别要求，别忘了在下一步填写哦！</div>
                </header>
            </el-col>
            <el-col :span="6" class="button">
                <el-button class="booking-button" type="primary" @click="scrollToRoomTable">
                    <span>查看可预订空房</span>
                </el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>

export default {
    name: 'RegistrationTitle',
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
                facilities: [
                    "24小时安保",
                    "中文", "英语",
                    "享有风景", "代客泊车", "住宿内咖啡店",
                    "住宿外部闭路电视监控系统", "保险箱", "储物柜", "公共区域闭路电视监控系统",
                    "公共浴池", "共用休息室/电视区", "办理私人登记入住/退房手续", "吸烟区",
                    "在客房内享用早餐",
                    "安全报警器", "客房服务", "室内游乐区", "家庭间", "干洗", "徒步活动", "快速办理入住/退房手续", "户外家具", "旅游咨询台", "无障碍停车场", "暖气", "每日客房打扫", "洗衣", "灭火器", "烟雾报警器", "熨衣服务", "班车服务", "禁烟客房", "租车服务", "空调", "羽毛球用品设施", "花园", , "行李寄存", "街边停车场", "酒吧", "酒店各处禁烟", "野餐区", "钥匙进门", "阳光露台", "隔音", "隔音客房", "露台", "餐厅"]
            },
            scores: []
        }
    },
    methods:{
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
.button {
    text-align: right;
}
.facilitytop {
    margin-top: 40px;
    margin-right: 5%;
}
.facility-title {
    font-family: Avenir Next, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
}

.facility-score {
    color: #474747;
    margin-block-start: 4px;
    font-style:normal;  
    font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}

.booking-button {
    bottom: 0;
    background-color: #0D47A1;
    margin: 0 10px 10px 0;
    color: #fff;
}

.booking-button:hover {
    background-color: #409EFF;
    color: #fff;
}
</style>