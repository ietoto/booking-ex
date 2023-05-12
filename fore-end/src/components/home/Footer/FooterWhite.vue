<template>
    <div>
      <div
        :style="{
          width: '76%',
          margin: 'auto',
          backgroundColor: 'white',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
        }"
      >
        <!-- Repeat this div and modify the p contents for each column -->
        <div v-for="column in columns" :key="column.id">
          <p v-for="item in column.items" :key="item" :style="pStyle">{{ item }}</p>
        </div>
        <!-- ... -->
      </div>
  
      <h6 :style="h6Style">后台登陆</h6>
      <div :style="copyrightStyle">版权 © 1996–2023 Booking.com™. 版权所有.</div>
      <div :style="descriptionStyle">Booking.com隶属于Booking Holdings Inc.，该集团是深受全球用户好评的在线旅行及周边服务供应商。</div>
      <div :style="logoStyle">
        <!-- Repeat this img for each logo -->
        <img v-for="logo in logos" :key="logo.id" :src="logo.src" alt="logo" />
        <!-- ... -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pStyle: {
          color: '#4A9AD4',
          fontSize: '15px',
          padding: '1px',
          margin: '7px',
          cursor: 'pointer',
          textAlign: 'left',
        },
        h6Style: {
          color: '#0071C2',
          fontSize: '25px',
          fontWeight: '700',
          cursor: 'pointer',
          textAlign: 'center',
        },
        copyrightStyle: {
          width: '73%',
          margin: 'auto',
          textAlign: 'center',
          fontSize: '12px',
        },
        descriptionStyle: {
          fontSize: '13px',
          padding: '15px',
          color: '#6B6B6B',
          textAlign: 'center',
        },
        logoStyle: {
          padding: '19px',
          margin: 'auto',
          width: '55%',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'space-evenly',
        },
        // update this with your actual data
        columns: [
        {
          id: 1,
          items: ['国家', '地区', '城市', '区', '机场', '酒店', '周边地标', '景点', '公园'],
        },
        {
          id: 2,
          items: ['民宿短租', '公寓', '度假村', '别墅', '青旅', '住宿+早餐', '旅馆'],
        },
        {
          id: 3,
          items: ['全球独特住宿', '所有目的地', '所有航班目的地', '所有租车点', '发现精彩', '季节和假日优惠'],
        },
        {
          id: 4,
          items: ['租车服务', '订机票', '餐厅订位', 'Booking.com 旅行代理中心'],
        },
        {
          id: 5,
          items: ['新冠COVID-19的常见问题FAQ', '关于 Booking.com', '客服帮助', '酒店自助平台', 'Careers', '可持续发展项目', '新闻中心', '安全旅行中心', '投资关系', '条款与条件', '合作伙伴申诉', '隐私和Cookie说明', '其他问题查询'],
        },
      ],
        logos: [
          {
            id: 1,
            src: 'https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png',
          },
          {
            id: 2,
            src: 'https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png',
          },
          {
            id:3,
            src:'https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png'
          },
          {
            id:4,
            src:'https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png'
          },
          {
            id:5,
            src:'https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png'
          },
          // ... more logos
        ],
      };
    },
  };
  </script>
  