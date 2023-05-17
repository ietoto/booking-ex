<template>
  <body id="poster">
  <Navbar/>
  <v-sidebar/>
  <el-container style="height: 625px; width: 1520px;">
    <el-aside style="width: 250px;margin-top: 50px;">
    </el-aside>
    <el-main>
  <el-container style="height: 525px;margin-top: 15px;border: 1px solid rgba(222,27,79,0);width: 1200px;position: relative;left: 0px;">
    <el-table
      border
      height="520"
      v-loading="loading"
      element-loading-text="努力加载中"
      @cell-mouse-enter="mouseEnter"
      :data="orderList.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"
    >
      <el-table-column label="序号" type="index" width="40">
        <template v-slot="scope">
          <!-- (当前页 - 1) * 当前显示数据条数 + 当前行数据的索引 + 1  -->
          <span>{{ (page.currentPage - 1) * page.pageSize + scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单id" prop="id" min-width="15px"/>
      <el-table-column label="用户id" prop="userid" min-width="15px"/>
      <el-table-column label="用户姓名" prop="username" min-width="14px"/>
      <el-table-column label="酒店id" prop="hotelid" min-width="14px"/>
      <el-table-column label="酒店名" prop="hotel_name" min-width="40px"/>
      <el-table-column label="客房id" prop="roomid" min-width="14px"/>
      <el-table-column label="客房名" prop="room_name" min-width="35px"/>
      <el-table-column label="房间数" prop="num" min-width="15px"/>
      <el-table-column label="金额" prop="money" min-width="15px"/>
      <el-table-column label="入住时间" prop="startdate" min-width="25px"/>
      <el-table-column label="离开时间" prop="enddate" min-width="25px"/>
      <el-table-column label="状态" prop="state" min-width="16px"/>
      <el-table-column label="操作" prop="operation" width="100">
        <template>
          <el-button
            type="text"
            icon="el-icon-edit"
            @click="ShowOrder"
          >详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-container>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          background
          layout="total,prev, pager, next, jumper"
          :page-size="5"
          :total="orderList.length">
        </el-pagination>
      </div>
    </el-main>
  </el-container>>
  </body>
</template>

<script>
import Navbar from './home/Navbar/Navbar.vue'
import vSidebar from './Sidebar.vue';
export default {
  name: "myorder",
  components: {
    Navbar,
    vSidebar
  },
  mounted: function () {
    console.log('挂载开始')
    this.getByUserId()
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.currentPage = val
    },
    mouseEnter (data) {
      this.chooseOrder = Object.assign({}, data)
    },
    getByUserId(){
      var _this = this
      if(this.id===null){
        this.getall()
        return
      }
      this.loading=true
      this.$axios
        .post('/order/user_showall', {
          id: this.$store.state.user.id
        })
        .then(successResponse => {
          if (successResponse.data !=null) {
            console.log('查询成功')
            this.orderList=successResponse.data
            for (let i = 0; i < this.orderList.length; i++) {
              switch (this.orderList[i].state){
                case 0:
                  this.orderList[i].state='未付款'
                  break
                case 1:
                  this.orderList[i].state='已付款'
                  break
                case 2:
                  this.orderList[i].state='已取消'
                  break
              }
            }
            this.loading=false
          }
          else {
          }
        })
        .catch(failResponse => {
        })
    },
    ShowOrder(){
      var date1 = new Date(this.chooseOrder.enddate);
      var date2 = new Date(this.chooseOrder.startdate);
      var diffTime = Math.abs(date2 - date1);
      var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      this.chooseOrder.date_num=diffDays
      this.$store.commit('order', this.chooseOrder)
      this.$router.push('/order');
    }
  },
  data() {
    return {
      loading: true,
      chooseOrder: null,
      orderList: [],
      page: {
        currentPage: 1, // 当前页
        pageSize: 6, // 每页条数
      }
    }
  }
}
</script>

<style scoped></style>
