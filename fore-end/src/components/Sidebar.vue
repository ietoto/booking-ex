<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="rgba(82,156,235,0.6)"
            text-color="black"
            active-text-color="rgba(255,255,0)"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.menuName }}</span>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.menuName }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: 'el-icon-office-building',
                    index: 'user',
                    menuName: '个人信息'
                },
                {
                    icon: 'el-icon-s-custom',
                    index: 'myorder',
                    menuName: '我的订单'
                }
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
