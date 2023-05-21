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
            hotel: this.$store.state.hotel,
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
