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
  mounted: function () {
    console.log('挂载开始')
    this.gethotel()
  },
    data() {
        return {
            hotel: {
                imgList: this.$store.state.hotel.imgList,
            }
        };
    },
  methods: {
    gethotel(){
      this.hotel=this.$store.state.hotel
    }
  }
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
