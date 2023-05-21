<template>
    <div>
        <el-table class="RoomTable hovertable" :data="hotel.rooms" @cell-mouse-enter="mouseEnter"
            :header-cell-style="{ background: '#4c76b2', color: '#fff' }" :height="500" :span-method="spanMethod" border>
            <el-table-column prop="name" label="客房类型" width="300">
                <template slot-scope="scope">
                    <div class="name">{{ scope.row.name }}</div>
                    <hr>
                    <div class="facility-container">
                        <div v-for="facility in scope.row.facilities" :key="facility" class="facility-item">
                            <i class="el-icon-check green-text"></i>
                            <span>{{ facility }}</span>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="num_max" label="客人数量" width="90">
                <template slot-scope="scope">
                    <i v-for="n in scope.row.size" :key="n" class="el-icon-user-solid"></i>
                </template>
            </el-table-column>
            <el-table-column prop="price_r" width="120">
                <template v-slot:header>
                    <div>今日价格</div>
                </template>
                <template slot-scope="scope">
                    <span class="price">{{ 'CNY ' + scope.row.price_r }}</span>
                    <p>不包含: 6%增值税、 10%住宿方服务费</p>
                </template>
            </el-table-column>
            <el-table-column label="预定须知" width="270">
                <template slot-scope="scope">
                    <div class="content-container">
                        <el-row>
                            <i v-if="scope.row.ifFreeCancle" class="el-icon-check"
                                :class="{ 'green-text': scope.row.ifFreeCancle }"></i>
                            <i v-else class="el-icon-close"></i>
                            <span :class="{ 'green-text': scope.row.ifFreeCancle }">{{ scope.row.ifFreeCancle ? '可免费取消' :
                                '不可免费取消' }}</span>
                        </el-row>
                        <el-row>
                            <i v-if="scope.row.ifNoRequire" class="el-icon-check"
                                :class="{ 'green-text': scope.row.ifNoRequire }"></i>
                            <i v-else class="el-icon-close"></i>
                            <span :class="{ 'green-text': scope.row.ifNoRequire }">{{ scope.row.ifNoRequire ? '无需预付-到店付款' :
                                '需预付' }}</span>
                        </el-row>
                        <el-row>
                            <i class="el-icon-coffee-cup green-text"></i>
                            <span class="green-text">含有早餐</span>
                        </el-row>
                        <el-row>
                            <span>
                                <svg fill="#004CB8" height="16" width="16" viewBox="0 0 24 24" role="presentation"
                                    aria-hidden="true" focusable="false">
                                    <path
                                        d="M.311 2.56v6.257a3.75 3.75 0 0 0 1.098 2.651l11.56 11.562a2.25 2.25 0 0 0 3.182 0l6.88-6.88a2.25 2.25 0 0 0 0-3.181L11.468 1.408A3.75 3.75 0 0 0 8.818.31H2.56a2.25 2.25 0 0 0-2.25 2.25zm1.5 0a.75.75 0 0 1 .75-.75h6.257a2.25 2.25 0 0 1 1.59.659l11.562 11.56a.75.75 0 0 1 0 1.06l-6.88 6.88a.75.75 0 0 1-1.06 0L2.47 10.409a2.25 2.25 0 0 1-.659-1.59V2.56zm5.25 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0z">
                                    </path>
                                </svg>
                            </span>
                            <svg class="bk-icon -genius-new_identity-genius_logo  genius-badge--baseline" height="10"
                                width="39" viewBox="0 0 503 128" role="presentation" aria-hidden="true" focusable="false">
                                <g clip-path="url(#clip0-2497)">
                                    <path
                                        d="M481.34 101.48C481.338 102.722 480.993 103.939 480.344 104.998C479.695 106.056 478.766 106.915 477.66 107.48C474.694 109.084 471.348 109.851 467.98 109.7C463.613 109.83 459.308 108.638 455.63 106.28C452.366 104.194 449.844 101.132 448.42 97.5299C447.75 95.8199 446.54 95.3599 444.82 96.1599L431.82 101.99C430 102.8 429.48 103.99 430.28 105.76C433.059 112.341 437.829 117.887 443.92 121.62C450.38 125.787 458.58 127.873 468.52 127.88C478.12 127.88 486.237 125.423 492.87 120.51C499.503 115.597 502.817 108.93 502.81 100.51C502.81 86.5565 492.98 77.9265 473.32 74.6199C468.617 73.9564 464.051 72.5382 459.8 70.4199C456.66 68.8699 453.08 66.8999 453.08 64.4999C453.08 62.4399 454.32 60.7999 456.77 59.6099C459.882 58.283 463.25 57.6681 466.63 57.8099C473.257 57.8099 479.03 60.3832 483.95 65.5299C485.31 66.8999 486.7 67.0699 488.06 66.0399L497.33 57.4699C498.92 56.2099 499.1 54.8299 497.84 53.3599C490.613 44.5199 480.027 40.1032 466.08 40.1099C456.14 40.1099 448.2 42.3665 442.26 46.8799C439.399 48.9679 437.092 51.7225 435.537 54.9046C433.983 58.0867 433.229 61.6001 433.34 65.1399C433.285 68.1652 433.893 71.1659 435.124 73.9303C436.354 76.6948 438.175 79.1558 440.46 81.1399C445.2 85.4265 451.627 88.3165 459.74 89.8099C467.74 91.2799 473.34 92.8799 476.55 94.5999C479.76 96.3199 481.34 98.6199 481.34 101.48Z"
                                        fill="#004CB8"></path>
                                    <path
                                        d="M346.84 94.6999C346.84 104.967 349.64 113.05 355.24 118.95C360.84 124.85 368.44 127.793 378.04 127.78C381.428 127.81 384.8 127.321 388.04 126.33C390.515 125.609 392.872 124.535 395.04 123.14C397.115 121.673 399.093 120.073 400.96 118.35L403.02 123.35C403.333 124.119 403.885 124.767 404.595 125.199C405.304 125.631 406.133 125.824 406.96 125.75H421.02C421.393 125.803 421.772 125.769 422.13 125.65C422.487 125.531 422.812 125.331 423.078 125.066C423.345 124.8 423.546 124.476 423.666 124.119C423.786 123.762 423.822 123.383 423.77 123.01V44.9999C423.823 44.6263 423.789 44.2454 423.67 43.8874C423.551 43.5293 423.35 43.204 423.083 42.9371C422.816 42.6702 422.491 42.4692 422.133 42.3499C421.774 42.2306 421.394 42.1964 421.02 42.2499H403.76C403.386 42.1947 403.004 42.2276 402.644 42.3461C402.285 42.4646 401.958 42.6654 401.69 42.9325C401.422 43.1996 401.22 43.5256 401.1 43.8845C400.98 44.2434 400.946 44.6254 401 44.9999V98.1199C396.653 104.4 390.94 107.543 383.86 107.55C379.4 107.55 375.94 106.123 373.48 103.27C371.02 100.417 369.8 96.6599 369.82 91.9999V44.9999C369.82 43.1699 368.82 42.2499 366.9 42.2499H349.75C347.81 42.2499 346.84 43.1699 346.84 44.9999V94.6999Z"
                                        fill="#004CB8"></path>
                                    <path
                                        d="M305.33 15.9999C305.304 18.1028 305.71 20.1887 306.522 22.1288C307.333 24.0689 308.534 25.822 310.05 27.2799C311.524 28.7747 313.28 29.9617 315.216 30.7719C317.153 31.5821 319.231 31.9993 321.33 31.9993C323.429 31.9993 325.507 31.5821 327.444 30.7719C329.38 29.9617 331.136 28.7747 332.61 27.2799C334.124 25.8205 335.323 24.0672 336.135 22.1274C336.947 20.1877 337.353 18.1025 337.33 15.9999C337.353 13.8973 336.947 11.8122 336.135 9.87241C335.323 7.93266 334.124 6.17928 332.61 4.71991C331.136 3.22509 329.38 2.03809 327.444 1.2279C325.507 0.417708 323.429 0.000488281 321.33 0.000488281C319.231 0.000488281 317.153 0.417708 315.216 1.2279C313.28 2.03809 311.524 3.22509 310.05 4.71991C308.534 6.17784 307.333 7.93095 306.522 9.87103C305.71 11.8111 305.304 13.897 305.33 15.9999V15.9999Z"
                                        fill="#FEBB02"></path>
                                    <path
                                        d="M295.83 70C295.83 60.5133 293.23 53.18 288.03 48C282.83 42.82 275.427 40.22 265.82 40.2C257.153 40.2 249.153 43.3999 241.82 49.7999L239.59 45C239.359 44.1991 238.856 43.5037 238.168 43.0329C237.48 42.5622 236.65 42.3455 235.82 42.4199H221.75C219.81 42.4199 218.84 43.3399 218.84 45.1699V123.17C218.84 125 219.84 125.91 221.75 125.91H238.9C240.85 125.91 241.82 125 241.82 123.17V69.8C243.849 67.2349 246.351 65.0827 249.19 63.4599C252.055 61.6102 255.38 60.5988 258.79 60.54C268.263 60.54 273 65.6933 273 76V123.15C273 123.877 273.289 124.574 273.802 125.087C274.316 125.601 275.013 125.89 275.74 125.89H293.06C293.789 125.89 294.489 125.6 295.005 125.084C295.52 124.569 295.81 123.869 295.81 123.14L295.83 70Z"
                                        fill="#004CB8"></path>
                                    <path
                                        d="M208.6 87.4299C208.654 87.8022 208.62 88.1818 208.501 88.5387C208.382 88.8956 208.182 89.2198 207.916 89.4858C207.65 89.7517 207.326 89.952 206.969 90.0708C206.612 90.1895 206.232 90.2235 205.86 90.1699H146.86C147.923 95.0897 150.538 99.538 154.32 102.86C158.04 106.06 162.76 107.66 168.48 107.66C176.247 107.66 182.187 104.46 186.3 98.0599C186.99 97.0599 188.07 96.8599 189.56 97.5399L204.31 103.72C206.01 104.28 206.42 105.31 205.5 106.8C197.16 120.86 184.827 127.89 168.5 127.89C156.147 127.89 145.653 123.777 137.02 115.55C128.387 107.323 124.07 96.8066 124.07 83.9999C124.07 71.1999 128.357 60.6833 136.93 52.4499C140.918 48.4837 145.655 45.3501 150.866 43.2316C156.076 41.1131 161.656 40.052 167.28 40.1099C180.2 40.1099 190.317 44.0832 197.63 52.0299C204.943 59.9766 208.61 69.9466 208.63 81.9399L208.6 87.4299ZM180.15 63.5099C176.409 60.8135 171.891 59.4093 167.28 59.5099C162.764 59.3452 158.324 60.7009 154.67 63.3599C151.317 65.9086 148.785 69.3857 147.39 73.3599H186.82C185.937 69.3451 183.55 65.8206 180.15 63.5099Z"
                                        fill="#004CB8"></path>
                                    <path
                                        d="M114.67 108.44C114.671 109.243 114.491 110.037 114.145 110.762C113.799 111.487 113.295 112.125 112.67 112.63C100.004 122.585 84.3397 127.956 68.23 127.87C30.57 127.87 0 99.4599 0 64.4699C0 29.4799 30.57 0.129904 68.24 0.129904C84.3159 0.0447155 99.9448 5.41771 112.57 15.3699C112.853 15.5863 113.087 15.8588 113.259 16.1703C113.431 16.4818 113.537 16.8256 113.57 17.1799C113.611 17.5366 113.579 17.8979 113.476 18.2417C113.373 18.5856 113.201 18.9049 112.97 19.1799C109.97 22.8299 103.59 30.4399 100.46 34.1799C100.235 34.4673 99.9522 34.7046 99.6303 34.8767C99.3083 35.0489 98.954 35.1521 98.59 35.1799C98.2309 35.2111 97.8691 35.1706 97.5257 35.0607C97.1824 34.9508 96.8643 34.7738 96.59 34.5399C88.6472 27.8857 78.6017 24.2643 68.24 24.3199C44.93 24.3199 26 42.8299 26 64.4699C26 86.1099 44.9 103.7 68.21 103.7C76.8383 103.736 85.2888 101.247 92.52 96.5399V78.9999H72.52C71.7995 79.0018 71.1069 78.7218 70.59 78.2199C70.0903 77.7048 69.8076 77.0175 69.8 76.2999V59.2999C69.8055 58.5819 70.0886 57.8939 70.59 57.3799C71.111 56.883 71.8002 56.6009 72.52 56.5899H112C112.719 56.5925 113.408 56.8786 113.917 57.3859C114.426 57.8933 114.715 58.5811 114.72 59.2999L114.67 108.44Z"
                                        fill="#004CB8"></path>
                                    <path
                                        d="M320.71 42.1499H312.07C311.343 42.1499 310.646 42.4386 310.133 42.9524C309.619 43.4663 309.33 44.1632 309.33 44.8899V123.11C309.33 123.837 309.619 124.534 310.133 125.047C310.646 125.561 311.343 125.85 312.07 125.85H330.59C330.95 125.851 331.307 125.781 331.64 125.644C331.973 125.507 332.276 125.305 332.53 125.05C332.785 124.796 332.987 124.493 333.124 124.16C333.261 123.827 333.331 123.47 333.33 123.11V54.8799C333.33 46.2999 329.22 42.1499 320.71 42.1499Z"
                                        fill="#004CB8"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0-2497">
                                        <rect width="502.78" height="127.89" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            优惠享不停
                        </el-row>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="选择客房" width="140">
                <template slot-scope="scope">
                    <el-select v-model="scope.row.num_rec" @change="handleRoomSelection(scope.row)">
                        <el-option v-for="i in 6" :key="i" :label="(i - 1).toString()" :value="(i - 1)">
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column>
                <template>
                    <div class="container">
                        <el-button class="fixed-button" @click="goOrder">确认预定</el-button>
                    </div>
                    <div class="container2">
                        <div class="check">
                            <i class="el-icon-check green-text"></i>
                            <span class="green-text">立即确认</span>
                        </div>
                        <div class="check">
                            <i class="el-icon-check green-text"></i>
                            <span class="green-text">不收任何手续费或信用卡手续费</span>
                        </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
          hotel: this.$store.state.hotel,
          chooseRoom: null
        }
    },
    created() {
        this.hotel.rooms.sort((a, b) => a.name.localeCompare(b.name));
        this.hotel.rooms.forEach(room => room.choicenum = 1);
    },
    methods: {
      goOrder(){
        this.$axios
          .post('/order/req', {
            userid: this.$store.state.user.id,
            hotelid: this.$store.state.hotel.id,
            roomid: this.chooseRoom.id,
            num: this.chooseRoom.num_rec,
            money: this.chooseRoom.price_r+this.chooseRoom.price_b,
            startdate: this.$store.state.search.startdate,
            enddate: this.$store.state.search.enddate,
            state: 0
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
              this.$router.push('/myorder');
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
      mouseEnter(data) {
        this.chooseRoom = Object.assign({}, data)
      },
        spanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex > 0 && this.hotel.rooms[rowIndex].name === this.hotel.rooms[rowIndex - 1].name) {
                    return [0, 0];
                }
                let rowspan = 1;
                while (rowIndex + rowspan < this.hotel.rooms.length && this.hotel.rooms[rowIndex].name === this.hotel.rooms[rowIndex + rowspan].name) {
                    rowspan++;
                }
                return [rowspan, 1];
            }
        },
    },
}
</script>
<style scoped>


.container2 {
    display: flex;
    flex-direction: column;
    margin-left: 25%;
}

.container {
    display: grid;
    justify-items: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
}

.el-table .whole-header {
    background-color: red;
    /* 你想要的颜色 */
}

.header-price {
    background-color: #003580;
    /* 你需要的颜色 */
}

.green-text {
    color: green;
}

.content-container {
    display: flex;
    flex-direction: column;
}

.facility-container {
    display: flex;
    flex-wrap: wrap;
}

.facility-item {
    margin-right: 10px;
}

.name {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #409EFF
}

.price {
    vertical-align: middle;
    font-weight: bold;
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}

.fixed-button {
    bottom: 0;
    background-color: #0D47A1;
    margin: 0 10px 10px 0;
    width: 50%;
    color: #fff;
}

.fixed-button:hover {
    background-color: #409EFF;
    color: #fff;
}

.fixed-button-container {
    position: sticky;
    bottom: 0;
}

.custom-table-header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background: #4c76b2;
    color: #fff;
}

.header-item {
    color: #003580;
}

.price-header {
    background-color: #003580 !important;
    color: #fff !important;
}
</style>
