<template>
    <div>
        <div>
            <el-row>
                <el-col :span="12" class="left">
                    <div class="reviewtitle">住客点评</div>
                </el-col>
                <el-col :span="12" class="right">
                    <el-button class="Reviewbutton" @click="scrollToRoomTable">
                        查看可预订空房
                    </el-button>
                </el-col>
            </el-row>
        </div>
        <div>
            <el-row>
                <el-col :span="6">
                    <div class="review-score-component">
                        <div class="score-wrapper">
                            <div class="score-value" aria-label="评分9.5">
                                {{ hotel.score.toFixed(1) }}
                            </div>
                        </div>
                        <div class="score-info">
                            <span>优异的</span>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="score-list">
            <div class="score-title">
                <span>单项评分：</span>
            </div>
            <el-row :gutter="20">
                <el-col v-for="item in scores" :key="item.id" :xs="24" :sm="12" :md="8">
                    <div class="score-item">
                        <el-row>
                            <el-col :span="12" class="left">
                                <span>{{ item.title }}</span>
                            </el-col>
                            <el-col :span="12" class="right">
                                <span>{{ item.score.toFixed(1) }}</span>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <el-progress :percentage="item.score * 10" :color="item.score > 9 ? '#008234' : '#003b95'"
                                    :show-text="false" :stroke-width="14"></el-progress>
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
            hotel: this.$store.state.hotel,
            scores: []
        }
    },
    created() {
        this.generateScores();
    },
    methods: {
        generateScores() {
            for (let i = 0; i < 6; i++) {
                const randomScore = (Math.random() * (10 - 7) + 7).toFixed(1);
                this.scores.push({
                    id: `R${i}i`,
                    title: this.getTitle(i),
                    score: parseFloat(randomScore)
                });
            }
        },
        getTitle(index) {
            const titles = ['员工素质', '设施/服务', '清洁程度', '舒适程度', '性价比', '位置'];
            return titles[index];
        },
        scrollToRoomTable() {
            const roomTableElement = document.querySelector('.roomtable');
            if (roomTableElement) {
                roomTableElement.scrollIntoView({ behavior: 'smooth' });
            }
        },
    },
}
</script>

<style scoped>
.review-score-component {
    display: flex;
    align-items: center;
}

.score-wrapper {
    background-color: #003b95;
    border-radius: 6px;
    padding: 10px;
    margin-right: 6px;
}

.score-value {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
}

.score-info {
    display: flex;
    flex-direction: row;
}

.score-description {
    font-size: 14px;
    font-weight: bold;
}

.score-count {
    font-size: 12px;
    color: #999999;
}

.Reviewbutton {
    bottom: 0;
    background-color: #0D47A1;
    margin: 0 10px 10px 0;
    color: #fff;
}

.Reviewbutton:hover {
    background-color: #409EFF;
    color: #fff;
}

.reviewtitle {
    font-family: Avenir Next, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
}

.left {
    margin-top: 20px;
    text-align: left;
}

.right {
    margin-top: 20px;
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
    width: 85%;
    /* 根据需要添加样式 */
}
</style>
