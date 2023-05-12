<template>
    <div class="search-bar-wrapper">
        <div class="input-group guests">
            <label class="input-label" for="guests-toggle">客房数量和入住人数</label>
            <el-popover v-model="isGuestsOpen" placement="bottom" trigger="click" popper-class="guests-popover"
                width="300px">
                <div class="guests-popover-content">
                    <div class="input-group adults">
                        <label class="input-label" for="adults">成人</label>
                        <div class="input-stepper">
                            <el-button class="subtract-button" :disabled="adults === 1" @click="decrementAdults"
                                aria-label="减少成人数量" size="mini">−</el-button>
                            <span class="display-value">{{ adults }}</span>
                            <el-button class="add-button" @click="incrementAdults" aria-label="增加成人数量"
                                size="mini">+</el-button>
                        </div>
                    </div>
                    <div class="input-group children">
                        <label class="input-label" for="children">儿童</label>
                        <div class="input-stepper">
                            <el-button class="subtract-button" :disabled="children === 0" @click="decrementChildren"
                                aria-label="减少儿童数量" size="mini">−</el-button>
                            <span class="display-value">{{ children }}</span>
                            <el-button class="add-button" @click="incrementChildren" aria-label="增加儿童数量"
                                size="mini">+</el-button>
                        </div>
                        <div v-for="(age, index) in childAges" :key="index" class="age-select">
                            <el-select v-model="childAges[index]" aria-label="儿童年龄" :key="'childAge' + index" size="mini">
                                <el-option value="">需提供儿童年龄</el-option>
                                <el-option v-for="i in 17" :value="i" :key="i">{{ i }}岁</el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="input-group rooms">
                        <label class="input-label" for="rooms">客房</label>
                        <div class="input-stepper">
                            <el-button class="subtract-button" :disabled="rooms === 1" @click="decrementRooms"
                                aria-label="减少客房数量" size="mini">−</el-button>
                            <span class="display-value">{{ rooms }}</span>
                            <el-button class="add-button" @click="incrementRooms" aria-label="增加客房数量"
                                size="mini">+</el-button>
                        </div>
                    </div>
                </div>
                <template slot="reference">
                    <button class="toggle-button" :aria-expanded="isGuestsOpen">
                        <span class="invisible-spoken">客房数量和入住人数</span>
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
            children: 3,
            childAges: [],
            rooms: 1,
            isGuestsOpen: false,
        };
    },
    computed: {
        showChildren() {
            return this.children > 0;
        },
    },
    methods: {
        toggleGuests() {
            this.isGuestsOpen = !this.isGuestsOpen;
        },
        incrementAdults() {
            this.adults++;
        },
        decrementAdults() {
            if (this.adults > 1) {
                this.adults--;
            }
        },
        incrementChildren() {
            this.children++;
            this.childAges.push("");
        },
        decrementChildren() {
            if (this.children > 0) {
                this.children--;
                this.childAges.pop();
            }
        },
        incrementRooms() {
            this.rooms++;
        },
        decrementRooms() {
            if (this.rooms > 1) {
                this.rooms--;
            }
        },
    },
};
</script>
<style scoped>
.search-bar-wrapper {
    margin-bottom: 20px;
    width: 100%;
}

.input-group {
    margin-bottom: 10px;
}

.input-label {
    font-weight: bold;
    font-size: 14px;
    color: #333;
}

/* Enhanced button styling */
.toggle-button {
    background-color: #f0b90b; /* Modify background color */
    color: #ffffff; /* Modify text color */
    border: none;
    padding: 10px 20px; /* Increase padding to enlarge button size */
    text-align: center;
    display: inline-block;
    font-size: 16px;
    transition: all 0.4s ease; /* Add transition effect */
    cursor: pointer;
    border-radius: 5px; /* Add rounded corners */
}

/* Enhanced button hover and active states */
.toggle-button:hover,
.toggle-button:focus {
    background-color: #d6a00b; /* Darken the button color slightly when hovered or focused */
    color: #ffffff;
}

.guests-count {
    font-weight: bold;
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

.guests-popover-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.display-value {
    margin: 0 10px;
}
</style>
