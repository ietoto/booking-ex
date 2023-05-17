<template>
  <el-card class="property-card">
    <el-container>
      <el-aside style="width:300px">
        <div class="image-container">
          <img :src="hotel.img" alt="hotel image" />
        </div>
      </el-aside>
      <el-aside style="width:400px">
        <div class="middle">
          <div class="title">
            <div class="hotel-name">
              <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark">{{ hotel.name }}</div></el-col>
              </el-row>

            </div>
            <div class="hotel-rating">
              <el-rate v-model="hotel.star" disabled
              :colors="colors"
              text-color="#ff9900"
              void-color="003366"
             ></el-rate>
            </div>
          </div>
          <a class="small-text"
            >{{ hotel.city }}{{ hotel.location }}</a
          >
          <div class="hotel-description" style="font-size: 11px;">{{ hotel.desciption }}</div>
          <div class="hotel-location">
            <span class="small-text">{{ hotel.address }}</span>
            <span class="small-text separator">·</span>
          </div>
        </div>
      </el-aside>
      <el-main>
        <div class="right">
          <span class="score">
            <div class="extra-info">{{ scoreText }}</div>
            <div class="hotel-score">{{ hotel.score }}</div>
          </span>
          <!-- 大于等于9分优异的、好极了、理想随机选 7-8分好  低于7分不尽人意 -->
          <el-button
            class="price-button"
            type="primary"
            @click="navigateToHotelDetail(hotel.id)"
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
      if (this.hotel.score >= 9) {
        const options = ["优异的", "好极了", "理想"];
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
      } else if (this.hotel.score >= 7) {
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
.fcab3ed991 {
    font-family: var(--DO_NOT_USE_bui_large_font_headline_3_font-family);
    font-size: var(--DO_NOT_USE_bui_large_font_headline_3_font-size);
    font-weight: var(--DO_NOT_USE_bui_large_font_headline_3_font-weight);
    line-height: var(--DO_NOT_USE_bui_large_font_headline_3_line-height);
}
.hotel-name{
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 28px;
  color:#006ce4;
  font-family: Avenir Next,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
}
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
  width: 270px;
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
  border-radius: 8px;
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
