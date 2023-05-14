<template>
    <div>
        <Navbar />
        <div>
            <div id="basiclayout" style="position:relative;" class="">
                <SearchAside />
                <MainMenu />
            </div>
        </div>
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
#basiclayout {
    clear: both;
    vertical-align: top;
    width: auto;
    margin: 0;
    overflow: visible;
    padding: 0 5px;
}
</style>