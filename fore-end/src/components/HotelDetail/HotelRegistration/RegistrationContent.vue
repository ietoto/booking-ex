<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>酒店政策</span>
    </div>
    <!-- Check-in Policy -->
    <div class="policy-item">
      <div class="facility-card">
        <div class="icon">
          <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M87.33 66.22c.06-.1.11-.2.16-.3.077-.125.143-.255.2-.39.054-.133.097-.27.13-.41.04-.112.073-.225.1-.34.1-.515.1-1.045 0-1.56a3.352 3.352 0 0 0-.1-.34 2.802 2.802 0 0 0-.13-.41 2.868 2.868 0 0 0-.2-.39c0-.1-.1-.2-.16-.3a4.922 4.922 0 0 0-.5-.61l-24-24a4.002 4.002 0 1 0-5.66 5.66L74.34 60H20a4 4 0 0 0 0 8h54.34L57.17 85.17a4.002 4.002 0 1 0 5.66 5.66l24-24c.183-.19.35-.394.5-.61zM92 0h-8a4 4 0 0 0 0 8h8c6.627 0 12 5.373 12 12v88c0 6.627-5.373 12-12 12h-8a4 4 0 0 0 0 8h8c11.046 0 20-8.954 20-20V20c0-11.046-8.954-20-20-20z">
            </path>
          </svg>
        </div>
        <div>
          <span>入住时间</span>
        </div>
      </div>
      <div class="policy-detail">
        <p>14:00之后</p>
      </div>
    </div>
    <hr>
    <div class="policy-item">
      <div class="facility-card">
        <div class="icon">
          <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M111.33 66.22c.06-.1.11-.2.16-.3.05-.1.15-.25.21-.39s.08-.27.12-.41c.039-.112.073-.225.1-.34.1-.515.1-1.045 0-1.56a3.352 3.352 0 0 0-.1-.34c0-.14-.07-.28-.12-.41-.05-.13-.14-.26-.21-.39-.07-.13-.1-.2-.16-.3a4.886 4.886 0 0 0-.5-.61l-24-24a4.002 4.002 0 1 0-5.66 5.66L98.34 60H44a4 4 0 0 0 0 8h54.34L81.17 85.17a4.002 4.002 0 1 0 5.66 5.66l24-24c.183-.19.35-.394.5-.61zM44 120h-8c-6.627 0-12-5.373-12-12V20c0-6.627 5.373-12 12-12h8a4 4 0 0 0 0-8h-8C24.954 0 16 8.954 16 20v88c0 11.046 8.954 20 20 20h8a4 4 0 0 0 0-8z">
            </path>
          </svg>
        </div>
        <div>
          <span>退房时间</span>
        </div>
      </div>
      <div class="policy-detail">
        <p>12:00前</p>
      </div>
    </div>
    <hr>
    <div class="policy-item">
      <div class="facility-card">
        <div class="icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z">
            </path>
          </svg>
        </div>
        <div>
          <span>预订取消/预付政策</span>
        </div>
      </div>
      <div class="policy-detail">
        <p>取消和预付款政策根据住宿类型而有所不同。 请查看您的入住日期并参阅您所需的客房的条款。</p>
      </div>
    </div>
    <hr>
    <!-- Age Policy -->
    <div class="policy-item">
      <div class="facility-card">
        <div class="icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.25 3.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM18 13.5a6 6 0 0 0-12 0v2.25c0 .414.336.75.75.75H9l-.746-.675.75 7.5A.75.75 0 0 0 9.75 24h4.5a.75.75 0 0 0 .746-.675l.75-7.5L15 16.5h2.25a.75.75 0 0 0 .75-.75V13.5zm-1.5 0v2.25l.75-.75H15a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 9 15H6.75l.75.75V13.5a4.5 4.5 0 1 1 9 0z">
            </path>
          </svg>
        </div>
        <div>
          <span>无年龄限制</span>
        </div>
      </div>
      <div class="policy-detail">
        <p>入住客人无年龄限制要求</p>
      </div>
    </div>
    <hr>
    <div class="policy-item">
      <div class="facility-card">
        <div class="icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm-6.182 15.093l.188 1.5A.75.75 0 0 0 18 22.5h3a.75.75 0 0 0 .744-.657l.75-6-.744.657h1.5a.75.75 0 0 0 .75-.75V13.5a4.5 4.5 0 0 0-7.2-3.6.75.75 0 1 0 .9 1.2 3 3 0 0 1 4.8 2.4v2.25l.75-.75h-1.5a.75.75 0 0 0-.744.657l-.75 6L21 21h-3l.744.657-.188-1.5a.75.75 0 0 0-1.488.186zM6.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM5.444 20.157l-.188 1.5L6 21H3l.744.657-.75-6A.75.75 0 0 0 2.25 15H.75l.75.75V13.5a3 3 0 0 1 4.8-2.4.75.75 0 1 0 .9-1.2A4.5 4.5 0 0 0 0 13.5v2.25c0 .414.336.75.75.75h1.5l-.744-.657.75 6A.75.75 0 0 0 3 22.5h3a.75.75 0 0 0 .744-.657l.188-1.5a.75.75 0 0 0-1.488-.186zM13.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM15 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 3a4.5 4.5 0 0 0-4.5 4.5v.75c0 .414.336.75.75.75h1.5l-.74-.627.75 4.5a.75.75 0 0 0 .74.627H12a.75.75 0 0 0 0-1.5h-1.5l.74.627-.75-4.5a.75.75 0 0 0-.74-.627h-1.5l.75.75v-.75a3 3 0 0 1 3-3 .75.75 0 0 0 0-1.5zm0 1.5a3 3 0 0 1 3 3v.75l.75-.75h-1.5a.75.75 0 0 0-.74.627l-.75 4.5.74-.627H12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .74-.627l.75-4.5-.74.627h1.5a.75.75 0 0 0 .75-.75v-.75A4.5 4.5 0 0 0 12 12a.75.75 0 0 0 0 1.5z">
            </path>
          </svg>
        </div>
        <div>
          <span>儿童及加床政策</span>
        </div>
      </div>
      <div class="policy-detail">
        <div>
          <div data-test-id="child-policies-block">
            <div class="f70dc4cb0f">
              <h2 class="e975ff606b">一般儿童政策</h2>
              <p>欢迎任何年龄的儿童入住</p>
              <p>在该住宿18岁及以上的儿童将视为成年人。</p>
              <p>如需查看确切价格和入住信息，请在搜索条件中添加同行儿童人数和年龄。</p>
            </div>
            <h2 class="e975ff606b">婴儿床和加床政策</h2>
            <div class="e33d47e1e7">
              <div class="db4d8b8cd7">0 - 2岁</div>
              <div class="ee74e09eec"><span class="a5b29265cd"><span class="b6dc9a9e69 e6c50852bd" aria-hidden="true">
                <svg
                      viewBox="0 0 128 128" width="1em" height="1em">
                      <path
                        d="M24 44a4 4 0 0 1 4-4h28v-8H28a12 12 0 0 0-12 12v24l8-8zm44-8a24 24 0 1 1 24 24 24 24 0 0 1-24-24zm8 3a1 1 0 0 0 1 1h10a1 1 0 0 1 1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V41a1 1 0 0 1 1-1h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H97a1 1 0 0 1-1-1V21a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v10a1 1 0 0 1-1 1H77a1 1 0 0 0-1 1zm44 65v11.8a4.1 4.1 0 0 1-3.6 4.2 4 4 0 0 1-4.4-4v-4H16v3.8a4.1 4.1 0 0 1-3.6 4.2 4 4 0 0 1-4.4-4v-12a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8zm-8-16a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v4h96z">
                      </path>
                    </svg>
                  </span><span class="b88443e8cb">加床（按需提供）</span></span><span class="e7d0c52fc6">
                  <div class="db29ecfbe2">每名儿童每晚需120元</div>
                </span></div>
              <div class="ee74e09eec"><span class="a5b29265cd"><span class="b6dc9a9e69 e6c50852bd" aria-hidden="true"><svg
                      viewBox="0 0 128 128" width="1em" height="1em">
                      <path
                        d="M116 20a4 4 0 0 0-4 4v8H16v-8a4 4 0 0 0-8 0v80a4 4 0 0 0 8 0V88h96v16a4 4 0 0 0 8 0V24a4 4 0 0 0-4-4zM42 40h18v32H42zm26 32V40h18v32zM16 40h18v32H16zm96 32H94V40h18z">
                      </path>
                    </svg></span><span class="b88443e8cb">婴儿床（按需提供）</span></span><span class="e7d0c52fc6">
                  <div class="greentext">免费</div>
                </span></div>
            </div>
            <div class="e33d47e1e7">
              <div class="db4d8b8cd7">3岁以上</div>
              <div class="ee74e09eec"><span class="a5b29265cd"><span class="b6dc9a9e69 e6c50852bd" aria-hidden="true"><svg
                      viewBox="0 0 128 128" width="1em" height="1em">
                      <path
                        d="M24 44a4 4 0 0 1 4-4h28v-8H28a12 12 0 0 0-12 12v24l8-8zm44-8a24 24 0 1 1 24 24 24 24 0 0 1-24-24zm8 3a1 1 0 0 0 1 1h10a1 1 0 0 1 1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V41a1 1 0 0 1 1-1h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H97a1 1 0 0 1-1-1V21a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v10a1 1 0 0 1-1 1H77a1 1 0 0 0-1 1zm44 65v11.8a4.1 4.1 0 0 1-3.6 4.2 4 4 0 0 1-4.4-4v-4H16v3.8a4.1 4.1 0 0 1-3.6 4.2 4 4 0 0 1-4.4-4v-12a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8zm-8-16a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v4h96z">
                      </path>
                    </svg></span><span class="b88443e8cb">加床（按需提供）</span></span><span class="e7d0c52fc6">
                  <div class="db29ecfbe2">每人每晚120元</div>
                </span></div>
            </div>
            <div class="f70dc4cb0f">
              <p>婴儿床和加床价格不包含在总价内，需到店另行支付。</p>
              <p>允许的加床和婴儿床数量取决于您的选项。请查看所选房型获取更多信息。</p>
              <p>所有婴儿床及加床需视供应情况而定。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <!-- Payment Policy -->
    <div class="policy-item">
      <div class="facility-card">
        <div class="icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.5 12v6.75a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75V12zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v13.5A2.25 2.25 0 0 0 2.25 21h19.5A2.25 2.25 0 0 0 24 18.75V12zM.75 9h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm4.5 4.5h8.25a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 0 0 1.5zm0 3h5.25a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 0 0 1.5z">
            </path>
          </svg>
        </div>
        <div>
          <span>接受的银行卡类型</span>
        </div>
      </div>
      <div class="policy-detail">

        <div class="payment-methods">
          <!-- Images or icons for accepted cards -->
          <img src="https://img.sj33.cn/uploads/allimg/201401/7-140120143138.jpg" alt="Maestro卡" title="Maestro卡"
            width="66px" height="50px">
          <img
            src="https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/10dfa9ec8a1363279c37e8ab9f8fa0ec09fac754.jpg"
            alt="Mastercard万事达卡" title="Mastercard万事达卡" width="66px" height="50px">
          <img src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo-2014-present.jpg" alt="Mastercard万事达卡"
            title="Mastercard万事达卡" width="86px" height="50px">
          <img src="https://1000marcas.net/wp-content/uploads/2021/06/UnionPay-logo-2048x1152.png" alt="Mastercard万事达卡"
            title="Mastercard万事达卡" width="86px" height="50px">
          <img src="http://img.rong360.com/3e8/3cbd4/cimg/4b/4bc059e5227d0f2128b975948f7c595eafde8eed_460x280.png"
            alt="Mastercard万事达卡" title="Mastercard万事达卡" width="86px" height="50px">
          <img src="https://logosmarcas.net/wp-content/uploads/2020/11/American-Express-Emblema.png" alt="Mastercard万事达卡"
            title="Mastercard万事达卡" width="86px" height="50px">
        </div>
        <img
          src="https://i0.wp.com/www.sirchandler.com.ar/wp-content/uploads/2016/04/DinersClub-logo.jpg?fit=830%2C416&ssl=1"
          alt="Mastercard万事达卡" title="Mastercard万事达卡" width="86px" height="50px">
        <img src="https://logosmarcas.net/wp-content/uploads/2020/04/PayPal-Logo.png" alt="Mastercard万事达卡"
          title="Mastercard万事达卡" width="86px" height="50px">

        <p>{{ hotel.name }}接受上述银行卡付款并有权在您抵达之前进行预授权。</p>
      </div>
    </div>
  </el-card>
</template>
  
<script>
import FacilityCard from '../HotelFacility/FacilityCard.vue';
export default {
  name: 'HotelPolicy',
  data() {
    return {
      hotel: this.$store.state.hotel,
      scores: []
    }
  },
  components: {
    FacilityCard
  },
}
</script>
  
<style scoped>
.greentext{
  color: green;
}
.a5b29265cd{
  width:300px
}
.e975ff606b{
  font-weight: bold;
  color: lightblue;
  font-size: 20px;
}
.db29ecfbe2 {
    font-family: var(--DO_NOT_USE_bui_large_font_body_2_font-family);
    font-size: var(--DO_NOT_USE_bui_large_font_body_2_font-size);
    font-weight: var(--DO_NOT_USE_bui_large_font_body_2_font-weight);
    line-height: var(--DO_NOT_USE_bui_large_font_body_2_line-height);
}
.e33d47e1e7 {
    border: 1px solid #e7e7e7;
    border-radius: 3px;
    margin: 16px 0;
    max-width: 640px;
}
.db4d8b8cd7, .ee74e09eec {
    display: flex;
    padding: 8px;
}
.ee74e09eec {
    border-top: 1px solid #e7e7e7;
    flex-direction: row;
    justify-content: flex-start;
    display: flex;
    padding: 8px;
}
.e975ff606b, .f70dc4cb0f {
    margin: 0;
    margin-block-end: .67em;
    line-height: 24px;
    margin: 0 0 16px;
    padding: 0;
}
.e975ff606b, .f70dc4cb0f {
    margin: 0 0 16px;
}
.clearfix {}

.facilityboard {
  margin-top: 20px;
  width: 95%;
}

.facility-card {
  display: flex;
  align-items: center;
  width: 250px
}

.icon svg {
  fill: darkblue;
  margin-right: 10px;
  width: 20px;
  height: 20px;
}

.box-card {
  margin-top: 30px;
  margin-bottom: 20px;
  width: 93%;
}

.policy-item {
  display: flex;
  margin-bottom: 20px;
}

.policy-icon {
  flex: 0 0 40px;
  margin-right: 20px;
}

.policy-detail {
  flex: 1;
}

.policy-title {
  font-size: 20px;
  font-weight: bold;
}

.policy-label {
  font-size: 16px;
  font-weight: bold;
}</style>