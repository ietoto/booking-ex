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
              <el-col :span="50">
                <el-form-item>
                  <el-button type="primary" icon="el-icon-edit" @click="setpassword">修改密码</el-button>
                  <el-button type="primary" icon="el-icon-plus" @click="SetInformation">修改信息</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-header>
        <el-main>
          <el-dialog title="密码修改" :visible.sync="SetPasswordVisible">
            <el-form label-width="100px" style="text-align: center;" :model="newpassword" status-icon :rules="rules" ref="newpassword">
              <el-form-item label="原始密码" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
                <a v-if="$store.state.user"><el-input v-model="$store.state.user.password" :disabled=true></el-input></a>
              </el-form-item>
              <el-form-item label="新密码" prop="newpassword" style="width: 80%;display: inline-block;position: relative;left: -50px;">
                <el-input v-model="newpassword"></el-input>
              </el-form-item>
              <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
                <el-button type="primary" @click="updatePassword('newpassword')" style="width: 80%;">提交</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <el-dialog title="信息" :visible.sync="SetInformationVisible">
            <el-form label-width="100px" style="text-align: center;" :model="newinformation" status-icon :rules="rules" ref="newinformation">
              <el-form-item label="姓名" prop="name" style="width: 80%;display: inline-block;position: relative;left: -50px;">
                <el-input v-model="newinformation.newname"></el-input>
              </el-form-item>
              <el-form-item label="电话" prop="phone" style="width: 80%;display: inline-block;position: relative;left: -50px;">
                <el-input v-model="newinformation.newphone"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="postbox" style="width: 80%;display: inline-block;position: relative;left: -50px;">
                <el-input v-model="newinformation.newpostbox"></el-input>
              </el-form-item>
              <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
                <el-button type="primary" @click="updateInformation('newinformation')" style="width: 80%;">提交</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <el-container style="height: 460px;margin-top: -15px;border: 1px solid rgba(222,27,79,0);width: 1200px;position: relative;left: 0px;">
            <el-descriptions class="margin-top" title="个人信息" :column="3" :data="user">
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-user"></i>
                  用户名
                </template>
                <a v-if="$store.state.user">{{ $store.state.user.username }}</a>
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-mobile-phone"></i>
                  手机号
                </template>
                <a v-if="$store.state.user">{{ $store.state.user.phone }}</a>
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-location-outline"></i>
                  姓名
                </template>
                <a v-if="$store.state.user">{{ $store.state.user.name }}</a>
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-tickets"></i>
                  密码
                </template>
                <a v-if="$store.state.user">{{ $store.state.user.password }}</a>
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-office-building"></i>
                  邮箱
                </template>
                <a v-if="$store.state.user">{{ $store.state.user.postbox }}</a>
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-office-building"></i>
                  身份
                </template>
                <a v-if="$store.state.user">
                  <a v-if="$store.state.user.state === 0">用户</a>
                  <a v-else-if="$store.state.user.state === 1">系统管理员</a>
                  <a v-else-if="$store.state.user.state === 2">酒店管理员</a>
                </a>
              </el-descriptions-item>
              <a v-if="$store.state.user"><a v-if="$store.state.user.state === 2">
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-office-building"></i>
                    管理的酒店
                  </template>
                  <a v-if="$store.state.user">{{ $store.state.user.hotel_id }}</a>
                </el-descriptions-item>
              </a>
              </a>
            </el-descriptions>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </body>
</template>

<script>
import Navbar from './home/Navbar/Navbar.vue'
import vSidebar from './Sidebar.vue';
export default {
  name: "user",
  components: {
    Navbar,
    vSidebar
  },
  mounted: function () {
    console.log('挂载开始')
    this.getuser()
  },
  methods: {
    updatePassworderror1() {
      this.$message({
        duration: 1000,
        showClose: true,
        message: '密码不能为空！',
        type: 'error'
      });
    },
    updatePassworderror2() {
      this.$message({
        duration: 1000,
        showClose: true,
        message: '密码冲突！',
        type: 'error'
      });
    },
    updatePassworderror3() {
      this.$message({
        duration: 1000,
        showClose: true,
        message: '密码不能和原密码一致！',
        type: 'error'
      });
    },
    updatePasswordright() {
      this.$message({
        duration: 1000,
        showClose: true,
        message: '密码修改成功！',
        type: 'success'
      });
    },
    updateInformationright(){
      this.$message({
        duration: 1000,
        showClose: true,
        message: '个人信息修改成功！',
        type: 'success'
      });
    },
    setpassword() {
      this.SetPasswordVisible = true
    },
    SetInformation() {
      this.SetInformationVisible = true
    },
    getuser() {
      console.log('getuser')
      var _this = this
      this.$axios
        .post('/user/login', {
          username: this.$store.state.user.username,
          password: this.$store.state.user.password
        })
        .then(successResponse => {
          if (successResponse.data.username != null) {
            this.user = successResponse.data
            this.newpassword = successResponse.data.password
            this.newinformation.newname = successResponse.data.name
            this.newinformation.newphone = successResponse.data.phone
            this.newinformation.newpostbox = successResponse.data.postbox
            if(!this.newpassword)this.newpassword=' '
            if(!this.newinformation.newname)this.newinformation.newname=''
            if(!this.newinformation.newphone)this.newinformation.newphone=''
            if(!this.newinformation.newpostbox)this.newinformation.newpostbox=''
            this.$store.commit("login",this.user)
          }
          else {
            var path = this.$route.query.redirect
            this.$router.replace({ path: path === '/' || path === undefined ? '/index' : path })
          }
        })
        .catch(failResponse => {
        })
    },
    updatePassword(formName){
      console.log('updatePassword')
      let valid1=true
      this.$refs[formName].validate((valid) => {
        if (valid) {
        } else {
          console.log('error submit!!');
          valid1=valid
        }
      });
      if(!valid1)return
      var _this = this
      if(this.newpassword===''){
        this.updatePassworderror1();
        return
      }
      if(this.newpassword===this.user.password){
        this.updatePassworderror3();
        return
      }
      this.$axios
        .post('/user/update', {
          username: this.$store.state.user.username,
          password: this.newpassword,
          id: this.$store.state.user.id,
          phone: this.$store.state.user.phone,
          name: this.$store.state.user.name,
          state: this.$store.state.user.state,
          postbox: this.$store.state.user.postbox,
          hotel_id: this.$store.state.user.hotel_id
        })
        .then(successResponse => {
          if (successResponse.data.username != null) {
            this.user = successResponse.data
            this.newpassword = successResponse.data.password
            _this.$store.commit('login', successResponse.data)
            this.updatePasswordright()
            this.SetPasswordVisible = false
          }
          else {
            this.updatePassworderror2();
          }
        })
        .catch(failResponse => {
        })
    },
    updateInformation(formName){
      console.log('updateInformation')
      let valid1=true
      this.$refs[formName].validate((valid) => {
        if (valid) {
        } else {
          console.log('error submit!!');
          valid1=valid
        }
      });
      if(!valid1)return
      var _this = this
      this.$axios
        .post('/user/update', {
          username: this.$store.state.user.username,
          password: this.$store.state.user.password,
          id: this.$store.state.user.id,
          phone: this.newinformation.newphone,
          name: this.newinformation.newname,
          state: this.user.state,
          postbox: this.newinformation.newpostbox,
          hotel_id: this.user.hotel_id
        })
        .then(successResponse => {
          if (successResponse.data.username != null) {
            this.user = successResponse.data
            this.newinformation.newphone = successResponse.data.phone
            this.newinformation.newname = successResponse.data.name
            this.newinformation.newpostbox = successResponse.data.postbox
            _this.$store.commit('login', successResponse.data)
            this.updateInformationright()
            this.SetInformationVisible = false
          }
          else {
          }
        })
        .catch(failResponse => {
        })
    }
  },
  data() {
    var valpassword = (rule, value, callback) => {
      var passwordreg = /(?=.*\d)(?=.*[a-zA-Z]).{6,16}/;
      value=this.newpassword
      if (value === '') {
        this.$message({
          duration: 1000,
          showClose: true,
          message: '请输入新密码！',
          type: 'error'
        });
        callback(new Error('请输入新密码'));
      } else if (!passwordreg.test(value)) {
        this.$message({
          duration: 3000,
          showClose: true,
          message: '密码必须包含数字和字母，长度在6到16个字符之间。',
          type: 'error'
        });
        callback(new Error('密码必须包含数字和字母，长度在6到16个字符之间。'));
      } else {
        callback();
      }
    };
    var valname = (rule, value, callback) => {
      var namereg = /^[\u4e00-\u9fa5]{2,5}$/;
      value=this.newinformation.newname
      if (value === '') {
        this.$message({
          duration: 1000,
          showClose: true,
          message: '请输入姓名！',
          type: 'error'
        });
        callback(new Error('请输入姓名'));
      } else if (!namereg.test(value)) {
        this.$message({
          duration: 3000,
          showClose: true,
          message: '姓名必须全为中文且长度在二到五之间',
          type: 'error'
        });
        callback(new Error('姓名必须全为中文且长度在二到五之间'));
      } else {
        callback();
      }
    };
    var valpostbox = (rule, value, callback) => {
      var postboxreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
      value=this.newinformation.newpostbox
      if (value === '') {
        this.$message({
          duration: 1000,
          showClose: true,
          message: '请输入邮箱！',
          type: 'error'
        });
        callback(new Error('请输入邮箱'));
      } else if (!postboxreg.test(value)) {
        this.$message({
          duration: 3000,
          showClose: true,
          message: '请满足邮箱的格式！',
          type: 'error'
        });
        callback(new Error('请满足邮箱的格式！'));
      } else {
        callback();
      }
    };
    var valphone = (rule, value, callback) => {
      var phonereg = /^1[3456789]\d{9}$/;
      value=this.newinformation.newphone
      if (value === '') {
        this.$message({
          duration: 1000,
          showClose: true,
          message: '请输入电话号码！',
          type: 'error'
        });
        callback(new Error('请输入电话号码'));
      } else if (!phonereg.test(value)) {
        this.$message({
          duration: 3000,
          showClose: true,
          message: '请满足电话号码的格式',
          type: 'error'
        });
        callback(new Error('请满足电话号码的格式'));
      } else {
        callback();
      }
    };
    return {
      user: null,
      SetPasswordVisible: false,
      SetInformationVisible: false,
      newinformation: {
        newpostbox: ' ',
        newphone: ' ',
        newname: ' '
      },
      newpassword: ' ',
      rules: {
        newpassword: [
          { validator: valpassword, trigger: 'blur' }
        ],
        name: [
          { validator: valname, trigger: 'blur' }
        ],
        postbox: [
          { validator: valpostbox, trigger: 'blur' }
        ],
        phone: [
          { validator: valphone, trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style scoped></style>
