<template>
    <div class="search-bar-wrapper">
        <div class="input-group guests">
            <el-popover v-model="isGuestsOpen" placement="bottom" trigger="click" popper-class="guests-popover"
                        width="300">
                <div class="guests-popover-content">
                    <div class="input-group adults">
                      <el-row>
                        <el-col :span="8"><label class="input-label" for="adults" style="font-size: 20px;transform: translateY(5px);">成人</label></el-col>
                        <el-col :span="12"><el-input-number v-model="adults" @change="handleAdultChange" :min="1"></el-input-number></el-col>
                      </el-row>
                    </div>
                    <div class="input-group children">
                      <el-row>
                        <el-col :span="8"><label class="input-label" for="children" style="font-size: 20px;transform: translateY(5px);">儿童</label></el-col>
                        <el-col :span="12"><el-input-number v-model="children" @change="handleChildrenChange" :min="0"></el-input-number></el-col>
                      </el-row>
                    </div>
                    <div class="input-group rooms">
                      <el-row>
                        <el-col :span="8"><label class="input-label" for="rooms" style="font-size: 20px;transform: translateY(5px);">客房</label></el-col>
                        <el-col :span="12"><el-input-number v-model="rooms" @change="handleRoomChange" :min="1"></el-input-number></el-col>
                      </el-row>
                    </div>
                </div>
                <template slot="reference">
                    <button class="toggle-button" :aria-expanded="isGuestsOpen">
                        <i class="el-icon-user"></i>
                        <span class="guests-count">
                            <span>{{ adults }}位成人</span>
                            <span v-if="showChildren">&nbsp;
                                {{ children }}名儿童</span>
                            <span>&nbsp;·&nbsp;{{ rooms }}间客房</span>
                        </span>
                    </button>
                </template>
            </el-popover>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            adults: 2,
            children: 0,
            childAges: [],
            rooms: 1,
            isGuestsOpen: false,
        };
    },
    computed: {
        showChildren() {
            return this.children >= 0;
        },
    },
    methods: {
        handleAdultChange(value) {
          this.adults = value;
          this.$emit('change', this.adults,this.children,this.rooms);
        },
        handleChildrenChange(value) {
          if (value > this.children) {
              this.$set(this.childAges, this.childAges.length, "");
          } else {
              this.childAges.pop();
          }
          this.children = value;
          this.$emit('change', this.adults,this.children,this.rooms);
        },

        handleRoomChange(value) {
          this.rooms = value;
          this.$emit('change', this.adults,this.children,this.rooms);
        },
    },
};
</script>

<style scoped>
.search-bar-wrapper {
    margin-top: 10px;
}

.input-group {
    margin-bottom: 10px;
    width: 100%
}

.input-label {
    display: inline-block;
    font-weight: bold;
    font-size: 14px;
    color: #333;
}

/* Enhanced button styling */
.toggle-button {
    background-color: #fff; /* 设置背景颜色与输入框一致 */
    color: #606266; /* 设置文字颜色与输入框一致 */
    border: 1px solid #DCDFE6; /* 设置边框样式与输入框一致 */
    padding: 10px 2px; /* 设置内部填充空间 */
    text-align: center;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
    transition: .1s;
    box-sizing: border-box;
    width:103%
}

/* Enhanced button hover and active states */
.toggle-button:hover {
    border-color: #C0C4CC; /* Lighter color when hovered */
}

.toggle-button:active {
    border-color: #909399; /* Darker color when active */
}


.guests-count {
    font-size: 14px;
    color: grey;
    margin-left: 10px;
}

.input-stepper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80px;
}

.subtract-button,
.add-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font-weight: bold;
}

.age-select {
    margin-top: 10px;
}

.guests-popover {
    margin-top: 10px;
}
.invisible-spoken{

}
.guests-popover-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.display-value {
    margin: 0 10px;
}
</style>
