<template>
   <div class="item3">
      <el-form class="form-container">
         <div class="item1 item2  ">
            <el-form-item>
               <div class="label">境内外特价搜不停</div>
            </el-form-item>
            <el-form-item label="目的地/住宿名称：">
               <el-input placeholder="目的地？" prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="到店日期"
               end-placeholder="离店日期" :picker-options="pickerOptions" />
         </div>
      </el-form>
      <div class="search-bar-wrapper" style="position: relative; z-index: 1;">
         <SearchPeople />
      </div>
      <el-button type="primary" class="search-button">搜索</el-button>
   </div>
</template>

<script>
import SearchPeople from '../../home/Search/SearchPeople.vue';
export default {
   name: "Searchbar",
   data() {
      return {
         value1: '',
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
   components: {
      SearchPeople
   }
}
</script>

<style scoped>
.form-container {
   margin-top: 5%;
   display: flex;
   margin-bottom: 5%;

}

form {
   margin: 0;
   padding: 0;
}

.item2 {
   border-radius: 8px;
   color: #1a1a1a;
   font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
   font-size: 12px;
   font-weight: 400;
   line-height: 20px;
   padding: 16px;
}

.item1 {
   box-sizing: border-box;
   position: relative;
   width: 100%;
}

.item3 {
   background-color: #ffc489;
   margin-left: 50%;
   border-radius: 10px;
   margin-bottom: 20px;
}

.label {
   font-family: Avenir Next, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
   padding: 20px 20px;
   background: #FFB700;
   font-weight: bolder;
   font-size: 20px;
   line-height: 28px;
   margin-bottom: -4px;
}

.search-button {
   text-align: center;
   color: #0D47A1;
   margin-left:5%;
   margin-top:3%;
   margin-bottom:5%;
   width: 90%;
}

.search-bar-wrapper {
   margin-top: 15px;
   margin-left:2%;
   position: relative;
   z-index: 1;
   width: 94%; /* 设置宽度为100% */
}

.guests-popover-content {
   /* 其他样式... */
   z-index: 2;
   /* 设置悬浮框内容的层级 */
}
</style>