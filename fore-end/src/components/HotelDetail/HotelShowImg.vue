<template>
    <div>
        <el-row>
            <el-col :span="8">
                <div class="image-container" v-if="hotel.imgList[0]">
                    <img class="image-1" :src="hotel.imgList[0]" alt="hotel image" />
                </div>
                <div class="image-container" v-if="hotel.imgList[1]">
                    <img class="image-1" :src="hotel.imgList[1]" alt="hotel image" />
                </div>
            </el-col>
            <el-col :span="16">
                <div class="image-container" v-if="hotel.imgList[2]">
                    <img class="image-3" :src="hotel.imgList[2]" alt="hotel image" />
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6" v-for="(image, index) in hotel.imgList.slice(3)" :key="index">
                <div>
                    <img class="image-4" :src="image" alt="hotel image" />
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>

export default {
    name: 'HotelShowImg',
    data() {
        return {
            hotel: {
                imgList: [
                    "https://img-v.veimg.cn/company_picture/000/087/105/photo/20201108155136b7q32t8wjcrq5.jpg",
                    "https://img-v.veimg.cn/company_picture/000/087/105/photo/20201108155136b7q32t8wjcrq5.jpg",
                    "https://img-v.veimg.cn/company_picture/000/087/105/photo/20201108155136b7q32t8wjcrq5.jpg",
                    "https://uimg.huixiaoer.net/86104452/79195b4f14b9f39a18a939025fad1ade.jpg",
                    "https://img-v.veimg.cn/company_picture/000/087/105/photo/20201108155136b7q32t8wjcrq5.jpg",
                    "https://img-v.veimg.cn/company_picture/000/087/105/photo/20201108155136b7q32t8wjcrq5.jpg",
                    "https://uimg.huixiaoer.net/86197282/3841877cdb5bef105945b89725de31c0.jpg",
                ],
            }
        };
    },
}
</script>

<style scoped>
.image-1 {
    width: 220px;
    height: 170px;
    border-radius: 5px;
}


.image-3 {
    width: 450px;
    height: 344px;
    border-radius: 5px;
}

.image-4 {
    width: 164px;
    height: 110px;
    border-radius: 5px;
}

.el-row {
    margin-bottom: 20px;
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}</style>
