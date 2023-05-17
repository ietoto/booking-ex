<template>
    <div>
        <el-table class="RoomTable hovertable" :data="hotel.rooms"
            :header-cell-style="{ background: '#4c76b2', color: '#fff' }" :height="500" :span-method="spanMethod" border>
            <el-table-column prop="name" label="客房类型" width="300">
            </el-table-column>
            <el-table-column prop="num_max" label="客人数量" width="90">
                <template slot-scope="scope">
                    <i v-for="n in scope.row.size" :key="n" class="el-icon-user-solid"></i>
                </template>
            </el-table-column>
            <el-table-column prop="price_r" label="今日价格" width="90">
                <template slot-scope="scope">
                    <span>{{ '￥' + scope.row.price_r }}</span>
                </template>
            </el-table-column>
            <el-table-column label="预定须知" width="270">
                <template slot-scope="scope">
                    <span>{{ scope.row.ifFreeCancle ? '可取消' : '不可取消' }}</span>
                </template>
            </el-table-column>
            <el-table-column label="选择客房" width="140">
                <template slot-scope="scope">
                    <el-select v-model="scope.row.choicenum">
                        <el-option v-for="i in 5" :key="i" :label="i.toString()" :value="i">
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column>
                <template>
                    <el-button class="fixed-button">确认预定</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            hotel: {
                rooms: [{ "id": 1, "name": "豪华双床房", "hotelid": 5, "num_max": 20, "num_rec": 0, "num_ava": 0, "size": 2, "price_r": 733, "price_b": 119, "ifFreeCancle": 1, "ifNoRequire": 1, "facilities": ["保险箱", "冰箱", "地毯", "客厅角", "床头插座", "收音机", "无线网络", "无障碍通道", "晾衣架", "更衣室", "有线频道", "沙发", "洗手液", "清洁用品", "热水浴缸", "熨斗", "熨衣设备", "电烧水壶", "电视", "衣架", "衣柜/衣橱", "迷你吧", "隔音"] }, { "id": 2, "name": "双人间 - 带共用浴室", "hotelid": 5, "num_max": 20, "num_rec": 0, "num_ava": 0, "size": 2, "price_r": 752, "price_b": 119, "ifFreeCancle": 1, "ifNoRequire": 1, "facilities": ["唤醒服务/闹钟", "床头插座", "收音机", "无障碍通道", "晾衣架", "有线频道", "沏茶/咖啡设备", "洗手液", "清洁用品", "熨斗", "熨衣设备", "用餐区", "电烧水壶", "电视", "电话", "空调", "衣架", "连通间", "隔音", "餐桌"] }, { "id": 3, "name": "4床混合宿舍间的床位", "hotelid": 5, "num_max": 20, "num_rec": 0, "num_ava": 0, "size": 3, "price_r": 811, "price_b": 119, "ifFreeCancle": 1, "ifNoRequire": 1, "facilities": ["保险箱", "卫星频道", "唤醒服务/闹钟", "地毯", "客厅角", "床单", "床头插座", "收音机", "无线网络", "晾衣架", "沏茶/咖啡设备", "沙发", "清洁用品", "熨斗", "用餐区", "电梯直达", "电烧水壶", "电视", "电话", "空调", "隔音", "餐桌"] }, { "id": 4, "name": "4床混合宿舍间", "hotelid": 5, "num_max": 20, "num_rec": 0, "num_ava": 0, "size": 4, "price_r": 829, "price_b": 119, "ifFreeCancle": 1, "ifNoRequire": 1, "facilities": ["书桌", "保险箱", "冰箱", "床单", "床头插座", "收音机", "无障碍通道", "晾衣架", "更衣室", "有线频道", "沏茶/咖啡设备", "清洁用品", "熨斗", "熨衣设备", "用餐区", "电梯直达", "电烧水壶", "电视", "电话", "衣架", "连通间", "迷你吧", "餐桌"] }, { "id": 5, "name": "家庭间 - 带共用浴室", "hotelid": 5, "num_max": 20, "num_rec": 0, "num_ava": 0, "size": 3, "price_r": 719, "price_b": 119, "ifFreeCancle": 1, "ifNoRequire": 1, "facilities": ["保险箱", "冰箱", "卫星频道", "床单", "收音机", "无线网络", "有线频道", "沙发", "洗手液", "清洁用品", "熨斗", "熨衣设备", "用餐区", "电视", "电话", "衣架", "衣柜/衣橱", "迷你吧", "隔音", "餐桌"] }, { "id": 6, "name": "山景四人间", "hotelid": 5, "num_max": 20, "num_rec": 0, "num_ava": 0, "size": 4, "price_r": 732, "price_b": 119, "ifFreeCancle": 1, "ifNoRequire": 1, "facilities": ["书桌", "保险箱", "冰箱", "卫星频道", "地毯", "床单", "收音机", "无障碍通道", "有线频道", "沏茶/咖啡设备", "洗手液", "热水浴缸", "熨衣设备", "用餐区", "电烧水壶", "电视", "电话", "空调", "衣柜/衣橱", "迷你吧", "餐桌"] }], "facilities": ["24小时安保", "中文", "享有风景", "代客泊车", "住宿内咖啡店", "住宿外部闭路电视监控系统", "保险箱", "储物柜", "公共区域闭路电视监控系统", "公共浴池", "共用休息室/电视区", "办理私人登记入住/退房手续", "吸烟区", "在客房内享用早餐", "安全报警器", "客房服务", "室内游乐区", "家庭间", "干洗", "徒步活动", "快速办理入住/退房手续", "户外家具", "旅游咨询台", "无障碍停车场", "暖气", "每日客房打扫", "洗衣", "灭火器", "烟雾报警器", "熨衣服务", "班车服务", "禁烟客房", "租车服务", "空调", "羽毛球用品设施", "花园", "英语", "行李寄存", "街边停车场", "酒吧", "酒店各处禁烟", "野餐区", "钥匙进门", "阳光露台", "隔音", "隔音客房", "露台", "餐厅"] // 我们假设你已经从后端获取了hotel对象并设置了这个属性
            }
        }
    },
    created() {
        this.hotel.rooms.sort((a, b) => a.name.localeCompare(b.name));
        this.hotel.rooms.forEach(room => room.choicenum = 1);
    },
    methods: {
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
            if (columnIndex === 5) {
                if (rowIndex === 1) {
                    return [this.hotel.rooms.length - 1, 1]
                }
                else {
                    return [0, 0];
                }
            }
        },
    },
}
</script>
<style scoped>
.Roomtable {}

.fixed-button {
    bottom: 0;
    background-color: #0D47A1;
    margin: 0 10px 10px 0;
    width: 100%;
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
    font-size: large;
    text-align: center;
}

.price-header {
    background-color: #003580 !important;
    color: #fff !important;
}
</style>