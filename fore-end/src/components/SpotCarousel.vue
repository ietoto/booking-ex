<template>
    <div>
      <el-carousel
        class="carousel"
        arrow="always"
        :interval="0"
        :loop="false"
        :trigger="trigger"
      >
        <el-carousel-item
          v-for="(group, index) in spotGroups"
          :key="index"
        >
          <div class="group-container">
            <spotitem
              v-for="(item, i) in group"
              :key="i"
              :img-src="item.imgSrc"
              :city="item.city"
              :price="item.price"
            />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>
  
  <script>
  import Spotitem from "./Spotitem.vue";
  
  export default {
    name: "SpotitemCarousel",
    components: {
      Spotitem
    },
    data() {
      return {
        trigger: "manual",
        spots: [
                {
                imgSrc: "https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/ae88fac3a2f9de264cafe01b39b89625.jpg_r_1360x1360x95_230290f5.jpg",
                city: "北京",
                price: "399"
                },
                {
                imgSrc: "https://example.com/image2.jpg",
                city: "上海",
                price: "450"
                },
                {
                imgSrc: "https://example.com/image3.jpg",
                city: "深圳",
                price: "500"
                },
                {
                imgSrc: "https://example.com/image4.jpg",
                city: "广州",
                price: "350"
                },
                {
                imgSrc: "https://example.com/image5.jpg",
                city: "杭州",
                price: "400"
                },
                {
                imgSrc: "https://ac-a.static.booking.cn/xdata/images/city/600x600/683806.jpg?k=176bc3ee4fa71288a12427ff8f9b7305f79ddf9986eb726e1bc4f60165b38899&o=",
                city: "南京",
                price: "380"
                },
                {
                imgSrc: "https://example.com/image7.jpg",
                city: "苏州",
                price: "420"
                },
                {
                imgSrc: "https://example.com/image8.jpg",
                city: "成都",
                price: "450"
                },
                {
                imgSrc: "https://example.com/image9.jpg",
                city: "重庆",
                price: "480"
                },
                {
                imgSrc: "https://example.com/image10.jpg",
                city: "西安",
                price: "390"
                }
                ],
        spotGroups: []
      };
    },
    created() {
      this.spotGroups = this.groupSpots(this.spots, 5);
    },
    methods: {
      groupSpots(arr, size) {
        const groups = [];
        for (let i = 0; i < arr.length; i += size) {
          groups.push(arr.slice(i, i + size));
        }
        return groups;
      }
    }
  };
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 100%;
  padding:0 10%;
  box-sizing: border-box;
}

.group-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 90%;
}

.group-container .spotitem {
  position: relative;
  width: calc(100% / 5 - 10px);
  padding-bottom: calc(100% / 5 - 10px);
  overflow: hidden;
}

.group-container .spotitem .image-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
}
</style>
  