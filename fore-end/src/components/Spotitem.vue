<template>
  <div class="spotitem">
    <div class="image-container" :style="`background-image: url('${imgSrc}');`">
      <img class="flag"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAn1BMVEX///8AAAAAAAAAAAAAAAD+/G/63JL41Xv40nL402f3y3P3ylr2x0z0u33xoXXvmmrvlo/ulJbtjY/tioHsg4bsf4LreXzqdXjobXDoblnpam3oaGDnZGDmXmHmWFvlW0XlVVnlUlTgTFDgSEzfREjjQkfcP0TaOz/gNjvXNzrgMzfWNDjULzPfKi/fJyvSKzDeIyjRJivQIyfdHyPNHyNWCeB5AAAABXRSTlMAESIzRJTdRHwAAACdSURBVBgZrcGxUsJQAETRu/s2YRwRCwda/v+7KC0VCyLvGYoMkaRxxnPg3wixpknHys3QMXeK6gc352dmXhTcyqXHr/Vzx+QKQfkahp3wxkyaCXLX+gAqTJoI8tbV0L4LkyqCujB63x+4M8EJo7fwS9CmZ/TEzKUSLBYsgm0elUoQhUdXYQorCsZiQSaIgQUR3LNGslhqVYg1jT/7AbsHH/KMOCSUAAAAAElFTkSuQmCC"
        alt="China flag" />
      <div class="city-name">{{ city }}</div>
      <div class="hotel-price">酒店起价: {{ price }} 元</div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Spotitem',
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  }
}
</script>
  
<style scoped>
.spotitem {
  position: relative;
  width: 100%;
  padding-bottom: calc(33% - 20px);
  /* 1:1 Aspect Ratio */
  overflow: hidden;
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
}

.city-name {
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  padding: 5px;
  font-size: 20px;
  border-radius: 5px;
  line-height: 20px;
  border: none;
  font-weight: bold;
  font-family: "Arial Black", "Arial Bold", Gadget, sans-serif;
}

.hotel-price {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
  font-family: "Arial Black", "Arial Bold", Gadget, sans-serif;
}

.flag {
  font-size: 20px;
  position: absolute;
  top: 15px;
  left: 60px;
  width: 20px;
  height: auto;
}
</style>
  