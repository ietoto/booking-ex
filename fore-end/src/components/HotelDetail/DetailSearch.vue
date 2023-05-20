<template>
    <div class="DeatailSearch">
        <div class="formheader">
            <h2>空房情况</h2>
            <div class="searchbar">
                <SearchHotel />
            </div>
            <div class="roomtable">
                <RoomTable />
            </div>
            <div>
                <el-alert type="success" role="status" :closable="false" class="custom-alert">
                    <template #default>
                        <div class="custom-content">
                            <svg fill="#008009" height="24" width="24" viewBox="0 0 128 128" aria-hidden="true"
                                focusable="false" class="custom-icon">
                                <path
                                    d="M108 24H20A12 12 0 0 0 8 36v56a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12V36a12 12 0 0 0-12-12zm-88 8h88a4 4 0 0 1 4 4v4H16v-4a4 4 0 0 1 4-4zm88 64H20a4 4 0 0 1-4-4V56h96v36a4 4 0 0 1-4 4zM24 72h48v8H24z">
                                </path>
                            </svg>
                            <span class="custom-text">预订无需信用卡。我们将向你发送订单确认邮件。</span>
                        </div>
                    </template>
                </el-alert>
            </div>
            <div class="review">
                <HotelReview />
            </div>
        </div>
    </div>
</template>

<script>
import HotelReview from './HotelReview.vue';
import RoomTable from './RoomTable.vue'
import SearchHotel from './SearchHotel.vue'
export default {
    name: 'DetailSearch',
    components: {
        SearchHotel,
        RoomTable,
        HotelReview
    }
}
</script>


<style>
.custom-alert {
  margin-top: 30px;
  /* 这里调整整个弹窗的样式，如背景色，边框等 */
  width: 95%;
  height: 80px;
  border-color: darkgreen; /* 更深的绿色 */
  border-width: 2px; /* 加粗边框 */
  border-radius: 8px;
}

.custom-content {
  /* 这里调整弹窗内容的样式，如布局，间距等 */
  display: flex;
  align-items: center;
}

.custom-icon {
  /* 这里调整图标的样式，如大小，颜色等 */
  margin-right: 10px;
    width: 24px;
}

.custom-text {
  /* 这里调整文本的样式，如字体，颜色，大小等 */
  font-size: 16px; /* 调整字体大小 */
}

.DeatailSearch {
    width: 80%;
    margin-left: 15%;
}

.formheader {
    margin-top: 20px;

}

.roomtable {
    margin-top: 20px;
    margin-right: 5%;
}</style>