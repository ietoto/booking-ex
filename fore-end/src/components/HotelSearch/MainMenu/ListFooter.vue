<template>
  <div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      :page-size="10"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
   name:'ListFooter',
}
</script>

<style>

</style>