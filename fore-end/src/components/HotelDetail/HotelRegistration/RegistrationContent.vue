<template>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>酒店政策</span>
      </div>
  
      <!-- Check-in Policy -->
      <div class="policy-item">
        <div class="policy-icon">
            <svg class="bk-icon -streamline-check_in" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M87.33 66.22c.06-.1.11-.2.16-.3.077-.125.143-.255.2-.39.054-.133.097-.27.13-.41.04-.112.073-.225.1-.34.1-.515.1-1.045 0-1.56a3.352 3.352 0 0 0-.1-.34 2.802 2.802 0 0 0-.13-.41 2.868 2.868 0 0 0-.2-.39c0-.1-.1-.2-.16-.3a4.922 4.922 0 0 0-.5-.61l-24-24a4.002 4.002 0 1 0-5.66 5.66L74.34 60H20a4 4 0 0 0 0 8h54.34L57.17 85.17a4.002 4.002 0 1 0 5.66 5.66l24-24c.183-.19.35-.394.5-.61zM92 0h-8a4 4 0 0 0 0 8h8c6.627 0 12 5.373 12 12v88c0 6.627-5.373 12-12 12h-8a4 4 0 0 0 0 8h8c11.046 0 20-8.954 20-20V20c0-11.046-8.954-20-20-20z"></path></svg>
            <h4>入住时间</h4>
        </div>
        <div class="policy-detail">
          <p>12:00之后</p>
        </div>
      </div>
  
      <!-- Age Policy -->
      <div class="policy-item">
        <div class="policy-icon">
            <svg class="bk-icon -streamline-person" height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M14.25 3.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM18 13.5a6 6 0 0 0-12 0v2.25c0 .414.336.75.75.75H9l-.746-.675.75 7.5A.75.75 0 0 0 9.75 24h4.5a.75.75 0 0 0 .746-.675l.75-7.5L15 16.5h2.25a.75.75 0 0 0 .75-.75V13.5zm-1.5 0v2.25l.75-.75H15a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 9 15H6.75l.75.75V13.5a4.5 4.5 0 1 1 9 0z"></path></svg>
        </div>
        <div class="policy-detail">
          <h4>无年龄限制</h4>
          <p>入住客人无年龄限制要求</p>
        </div>
      </div>
  
      <!-- Payment Policy -->
      <div class="policy-item">
        <div class="policy-icon">
            <svg class="bk-icon -streamline-credit_card_back" height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M22.5 12v6.75a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75V12zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v13.5A2.25 2.25 0 0 0 2.25 21h19.5A2.25 2.25 0 0 0 24 18.75V12zM.75 9h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm4.5 4.5h8.25a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 0 0 1.5zm0 3h5.25a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 0 0 1.5z"></path></svg>
        </div>
        <div class="policy-detail">
          <h4>酒店接受的银行卡类型</h4>
          <div class="payment-methods">
            <!-- Images or icons for accepted cards -->
            <img src="https://img.sj33.cn/uploads/allimg/201401/7-140120143138.jpg" alt="Maestro卡" title="Maestro卡" width="66px" height="50px">
            <img src="https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/10dfa9ec8a1363279c37e8ab9f8fa0ec09fac754.jpg" alt="Mastercard万事达卡" title="Mastercard万事达卡" width="66px" height="50px"> 
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo-2014-present.jpg" alt="Mastercard万事达卡" title="Mastercard万事达卡" width="86px" height="50px"> 
            <img src="https://1000marcas.net/wp-content/uploads/2021/06/UnionPay-logo-2048x1152.png" alt="Mastercard万事达卡" title="Mastercard万事达卡" width="86px" height="50px"> 
            <img src="http://img.rong360.com/3e8/3cbd4/cimg/4b/4bc059e5227d0f2128b975948f7c595eafde8eed_460x280.png" alt="Mastercard万事达卡" title="Mastercard万事达卡" width="86px" height="50px"> 
            <img src="https://logosmarcas.net/wp-content/uploads/2020/11/American-Express-Emblema.png" alt="Mastercard万事达卡" title="Mastercard万事达卡" width="86px" height="50px">          </div>
            <img src="https://i0.wp.com/www.sirchandler.com.ar/wp-content/uploads/2016/04/DinersClub-logo.jpg?fit=830%2C416&ssl=1" alt="Mastercard万事达卡" title="Mastercard万事达卡" width="86px" height="50px"> 
            <img src="https://logosmarcas.net/wp-content/uploads/2020/04/PayPal-Logo.png" alt="Mastercard万事达卡" title="Mastercard万事达卡" width="86px" height="50px">
            
            <p>义乌银都酒店接受上述银行卡付款并有权在您抵达之前进行预授权。</p>
        </div>
      </div>
    </el-card>
  </template>
  
  <script>
  export default {
    name: 'HotelPolicy'
  }
  </script>
  
  <style scoped>
  .box-card {
    margin-bottom: 20px;
  }
  
  .policy-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  
  .policy-icon {
    flex: 0 0 40px; 
    margin-right: 20px;
  }
  
  .policy-detail {
    flex: 1; 
  }
  </style>
  