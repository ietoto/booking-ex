<template>
    <div>
        <Navbar />
            <SearchAside />
            <MainMenu />
        <FooterBlue />
    </div>
</template>

<script>
import SearchAside from './SearchAside/SearchAside.vue'
import MainMenu from './MainMenu/MainMenu.vue';
import Navbar from '../home/Navbar/Navbar.vue';
import FooterBlue from '../home/Footer/FooterBlue.vue';
import FooterWhite from '../home/Footer/FooterWhite.vue';
export default {
    name: "HotelSearch",
    components: {
        FooterBlue,
        FooterWhite,
        Navbar,
        MainMenu,
        SearchAside
    },
}
</script>

<style scoped>
</style>