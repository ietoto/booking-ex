<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
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
                    icon: 'el-icon-lx-home',
                    index: 'dashboard',
                    menuName: '系统首页'
                },
                {
                    icon: 'el-icon-lx-cascades',
                    index: 'employee',
                    menuName: '员工管理'
                },
                {
                    icon: 'el-icon-lx-copy',
                    index: 'roomservice',
                    menuName: '客户服务'
                },
                {
                    icon: 'el-icon-lx-copy',
                    index: 'cropper',
                    menuName: '文件上传(可裁剪)'
                },
                {
                    icon: 'el-icon-lx-calendar',
                    index: 'room',
                    menuName: '客房管理'
                },
                {
                    icon: 'el-icon-s-shop',
                    index: 'searchroom',
                    menuName: '客房查询'
                },
                {
                    icon: 'el-icon-lx-emoji',
                    index: 'checkin',
                    menuName: '入住管理'
                },
                {
                    icon: 'el-icon-lx-global',
                    index: 'checkout',
                    menuName: '退房办理'
                },
                {
                    icon: 'el-icon-lx-redpacket_fill',
                    index: 'finance',
                    menuName: '财务管理'
                }
            ]
        };
    },
    computed: {//员工管理、客房管理、客房查询、入住管理、客户服务、财务管理
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
