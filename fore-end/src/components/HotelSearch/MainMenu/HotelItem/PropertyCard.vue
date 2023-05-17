<template>
  <el-card class="property-card">
    <el-container>
      <el-aside style="width:230px">
        <div class="image-container">
          <img :src="hotel.hotel_image" alt="hotel image" />
        </div>
      </el-aside>
      <el-aside>
        <div class="middle">
          <div class="title">
            <div class="hotel-name">
              {{ hotel.hotel_name }}
            </div>
            <div class="hotel-rating">
              <el-rate v-model="hotel.hotel_star" disabled 
              :colors="colors"
              text-color="#ff9900"
              show-score
              void-color="003366"
             ></el-rate>
            </div>
          </div>
          <a href="" class="small-text"
            >{{ hotel.hotel_city }}{{ hotel.hotel_location }}</a
          >
          <div class="hotel-description">{{ hotel.hotel_description }}</div>
          <div class="hotel-location">
            <span class="small-text">{{ hotel.hotel_area }}</span>
            <span class="small-text separator">·</span>
          </div>
        </div>
      </el-aside>
      <el-main>
        <div class="right">
          <span class="score">
            <div class="extra-info">{{ scoreText }}</div>
            <div class="hotel-score">{{ hotel.hotel_score }}</div>
          </span>
          <!-- 大于等于9分优异的、好极了、理想随机选 7-8分好  低于7分不尽人意 -->
          <el-button
            class="price-button"
            type="primary"
            @click="navigateToHotelDetail(hotel.hotel_id)"
            >显示价格</el-button
          >
        </div>
      </el-main>
    </el-container>
  </el-card>
</template>

<script>
export default {
  data() {
    return {colors: ['#99A9BF', '#F7BA2A', '#FF9900'] };
  },
  props: {
    hotel: {
      type: Object,
      required: true
    }
  },
  computed: {
    scoreText() {
      if (this.hotel.hotel_score >= 9) {
        const options = ["优异的", "好极了", "理想"];
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
      } else if (this.hotel.hotel_score >= 7) {
        return "好";
      } else {
        return "不尽人意";
      }
    }
  },
  methods: {
    navigateToHotelDetail(id) {
      this.$router.push({ name: "HotelDetail", params: { id } });
      this.$emit("navigate", id);
    }
  }
};
</script>

<style scoped>
.property-card {
  display: flex;
  align-items: stretch;
  max-height: 250px;
  padding: 16px;
  font-style: normal !important;
  background: #f0f6ff;
  border-color: #a3d7fc;
  box-shadow: 0 0 8px #a3d7fc;
  overflow: visible;
  margin: 16px 0;
  border-radius: 8px;
  border: 1px solid;
}

.left {
  width: 200px;
  height: 100%;
  flex-shrink: 0;
  margin-right: 16px;
}

.middle {
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  margin-right: 16px;
}

.right {
  margin-top: 20%;
  flex-shrink: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.image-container {
  border-radius: 8px;
  width: 200px;
  height: 200px;
  padding-bottom: 0;
  position: relative;
  overflow: hidden;
}

.score {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.hotel-rating {
  margin-left: 10px;
}

.hotel-description {
  margin-bottom: 8px;
}

.small-text {
  font-size: 12px;
  color: #888;
}

.separator {
  margin: 0 4px;
}

.extra-info {
  font-size: 18px;
  margin-right: 12px;
  color: black;
  margin-bottom: 8px;
}

.hotel-score {
  padding: 8px;
  background-color: #003b95;
  color: white;
  margin-bottom: 8px;
}

.price-button {
  margin-top: 8px;
}
.title {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
