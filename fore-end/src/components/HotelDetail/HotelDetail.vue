<template>
    <div>
        <Navbar />
        <el-container>
            <el-aside width="20%" class="searchbar">
                <Searchbar />
            </el-aside>
            <el-main>
                
            </el-main>
        </el-container>
        <FooterBlue />
    </div>
</template>

<script>
import Searchbar from '../HotelSearch/SearchAside/Searchbar.vue'
import Navbar from '../home/Navbar/Navbar.vue'
import FooterBlue from '../home/Footer/FooterBlue.vue'
import FooterWhite from '../home/Footer/FooterWhite.vue';
export default {
    name: 'HotelDetail',
    components: {
        Navbar,
        FooterBlue,
        FooterWhite,
        Searchbar,
    }
}
</script>

<style scoped>
.searchbar {
    width: 20% !important;
    padding: 0 !important;
    margin-top: 0;
    font-size: 88%;
    margin-bottom: 1em;
    font-style: normal;
    float: left;
    margin-left: 18%;
}
</style>