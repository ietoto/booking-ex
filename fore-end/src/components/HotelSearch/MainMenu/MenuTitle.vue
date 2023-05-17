<template>
        <div class="Menutitle">
          <h1 class="h1style1 h1style2">
            {{ hotel.city }}: 共{{this.$store.state.hotel_num.num}}家住宿
          </h1>
      </div>
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
  /* 在这里添加样式 */
.Menutitle {
    width:50%;
    align-items: center;
    display: flex;
    justify-content: space-between;
}

.h1style1 {
    flex: 1;
    margin-top: 20px;
    padding: 0;
    font-family: Avenir Next,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin-block-end: .67em;
}
  </style>
