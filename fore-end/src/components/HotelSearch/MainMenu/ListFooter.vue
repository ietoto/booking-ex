<template>
  <div class="block">
    <el-pagination
      @current-change="handleCurrentChange"
      background
      layout="total,prev, pager, next, jumper"
      :page-size="5"
      :total="hotelList.length">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name:'ListFooter',
  date(){
    return {
      page: {
        currentPage: 1, // 当前页
        pageSize: 5, // 每页条数
      }
    }
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.currentPage = val
    }
  }
}
</script>

<style>
.pagination {
  width:100%;
}
</style>
