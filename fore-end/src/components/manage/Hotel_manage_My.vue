<template>
  <body id="poster">
  <Navbar/>
  <v-sidebar/>
  <el-container style="height: 625px; width: 1500px;">
    <el-aside style="width: 250px;margin-top: 50px;">
    </el-aside>
    <el-container style="height: 590px;margin-top: 20px;border: 1px solid rgba(222,27,79,0);width: 1200px;position: relative;left: 20px;">
      <el-header>
        <el-form  :inline="true">
          <el-row>
          </el-row>
        </el-form>
      </el-header>
      <el-dialog title="添加酒店信息" :visible.sync="AddInformationVisible">
        <el-form label-width="100px" style="text-align: center;">
          <el-form-item label="酒店名" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.name"></el-input>
          </el-form-item>
          <el-form-item label="酒店描述" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input type="textarea" autosize v-model="addhotel.desciption"></el-input>
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
        <span slot="title" class="title">
          <el-button @click="ShowInformationIsDisabled = !ShowInformationIsDisabled">修改</el-button>
          <el-button @click="SetShowHotelFacVisible">酒店设施</el-button>
          <el-button @click="SetShowRoomVisible">客房</el-button>
        </span>
        <el-form label-width="100px" style="text-align: center;">
          <el-form-item label="酒店名" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addhotel.name" :disabled=ShowInformationIsDisabled></el-input>
          </el-form-item>
          <el-form-item label="酒店描述" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input type="textarea" autosize v-model="addhotel.desciption" :disabled=ShowInformationIsDisabled></el-input>
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
          <a v-if="!ShowInformationIsDisabled">
            <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
              <el-button type="primary" @click="updatehotel" style="width: 80%;">提交</el-button>
            </el-form-item>
          </a>
        </el-form>
      </el-dialog>
      <el-dialog title="酒店设施信息" :visible.sync="ShowHotelFacVisible">
        <span slot="title" class="title">
          <el-button @click="SetAddHotelFacVisible">添加</el-button>
        </span>
        <el-container style="height: 460px;margin-top: -15px;border: 1px solid rgba(222,27,79,0);width: 725px;position: relative;left: 0px;">
          <el-table
            border
            height="460"
            v-loading="hotelfacloading"
            element-loading-text="努力加载中"
            @cell-mouse-enter="hotelfacmouseEnter"
            :data="hotelfacList.slice((hotelfacpage.currentPage-1)*hotelfacpage.pageSize,hotelfacpage.currentPage*hotelfacpage.pageSize)"
          >
            <el-table-column label="序号" type="index" width="60">
              <template v-slot="scope">
                <!-- (当前页 - 1) * 当前显示数据条数 + 当前行数据的索引 + 1  -->
                <span>{{ (hotelfacpage.currentPage - 1) * hotelfacpage.pageSize + scope.$index + 1 }}</span>
              </template>
            </el-table-column>
            <el-table-column label="客房设施" prop="name" min-width="50px"/>
            <el-table-column label="操作" prop="operation" width="200">
              <template>
                <el-button
                  type="text"
                  icon="el-icon-edit"
                  @click="SetSetHotelFacInformationVisible"
                >修改</el-button>
                <el-button
                  type="text"
                  icon="el-icon-delete"
                  style="color: red;"
                  @click="deletehotelfac"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-container>
        <div class="block">
          <el-pagination
            @current-change="hotelfachandleCurrentChange"
            background
            layout="total,prev, pager, next, jumper"
            :page-size=hotelfacpage.pageSize
            :total="hotelfacList.length">
          </el-pagination>
        </div>
      </el-dialog>
      <el-dialog title="添加酒店设施" :visible.sync="AddHotelFacVisible">
        <el-form label-width="100px" style="text-align: center;">
          <el-form-item label="酒店设施" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addhotelfac"><el-input v-model="addhotelfac.name"></el-input></a>
          </el-form-item>
          <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
            <el-button type="primary" @click="Addhotelfac" style="width: 80%;">提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="酒店设施修改" :visible.sync="SetHotelFacInformationVisible">
        <el-form label-width="100px" style="text-align: center;">
          <el-form-item label="原酒店设施" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="chooseHotelFac"><el-input v-model="chooseHotelFac.name" :disabled=true></el-input></a>
          </el-form-item>
          <el-form-item label="新酒店设施" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addhotelfac.name"><el-input v-model="addhotelfac.name"></el-input></a>
          </el-form-item>
          <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
            <el-button type="primary" @click="updatehotelfac" style="width: 80%;">提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="客房信息" :visible.sync="ShowRoomVisible">
        <span slot="title" class="title">
          <el-button @click="SetAddRoomVisible">添加</el-button>
        </span>
        <el-container style="height: 540px;margin-top: -15px;border: 1px solid rgba(222,27,79,0);width: 725px;position: relative;left: 0px;">          <el-table
          border
          height="540"
          v-loading="roomloading"
          element-loading-text="努力加载中"
          @cell-mouse-enter="roommouseEnter"
          :data="roomList.slice((roompage.currentPage-1)*roompage.pageSize,roompage.currentPage*roompage.pageSize)"
        >
          <el-table-column label="序号" type="index" width="50">
            <template v-slot="scope">
              <!-- (当前页 - 1) * 当前显示数据条数 + 当前行数据的索引 + 1  -->
              <span>{{ (roompage.currentPage - 1) * roompage.pageSize + scope.$index + 1 }}</span>
            </template>
          </el-table-column>
          <el-table-column label="客房id" prop="id" min-width="20px"/>
          <el-table-column label="客房名" prop="name" min-width="50px"/>
          <el-table-column label="客房总数" prop="num_max" min-width="25px"/>
          <el-table-column label="可住人数" prop="size" min-width="25px"/>
          <el-table-column label="一晚价格" prop="price_r" min-width="25px"/>
          <el-table-column label="早餐价格" prop="price_b" min-width="25px"/>
          <el-table-column label="免费取消" prop="ifFreeCancle" min-width="20px"/>
          <el-table-column label="免费预订" prop="ifNoRequire" min-width="20px"/>
          <el-table-column label="操作" prop="operation" width="200">
            <template>
              <el-button
                type="text"
                icon="el-icon-edit"
                @click="SetSetRoomInformationVisible"
              >修改</el-button>
              <el-button
                type="text"
                icon="el-icon-edit"
                @click="SetShowRoomFacVisible"
              >客房设施</el-button>
              <el-button
                type="text"
                icon="el-icon-delete"
                style="color: red;"
                @click="deleteroom"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        </el-container>
        <div class="block">
          <el-pagination
            @current-change="roomhandleCurrentChange"
            background
            layout="total,prev, pager, next, jumper"
            :page-size=roompage.pageSize
            :total="roomList.length">
          </el-pagination>
        </div>
      </el-dialog>
      <el-dialog title="添加客房" :visible.sync="AddRoomVisible">
        <el-form label-width="100px" style="text-align: center;">
          <el-form-item label="客房id" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroom"><el-input v-model="addroom.id"></el-input></a>
          </el-form-item>
          <el-form-item label="客房名" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroom"><el-input v-model="addroom.name"></el-input></a>
          </el-form-item>
          <el-form-item label="客房总数" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroom"><el-input v-model="addroom.num_max"></el-input></a>
          </el-form-item>
          <el-form-item label="可住人数" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroom"><el-input v-model="addroom.size"></el-input></a>
          </el-form-item>
          <el-form-item label="一晚价格" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroom"><el-input v-model="addroom.price_r"></el-input></a>
          </el-form-item>
          <el-form-item label="早餐价格" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroom"><el-input v-model="addroom.price_b"></el-input></a>
          </el-form-item>
          <el-form-item label="免费取消" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroom"><el-input v-model="addroom.ifFreeCancle"></el-input></a>
          </el-form-item>
          <el-form-item label="无需预订" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroom"><el-input v-model="addroom.ifNoRequire"></el-input></a>
          </el-form-item>
          <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
            <el-button type="primary" @click="Addroom" style="width: 80%;">提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="修改客房" :visible.sync="SetRoomInformationVisible">
        <el-form label-width="100px" style="text-align: center;">
          <el-form-item label="客房名" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroom.name"><el-input v-model="addroom.name"></el-input></a>
          </el-form-item>
          <el-form-item label="客房总数" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroom.num_max"><el-input v-model="addroom.num_max"></el-input></a>
          </el-form-item>
          <el-form-item label="可住人数" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroom.size"><el-input v-model="addroom.size"></el-input></a>
          </el-form-item>
          <el-form-item label="一晚价格" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroom.price_r"><el-input v-model="addroom.price_r"></el-input></a>
          </el-form-item>
          <el-form-item label="早餐价格" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroom.price_b"><el-input v-model="addroom.price_b"></el-input></a>
          </el-form-item>
          <el-form-item label="免费取消" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroom.ifFreeCancle"><el-input v-model="addroom.ifFreeCancle"></el-input></a>
          </el-form-item>
          <el-form-item label="无需预订" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroom.ifNoRequire"><el-input v-model="addroom.ifNoRequire"></el-input></a>
          </el-form-item>
          <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
            <el-button type="primary" @click="updateroom" style="width: 80%;">提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="客房设施信息" :visible.sync="ShowRoomFacVisible">
        <span slot="title" class="title">
          <el-button @click="SetAddRoomFacVisible">添加</el-button>
        </span>
        <el-container style="height: 460px;margin-top: -15px;border: 1px solid rgba(222,27,79,0);width: 725px;position: relative;left: 0px;">          <el-table
          border
          height="450"
          v-loading="roomfacloading"
          element-loading-text="努力加载中"
          @cell-mouse-enter="roomfacmouseEnter"
          :data="roomfacList.slice((roomfacpage.currentPage-1)*roomfacpage.pageSize,roomfacpage.currentPage*roomfacpage.pageSize)"
        >
          <el-table-column label="序号" type="index" width="55">
            <template v-slot="scope">
              <!-- (当前页 - 1) * 当前显示数据条数 + 当前行数据的索引 + 1  -->
              <span>{{ (roomfacpage.currentPage - 1) * roomfacpage.pageSize + scope.$index + 1 }}</span>
            </template>
          </el-table-column>
          <el-table-column label="客房设施" prop="name" min-width="50px"/>
          <el-table-column label="操作" prop="operation" width="200">
            <template>
              <el-button
                type="text"
                icon="el-icon-edit"
                @click="SetSetRoomFacInformationVisible"
              >修改</el-button>
              <el-button
                type="text"
                icon="el-icon-delete"
                style="color: red;"
                @click="deleteroomfac"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        </el-container>
        <div class="block">
          <el-pagination
            @current-change="roomfachandleCurrentChange"
            background
            layout="total,prev, pager, next, jumper"
            :page-size=roomfacpage.pageSize
            :total="roomfacList.length">
          </el-pagination>
        </div>
      </el-dialog>
      <el-dialog title="添加客房设施" :visible.sync="AddRoomFacVisible">
        <el-form label-width="100px" style="text-align: center;">
          <el-form-item label="客房设施" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroomfac"><el-input v-model="addroomfac.name"></el-input></a>
          </el-form-item>
          <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
            <el-button type="primary" @click="Addroomfac" style="width: 80%;">提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="客房设施修改" :visible.sync="SetRoomFacInformationVisible">
        <el-form label-width="100px" style="text-align: center;">
          <el-form-item label="原酒店设施" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="chooseRoomFac"><el-input v-model="chooseRoomFac.name" :disabled=true></el-input></a>
          </el-form-item>
          <el-form-item label="新酒店设施" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <a v-if="addroomfac.name"><el-input v-model="addroomfac.name"></el-input></a>
          </el-form-item>
          <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
            <el-button type="primary" @click="updateroomfac" style="width: 80%;">提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-main>
        <el-container style="height: 460px;margin-top: -15px;border: 1px solid rgba(222,27,79,0);width: 1200px;position: relative;left: 0px;">
          <el-table
            border
            height="450"
            v-loading="loading"
            element-loading-text="努力加载中"
            @cell-mouse-enter="mouseEnter"
            :data="hotelList.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"
          >
            <el-table-column label="序号" type="index" width="55">
              <template v-slot="scope">
                <!-- (当前页 - 1) * 当前显示数据条数 + 当前行数据的索引 + 1  -->
                <span>{{ (page.currentPage - 1) * page.pageSize + scope.$index + 1 }}</span>
              </template>
            </el-table-column>
            <el-table-column label="id" prop="id" min-width="25px"/>
            <el-table-column label="酒店名" prop="name" min-width="50px"/>
            <el-table-column label="所在城市" prop="city" min-width="25px"/>
            <el-table-column label="所在地区" prop="location" min-width="25px"/>
            <el-table-column label="距中心距离" prop="distance" min-width="10px"/>
            <el-table-column label="酒店评分" prop="score" min-width="10px"/>
            <el-table-column label="酒店星级" prop="star" min-width="10px"/>
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
                  @click="deletehotel"
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
import vSidebar from './Sidebar_My.vue';
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
    roomfachandleCurrentChange(val) {
      console.log(`客房设施当前页: ${val}`);
      this.roomfacpage.currentPage = val
    },
    roomhandleCurrentChange(val) {
      console.log(`客房当前页: ${val}`);
      this.roompage.currentPage = val
    },
    hotelfachandleCurrentChange(val) {
      console.log(`酒店设施当前页: ${val}`);
      this.hotelfacpage.currentPage = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.currentPage = val
    },
    getByHotelId(){
      var _this = this
      if(this.id===null){
        this.getall()
        return
      }
      if(this.id===''){
        this.getall()
        return
      }
      switch (this.value){
        case '1':
          this.loading=true
          this.$axios
            .post('/hotel/searchById', {
              id: this.id
            })
            .then(successResponse => {
              if (successResponse.data.id !=null) {
                console.log('查询成功')
                this.hotelList=[]
                this.hotelList.push(successResponse.data)
                this.loading=false
              }
              else {
              }
            })
            .catch(failResponse => {
            })
          break
        case '2':
          this.loading=true
          this.$axios
            .post('/hotel/searchByName', {
              name: this.id
            })
            .then(successResponse => {
              if (successResponse.data !=null) {
                console.log('查询成功')
                this.hotelList=[]
                this.hotelList=successResponse.data
                this.loading=false
              }
              else {
              }
            })
            .catch(failResponse => {
            })
          break
        case '3':
          this.loading=true
          this.$axios
            .post('/hotel/searchByLocation', {
              location: this.id
            })
            .then(successResponse => {
              if (successResponse.data!=null) {
                console.log('查询成功')
                this.hotelList=[]
                this.hotelList=successResponse.data
                this.loading=false
              }
              else {
              }
            })
            .catch(failResponse => {
            })
          break
        case '4':
          this.loading=true
          this.$axios
            .post('/hotel/searchByScore', {
              score: this.id
            })
            .then(successResponse => {
              if (successResponse.data!=null) {
                console.log('查询成功')
                this.hotelList=[]
                this.hotelList=successResponse.data
                this.loading=false
              }
              else {
              }
            })
            .catch(failResponse => {
            })
          break
        case '5':
          this.loading=true
          this.$axios
            .post('/hotel/searchByStar', {
              star: this.id
            })
            .then(successResponse => {
              if (successResponse.data !=null) {
                console.log('查询成功')
                this.hotelList=[]
                this.hotelList=successResponse.data
                this.loading=false
              }
              else {
              }
            })
            .catch(failResponse => {
            })
          break
      }

    },
    SetAddInformationVisible(){
      this.AddInformationVisible=true
    },
    SetAddHotelFacVisible(){
      this.AddHotelFacVisible=true
    },
    SetAddRoomVisible(){
      this.AddRoomVisible=true
    },
    SetAddRoomFacVisible(){
      this.AddRoomFacVisible=true
    },
    SetShowRoomFacVisible(){
      this.ShowRoomFacVisible=true
      this.getallroomfac()
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
    Addhotelfac(){
      var _this = this
      if (this.addhotelfac.name === ''){
        // alert(this.registerForm.phone)
        this.$message({
          duration: 1000,
          showClose: true,
          message: '酒店设施名不能为空！',
          type: 'error'
        })
        return
      }
      this.$axios
        .post('/hotelFac/add', {
          id: this.chooseHotel.id,
          name: this.addhotelfac.name
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
            this.AddHotelFacVisible=false
            this.getallhotelfac()
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
    Addroom(){
      var _this = this
      if (this.addroom.name === ''){
        // alert(this.registerForm.phone)
        this.$message({
          duration: 1000,
          showClose: true,
          message: '客房名不能为空！',
          type: 'error'
        })
        return
      }
      this.$axios
        .post('/room/add', {
          hotelid: this.chooseHotel.id,
          id: this.addroom.id,
          name: this.addroom.name,
          num_max: this.addroom.num_max,
          size: this.addroom.size,
          price_r: this.addroom.price_r,
          price_b: this.addroom.price_b,
          ifFreeCancle: this.addroom.ifFreeCancle,
          ifNoRequire: this.addroom.ifNoRequire
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
            this.AddRoomVisible=false
            this.getallroom()
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
    Addroomfac(){
      var _this = this
      if (this.addroomfac.name === null){
        // alert(this.registerForm.phone)
        this.$message({
          duration: 1000,
          showClose: true,
          message: '客房设施名不能为空！',
          type: 'error'
        })
        return
      }
      this.$axios
        .post('/roomFac/add', {
          id: this.chooseRoom.id,
          hotelid: this.chooseHotel.id,
          name: this.addroomfac.name
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
            this.AddRoomFacVisible=false
            this.getallroomfac()
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
      this.id=null
      this.loading=true
      this.$axios
        .post('/hotel/searchById', {
          id: this.$store.state.user.hotel_id
        })
        .then(successResponse => {
          if (successResponse.data.id !=null) {
            console.log('查询成功')
            this.hotelList=[]
            this.hotelList.push(successResponse.data)
            this.loading=false
          }
          else {
          }
        })
        .catch(failResponse => {
        })
    },
    getallhotelfac(){
      var _this = this
      this.hotelfacloading=true
      this.$axios
        .post('/hotelFac/getByHotelId', {
          id: this.chooseHotel.id
        })
        .then(successResponse => {
          if (successResponse.data !=null) {
            this.hotelfacList=successResponse.data
            this.hotelfacloading=false
          }
          else {
            console.log('酒店设施查询失败')
          }
        })
        .catch(failResponse => {
        })
    },
    getallroom(){
      var _this = this
      this.roomloading=true
      this.$axios
        .post('/room/getRooms', {
          id: this.chooseHotel.id
        })
        .then(successResponse => {
          if (successResponse.data !=null) {
            console.log('查询成功')
            this.roomList=successResponse.data
            this.roomloading=false
          }
          else {
          }
        })
        .catch(failResponse => {
        })
    },
    getallroomfac(){
      var _this = this
      this.roomfacloading=true
      this.$axios
        .post('/roomFac/getByHotelAndRoomId', {
          id: this.chooseRoom.id,
          hotelid: this.chooseRoom.hotelid
        })
        .then(successResponse => {
          if (successResponse.data !=null) {
            console.log('查询成功')
            this.roomfacList=successResponse.data
            this.roomfacloading=false
          }
          else {
          }
        })
        .catch(failResponse => {
        })
    },
    deletehotel(){
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
    deletehotelfac(){
      this.$confirm('此操作将永久删除该酒店设施，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then((res) => {
        this.$axios
          .post('/hotelFac/delete', {
            id: this.chooseHotelFac.id,
            name: this.chooseHotelFac.name
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
              this.getallhotelfac()
            }
            else {
              this.$message({
                duration: 1000,
                showClose: true,
                type: 'error',
                message: '删除失败！'
              })
              this.getallhotelfac()
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
    deleteroom(){
      this.$confirm('此操作将永久删除该客房，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then((res) => {
        this.$axios
          .post('/room/delete', {
            hotelid: this.chooseHotel.id,
            id: this.chooseRoom.id
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
              this.getallroom()
            }
            else {
              this.$message({
                duration: 1000,
                showClose: true,
                type: 'error',
                message: '删除失败！'
              })
              this.getallroom()
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
    deleteroomfac(){
      this.$confirm('此操作将永久删除该客房设施，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then((res) => {
        this.$axios
          .post('/roomFac/delete', {
            id: this.chooseRoom.id,
            hotelid: this.chooseHotel.id,
            name: this.chooseRoomFac.name
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
              this.getallroomfac()
            }
            else {
              this.$message({
                duration: 1000,
                showClose: true,
                type: 'error',
                message: '删除失败！'
              })
              this.getallroomfac()
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
      this.ShowInformationVisible=true
      this.addhotel.name=this.chooseHotel.name
      this.addhotel.desciption=this.chooseHotel.desciption
      this.addhotel.distance=this.chooseHotel.distance
      this.addhotel.city=this.chooseHotel.city
      this.addhotel.location=this.chooseHotel.location
      this.addhotel.address=this.chooseHotel.address
      this.addhotel.score=this.chooseHotel.score
      this.addhotel.star=this.chooseHotel.star
      this.addhotel.img=this.chooseHotel.img
    },
    SetShowHotelFacVisible(){
      this.ShowHotelFacVisible = true
      this.getallhotelfac()
    },
    SetSetHotelFacInformationVisible(){
      this.SetHotelFacInformationVisible = true
      this.addhotelfac.name=this.chooseHotelFac.name
    },
    SetSetRoomInformationVisible(){
      this.SetRoomInformationVisible = true
      this.addroom.name=this.chooseRoom.name
      this.addroom.num_max=this.chooseRoom.num_max
      this.addroom.size=this.chooseRoom.size
      this.addroom.price_r=this.chooseRoom.price_r
      this.addroom.price_b=this.chooseRoom.price_b
      this.addroom.ifFreeCancle=this.chooseRoom.ifFreeCancle
      this.addroom.ifNoRequire=this.chooseRoom.ifNoRequire
    },
    SetSetRoomFacInformationVisible(){
      this.SetRoomFacInformationVisible = true
      this.addroomfac.name=this.chooseRoomFac.name
    },
    SetShowRoomVisible(){
      this.ShowRoomVisible = true
      this.getallroom()
    },
    updatehotel(){
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
    updatehotelfac(){
      var _this = this
      if (this.addhotelfac.name === ''){
        // alert(this.registerForm.phone)
        this.$message({
          duration: 1000,
          showClose: true,
          message: '酒店设施名不能为空！',
          type: 'error'
        })
        return
      }
      if (this.addhotelfac.name === this.chooseHotelFac.name){
        // alert(this.registerForm.phone)
        this.$message({
          duration: 1000,
          showClose: true,
          message: '酒店设施名不能和原有的重复！',
          type: 'error'
        })
        return
      }
      this.$axios
        .post('/hotelFac/update', {
          id: this.chooseHotel.id,
          name: this.chooseHotelFac.name,
          new_name: this.addhotelfac.name
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
            this.SetHotelFacInformationVisible=false
            this.getallhotelfac()
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
    updateroom(){
      var _this = this
      if (this.addroom.name === ''){
        // alert(this.registerForm.phone)
        this.$message({
          duration: 1000,
          showClose: true,
          message: '客房名不能为空！',
          type: 'error'
        })
        return
      }
      this.$axios
        .post('/room/update', {
          id: this.chooseRoom.id,
          hotelid: this.chooseHotel.id,
          name: this.addroom.name,
          size: this.addroom.size,
          num_max: this.addroom.num_max,
          price_r: this.addroom.price_r,
          price_b: this.addroom.price_b,
          ifFreeCancle: this.addroom.ifFreeCancle,
          ifNoRequire: this.addroom.ifNoRequire
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
            this.SetRoomInformationVisible=false
            this.getallroom()
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
    updateroomfac(){
      var _this = this
      if (this.addroomfac.name === ''){
        // alert(this.registerForm.phone)
        this.$message({
          duration: 1000,
          showClose: true,
          message: '客房设施名不能为空！',
          type: 'error'
        })
        return
      }
      if (this.addroomfac.name === this.chooseRoomFac.name){
        // alert(this.registerForm.phone)
        this.$message({
          duration: 1000,
          showClose: true,
          message: '客房设施名不能和原有的重复！',
          type: 'error'
        })
        return
      }
      this.$axios
        .post('/roomFac/update', {
          id: this.chooseRoom.id,
          hotelid: this.chooseHotel.id,
          name: this.chooseRoomFac.name,
          new_name: this.addroomfac.name
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
            this.SetRoomFacInformationVisible=false
            this.getallroomfac()
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
    },
    hotelfacmouseEnter (data) {
      this.chooseHotelFac = Object.assign({}, data)
    },
    roommouseEnter (data) {
      this.chooseRoom = Object.assign({}, data)
    },
    roomfacmouseEnter (data) {
      this.chooseRoomFac = Object.assign({}, data)
    }
  },
  data() {
    return {
      loading: true,
      hotelfacloading: true,
      roomloading: true,
      roomfacloading: true,
      id: null,
      hotelList: [],
      hotelfacList: [],
      roomList: [],
      roomfacList: [],
      chooseHotel: null,
      chooseHotelFac: null,
      chooseRoom: null,
      chooseRoomFac: null,
      AddInformationVisible: false,
      AddHotelFacVisible: false,
      AddRoomVisible: false,
      AddRoomFacVisible: false,
      ShowInformationVisible: false,
      ShowInformationIsDisabled: true,
      ShowHotelFacVisible: false,
      SetHotelFacInformationVisible: false,
      ShowRoomVisible: false,
      ShowRoomFacVisible: false,
      SetRoomInformationVisible: false,
      SetRoomFacInformationVisible: false,
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
      addhotelfac:{
        id: null,
        name: null
      },
      addroom:{
        id: null,
        name: null,
        num_max: null,
        size: null,
        price_r: null,
        price_b: null,
        ifFreeCancle: null,
        ifNoRequire: null
      },
      addroomfac:{
        id: null,
        hotelid: null,
        name: null
      },
      page: {
        currentPage: 1, // 当前页
        pageSize: 5, // 每页条数
      },
      hotelfacpage: {
        currentPage: 1, // 当前页
        pageSize: 6, // 每页条数
      },
      roompage: {
        currentPage: 1, // 当前页
        pageSize: 4, // 每页条数
      },
      roomfacpage: {
        currentPage: 1, // 当前页
        pageSize: 6, // 每页条数
      },
      options: [{
        value: '1',
        label: '酒店id'
      }, {
        value: '2',
        label: '酒店名'
      }, {
        value: '3',
        label: '地区'
      }, {
        value: '4',
        label: '评分'
      }, {
        value: '5',
        label: '星级'
      }],
      value: '1'
    }
  }
}
</script>

<style scoped>

</style>
