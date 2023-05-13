<template>
    <div class="wrapper">
      <Navbar/>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}" style="padding-bottom:0">
            <div class="content" style="background-color: #fff;">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../home/Navbar/Navbar.vue'
import vSidebar from './Sidebar.vue';
export default {
    data() {
        return {
            tagsList: [],
            collapse: false
        };
    },
    components: {
        vSidebar
    }
};
</script>

