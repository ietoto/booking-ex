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
          // 添加您的Spotitem数据
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
  }
  
  .group-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  </style>
  