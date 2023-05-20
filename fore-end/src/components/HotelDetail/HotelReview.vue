<template>
    <div>
        <el-col :span="12" class="left">
            <div class="reviewtitle">住客点评</div>
        </el-col>
        <el-col :span="12" class="right">
            <el-button type="button">
                <span>查看可预订空房</span>
            </el-button>
        </el-col>
        <div class="score-list">
            <div class="score-title">
                <span>单项评分：</span>
            </div>
            <el-row :gutter="20">
                <el-col v-for="(item, index) in scores" :key="item.id" :xs="24" :sm="12" :md="8">
                    <div class="score-item">
                        <el-row>
                            <el-col :span="12" class="left">
                                <span>{{ item.title }}</span>
                            </el-col>
                            <el-col :span="12" class="right">
                                <span>{{ item.score }}</span>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <el-progress :percentage="item.score * 10" color="#003b95" :show-text="false"
                                    :stroke-width="14"></el-progress>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            scores: [
                { id: 'R9i', title: '员工素质', score: 8.8 },
                { id: 'Rai', title: '设施/服务', score: 8.8 },
                { id: 'Rbi', title: '清洁程度', score: 8.8 },
                { id: 'Rci', title: '舒适程度', score: 8.8 },
                { id: 'Rdi', title: '性价比', score: 8.8 },
                { id: 'Rei', title: '位置', score: 7.5 }
            ]
        }
    }
}
</script>
  
<style scoped>
.reviewtitle {
    font-family: Avenir Next, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
}

.left {
    text-align: left;
}

.right {
    text-align: right;
}

.score-list {
    margin-top: 30px;
    /* 根据需要添加样式 */
}

.score-title {
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    /* 根据需要添加样式 */
}

.score-item {
    margin-top: 20px;
    width: 80%;
    /* 根据需要添加样式 */
}
</style>
  