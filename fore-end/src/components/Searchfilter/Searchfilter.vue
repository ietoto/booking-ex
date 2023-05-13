<template>
    <div>
        <Navbar/>
        <FooterBlue/>
    </div>
</template>

<script>
import Navbar from '../home/Navbar/Navbar.vue';
import FooterBlue from '../home/Footer/FooterBlue.vue';
import FooterWhite from '../home/Footer/FooterWhite.vue';
export default {
   name: "SearchFilter",
   components: {
      FooterBlue,
      FooterWhite,
      Navbar
   },
}
</script>

<style>

</style>