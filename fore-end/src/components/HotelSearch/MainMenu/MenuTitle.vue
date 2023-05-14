<template>
        <div class="Menutitle">
          <h1 class="e1f827110f d5f78961c3">
            {{ destination }}: 共{{ hotelCount }}家住宿
          </h1>
      </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        destination: "南京",
        hotelCount: 170,
      };
    },
  };
  </script>
  
  <style scoped>
  /* 在这里添加样式 */
.Menutitle {
    margin-top:50px;
    width:50%;
    align-items: center;
    display: flex;
    justify-content: space-between;
}

.d5f78961c3 {
    flex: 1;
    margin: 0;
    padding: 0;
}
.e1f827110f {
    font-family: Avenir Next,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
}
  </style>
  