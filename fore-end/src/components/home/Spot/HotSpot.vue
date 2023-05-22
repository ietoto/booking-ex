<template>
    <div class="hot-spot">
      <div class="spot-row first-row">
        <Spotitem
          img-src="https://ac-a.static.booking.cn/xdata/images/city/600x600/683806.jpg?k=176bc3ee4fa71288a12427ff8f9b7305f79ddf9986eb726e1bc4f60165b38899&o="
          city="南京"
          price="1000"
        />
        <Spotitem
          img-src="https://ac-a.static.booking.cn/xdata/images/city/600x600/683767.jpg?k=bb33bb77be173f09b5e338b8e7ad3094e8ed6636005c97abfe365d3b8515f558&o="
          city="广州"
          price="1200"
        />
      </div>
      <div class="spot-row second-row">
        <Spotitem
          img-src="https://ac-a.static.booking.cn/xdata/images/city/600x600/683769.jpg?k=0e0f19efd51ad2ed1bbba910d7a343051fa9e2400bbb5bc97f2c49e19ca98d66&o="
          city="杭州"
          price="800"
        />
        <Spotitem
          img-src="https://ac-a.static.booking.cn/xdata/images/city/600x600/683681.jpg?k=f832825373d70572c6e9caf42ec58a9290ff0e6d17b2ab1bb4fa7f36c5d9b3a9&o="
          city="北京"
          price="1500"
        />
        <Spotitem
          img-src="https://cf.bstatic.com/xdata/images/city/600x600/683831.jpg?k=bbe0665d459d2ca7a7be29dbae2f8f4c13924f320da1a2a7bdec4f30b1e9470a&o="
          city="上海"
          price="900"
        />
      </div>
    </div>
  </template>
  
  <script>
  import Spotitem from './Spotitem.vue'
  export default {
    name: 'HotSpot',
    
    components: {
      Spotitem
    }
  }
  </script>
  
  <style scoped>
  .hot-spot {
    margin-top:50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 18%;
  }
  
  .spot-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .first-row .spotitem {
    flex-basis: calc(50% - 10px);
  }
  
  .second-row .spotitem {
    flex-basis: calc(33.33% - 10px);
  }
  
  @media screen and (max-width: 768px) {
    .spot-row {
      flex-direction: column;
      align-items: center;
    }
    .spot-row .spotitem {
      flex-basis: calc(100% - 20px);
    }
  }
  </style>
  