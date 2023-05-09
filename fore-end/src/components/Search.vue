<template>
  <div class="background">
    <div class="search-container">
      <div class="search-item destination-item">
        <el-input type="text" placeholder="目的地/住宿" />
        <el-date-picker
          type="date"
          placeholder="到店日期"
          v-model="checkInDate"
          :picker-options="pickerOptions"
          :disabledDate="disabledCheckInDate"
        />
        <el-date-picker
          type="date"
          placeholder="离店日期"
          v-model="checkOutDate"
          :picker-options="pickerOptions"
          :disabledDate="disabledCheckOutDate"
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
      checkInDate: '',
      checkOutDate: '',
      pickerOptions: {
        disabledDate: (time) => {
          const currentDate = new Date()
          if (time.getTime() < currentDate.getTime() - 86400000) {
          // 禁止选择今天及今天之前的日期
            return true
          } else if (this.checkOutDate) {
          // 禁止选择到店日期晚于或等于离店日期的日期
            return time.getTime() >= this.checkOutDate.getTime()
          } else {
            return false
          }
        }
      }
    }
  },
  methods: {
    disabledCheckInDate (time) {
      if (this.checkOutDate) {
        return (
          time.getTime() < Date.now() ||
          time.getTime() >= this.checkOutDate.getTime() ||
          time.getTime() < new Date().setHours(0, 0, 0, 0)
        )
      } else {
        return time.getTime() < new Date().setHours(0, 0, 0, 0)
      }
    },
    disabledCheckOutDate (time) {
      if (this.checkInDate) {
        const minCheckOutDate = new Date(this.checkInDate.getTime() + 86400000)
        const currentDate = new Date()
        if (time.getTime() < minCheckOutDate.getTime() || time.getTime() < currentDate.getTime() - 86400000) {
          // 禁止选择早于最小离店日期和今天及今天之前的日期
          return true
        } else {
          return false
        }
      } else {
        return true
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
  width: 200px;
}

.search-button {
  margin-left: 20px;
}
</style>
