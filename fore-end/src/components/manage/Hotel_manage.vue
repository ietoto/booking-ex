<template>
  <body id="poster">
  <Navbar/>
  <v-sidebar/>
  <el-container style="height: 625px; width: 1500px;">
    <el-aside style="width: 250px;margin-top: 50px;">
    </el-aside>
    <el-container style="height: 590px;margin-top: 20px;border: 1px solid #de1b4f;width: 1200px;position: relative;left: 20px;">
      <el-header>
        <el-form  :inline="true">
          <el-row>
            <el-col :span="60" :offset="100">
              <el-form-item label="酒店id：">
                <el-input v-model="hotel_id" placeholder="请输入酒店id" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="50">
              <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="getByHotelId">查询</el-button>
                <el-button type="primary" icon="el-icon-plus" @click="SetAddInformationVisible">新增</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-header>
      <el-dialog title="添加酒店信息" :visible.sync="AddInformationVisible">
        <el-form label-width="100px" style="text-align: center;">
          <el-form-item label="酒店名" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.name"></el-input>
          </el-form-item>
          <el-form-item label="酒店描述" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.desciption"></el-input>
          </el-form-item>
          <el-form-item label="距中心距离" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.distance"></el-input>
          </el-form-item>
          <el-form-item label="所在城市" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.city"></el-input>
          </el-form-item>
          <el-form-item label="所在地区" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.location"></el-input>
          </el-form-item>
          <el-form-item label="详细地址" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.address"></el-input>
          </el-form-item>
          <el-form-item label="评分" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.score"></el-input>
          </el-form-item>
          <el-form-item label="星级" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.star"></el-input>
          </el-form-item>
          <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
            <el-button type="primary" @click="Addhotel" style="width: 80%;">提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="酒店详细信息" :visible.sync="ShowInformationVisible">
        <el-form label-width="100px" style="text-align: center;">
          <el-form-item label="酒店名" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.name" :disabled=ShowInformationIsDisabled></el-input>
          </el-form-item>
          <el-form-item label="酒店描述" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.desciption" :disabled=ShowInformationIsDisabled></el-input>
          </el-form-item>
          <el-form-item label="距中心距离" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.distance" :disabled=ShowInformationIsDisabled></el-input>
          </el-form-item>
          <el-form-item label="所在城市" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.city" :disabled=ShowInformationIsDisabled></el-input>
          </el-form-item>
          <el-form-item label="所在地区" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.location" :disabled=ShowInformationIsDisabled></el-input>
          </el-form-item>
          <el-form-item label="详细地址" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.address" :disabled=ShowInformationIsDisabled></el-input>
          </el-form-item>
          <el-form-item label="评分" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.score" :disabled=ShowInformationIsDisabled></el-input>
          </el-form-item>
          <el-form-item label="星级" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.star" :disabled=ShowInformationIsDisabled></el-input>
          </el-form-item>
          <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
            <el-button type="primary" @click="updatehotel" style="width: 80%;">提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-main>
        <el-container style="height: 460px;margin-top: -15px;border: 1px solid #de1b4f;width: 1200px;position: relative;left: 0px;">
          <el-table
            border
            height="450"
            v-loading="loading"
            element-loading-text="努力加载中"
            @cell-mouse-enter="mouseEnter"
            :data="userList.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"
          >
            <el-table-column label="序号" type="index" width="55">
              <template v-slot="scope">
                <!-- (当前页 - 1) * 当前显示数据条数 + 当前行数据的索引 + 1  -->
                <span>{{ (page.currentPage - 1) * page.pageSize + scope.$index + 1 }}</span>
              </template>
            </el-table-column>
            <el-table-column label="id" prop="id" min-width="25px"/>
            <el-table-column label="酒店名" prop="name" min-width="25px"/>
            <el-table-column label="所在城市" prop="city" min-width="25px"/>
            <el-table-column label="所在地区" prop="location" min-width="25px"/>
            <el-table-column label="距中心距离" prop="distance" min-width="50px"/>
            <el-table-column label="酒店评分" prop="score" min-width="50px"/>
            <el-table-column label="酒店星级" prop="star" min-width="50px"/>
            <el-table-column label="操作" prop="operation" width="200">
              <template>
                <el-button
                  type="text"
                  icon="el-icon-edit"
                  @click="SetShowInformationVisible"
                >详情</el-button>
                <el-button
                  type="text"
                  icon="el-icon-delete"
                  style="color: red;"
                  @click="deleteuser"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-container>
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            background
            layout="total,prev, pager, next, jumper"
            :page-size=page.pageSize
            :total="hotelList.length">
          </el-pagination>
        </div>
      </el-main>
    </el-container>
  </el-container>
  </body>
</template>

<script>
import Navbar from '../home/Navbar/Navbar.vue'
import vSidebar from './Sidebar.vue';
export default {
  name: "Hotel_manage",
  components :{
    Navbar,
    vSidebar
  },
  mounted: function () {
    console.log('挂载开始')
    this.getall()
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.currentPage = val
    },
    getByHotelId(){
      var _this = this
      this.loading=true
      this.$axios
        .post('/hotel/searchById', {
          id: this.id
        })
        .then(successResponse => {
          if (successResponse.data.id !=null) {
            console.log('查询成功')
            this.hotelList.push(successResponse.data)
            this.loading=false
          }
          else {
          }
        })
        .catch(failResponse => {
        })
    },
    SetAddInformationVisible(){
      this.AddInformationVisible=true
    },
    Addhotel(){
      var _this = this
      if (this.addhotel.name === ''){
        // alert(this.registerForm.phone)
        this.$message({
          duration: 1000,
          showClose: true,
          message: '酒店名不能为空！',
          type: 'error'
        })
        return
      }
      this.$axios
        .post('/hotel/add', {
          name: this.addhotel.name,
          desciption: this.addhotel.desciption,
          distance: this.addhotel.distance,
          city: this.addhotel.city,
          location: this.addhotel.location,
          address: this.addhotel.address,
          score: this.addhotel.score,
          star: this.addhotel.star

        })
        .then(successResponse => {
          if (successResponse.data.code===200) {
            // var data = this.registerForm
            this.$message({
              duration: 1000,
              showClose: true,
              message: '添加成功！',
              type: 'success'
            })
            this.AddInformationVisible=false
            this.getall()
          }
          else {
            this.$message({
              duration: 1000,
              showClose: true,
              message: '添加失败！',
              type: 'error'
            })
          }
        })
        .catch(failResponse => {
        })
    },
    getall(){
      var _this = this
      this.username=null
      this.loading=true
      this.$axios
        .post('/hotel/showlimit', {
        })
        .then(successResponse => {
          if (successResponse.data !=null) {
            console.log('查询成功')
            this.hotelList=successResponse.data
            this.loading=false
          }
          else {
          }
        })
        .catch(failResponse => {
        })
    },
    deleteuser(){
      this.$confirm('此操作将永久删除该酒店，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then((res) => {
        this.$axios
          .post('/hotel/delete', {
            id: this.chooseHotel.id
          })
          .then(successResponse => {
            if (successResponse.data.code ===200) {
              console.log('删除成功')
              this.$message({
                duration: 1000,
                showClose: true,
                type: 'success',
                message: '删除成功！'
              })
              this.getall()
            }
            else {
              this.$message({
                duration: 1000,
                showClose: true,
                type: 'error',
                message: '删除失败！'
              })
              this.getall()
            }
          })
          .catch(failResponse => {
          })
      }).catch(() => {
        this.$message({
          duration: 1000,
          showClose: true,
          type: 'info',
          message: '取消删除'
        })
      })
    },
    SetShowInformationVisible(){
      this.SetInformationVisible=true
      this.addhotel.name=this.hotelList[this.chooseHotel.index-1].name
      this.addhotel.desciption=this.hotelList[this.chooseHotel.index-1].desciption
      this.addhotel.distance=this.hotelList[this.chooseHotel.index-1].distance
      this.addhotel.city=this.hotelList[this.chooseHotel.index-1].city
      this.addhotel.location=this.hotelList[this.chooseHotel.index-1].location
      this.addhotel.address=this.hotelList[this.chooseHotel.index-1].address
      this.addhotel.score=this.hotelList[this.chooseHotel.index-1].score
      this.addhotel.star=this.hotelList[this.chooseHotel.index-1].star
      this.addhotel.img=this.hotelList[this.chooseHotel.index-1].img
    },
    updateuser(){
      var _this = this
      if (this.adduser.name === ''){
        // alert(this.registerForm.phone)
        this.$message({
          duration: 1000,
          showClose: true,
          message: '酒店名不能为空！',
          type: 'error'
        })
        return
      }
      this.$axios
        .post('/hotel/update', {
          id: this.chooseHotel.id,
          name: this.addhotel.name,
          desciption: this.addhotel.desciption,
          distance: this.addhotel.distance,
          city: this.addhotel.city,
          location: this.addhotel.location,
          address: this.addhotel.address,
          score: this.addhotel.score,
          star: this.addhotel.star,
          img: this.addhotel.img
        })
        .then(successResponse => {
          if (successResponse.data.code ===200) {
            // var data = this.registerForm
            this.$message({
              duration: 1000,
              showClose: true,
              message: '修改成功！',
              type: 'success'
            })
            this.ShowInformationVisible=false
            this.getall()
          }
          else {
            this.$message({
              duration: 1000,
              showClose: true,
              message: '修改失败！',
              type: 'error'
            })
          }
        })
        .catch(failResponse => {
        })
    },
    mouseEnter (data) {
      this.chooseHotel = Object.assign({}, data)
    }
  },
  data() {
    return {
      loading: true,
      id: null,
      hotelList: [],
      chooseHotel: null,
      AddInformationVisible: false,
      ShowInformationVisible: false,
      addhotel:{
        name: null,
        desciption: null,
        distance: null,
        city: null,
        location: null,
        address: null,
        score: null,
        star: null,
        img: null
      },
      page: {
        currentPage: 1, // 当前页
        pageSize: 6, // 每页条数
      }
    }
  }
}
</script>

<style scoped>

</style>
