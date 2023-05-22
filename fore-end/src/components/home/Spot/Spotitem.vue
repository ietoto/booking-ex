<template>
  <div class="spotitem" @click="goToPage">
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
  data() {
    return {
      date: '',
      destination:'',
      adults: 2,
      children: 0,
      rooms: 1,
      pickerOptions: {
        disabledDate: (time) => {
          const currentDate = new Date()
          if (time.getTime() < currentDate.getTime() - 86400000) {
            // 禁止选择今天及今天之前的日期
            return true
          } else {
            return false
          }
        }
      }
    }
  },
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
  },
  methods: {
    goToPage() {
      var date1 = new Date(this.date[1]);
      var date2 = new Date(this.date[0]);
      var diffTime = Math.abs(date2 - date1);
      var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      let search;
      search=
        {location:this.city,
          startdate:this.date[0],
          enddate:this.date[1],
          adult:this.adults,
          child:this.children,
          room_num:this.rooms,
          date_num: diffDays}
      this.$store.commit("search",search)
      let searchtype;
      searchtype= {type:0}
      this.$store.commit("searchtype",searchtype)
      this.$router.push('/search'); // 这里的 '/path/to/page' 是你要跳转的页面的路由
    },
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
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}
.image-container:hover {
  transform: scale(1.05, 1.05);
  transition: all 0.3s ease-in-out;
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
  