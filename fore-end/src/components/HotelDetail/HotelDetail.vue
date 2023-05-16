<template>
    <div>
        <Navbar />
        <el-container>
            <el-aside >
                <SearchBar />
            </el-aside>
        </el-container>
        <FooterBlue />
    </div>
</template>

<script>
import Searchbar from '../HotelSearch/SearchAside/Searchbar.vue'
import SearchBar from '../home/Search/SearchPeople.vue';
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
        SearchBar
    }
}
</script>

<style></style>