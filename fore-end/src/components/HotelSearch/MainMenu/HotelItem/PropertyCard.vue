<template>
  <el-card class="property-card">
    <div class="left">
      <div class="image-container">
        <img :src="hotel.hotel_image" alt="hotel image" />
      </div>
    </div>
    <div class="middle">
      <div class="hotel-name">{{ hotel.hotel_name }}</div>
      <div class="hotel-description">{{ hotel.hotel_description }}</div>
      <div class="hotel-location">
        <span class="small-text">{{ hotel.hotel_area }}</span>
        <span class="small-text separator">·</span>
        <span class="small-text">{{ hotel.hotel_city }}</span>
      </div>
    </div>
    <div class="right">
      <div class="hotel-score">酒店评分：{{ hotel.hotel_score }}</div>
      <el-button class="price-button" type="primary">显示价格</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    hotel: {
      type: Object,
      required: true
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
  flex-shrink: 1; 
  overflow: hidden;  
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}


.image-container {
  width: 200px;
  height: 200px;
  padding-bottom: 0;
  position: relative;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hotel-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
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

.hotel-score {
  margin-bottom: 8px;
}

.price-button {
  margin-top: 8px;
}
</style>
