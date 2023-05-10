<template>
  <div class="background">
    <div class="search-container">
      <div class=" search-item destination-item">
        <el-input calss type="text" placeholder="目的地/住宿" />
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="到店日期"
          end-placeholder="离店日期"
          :picker-options="pickerOptions"
        />
        <el-input type="text" placeholder="人员情况" />
        <el-button type="primary" class="search-button">搜索</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
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
  }
}
</script>

<style scoped>
.background {
  background-size: cover;
  background-position: center;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-container {
  background-color: #fff;
  padding: 20px;
  border: 3px solid #f0b90b;
  border-radius: 10px;
}

.search-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.el-input {
  width: 200px;
}

.el-date-editor {
  width: 300px;
}

.search-button {
  margin-left: 20px;
}
</style>
