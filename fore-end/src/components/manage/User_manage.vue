<template>
  <body id="poster">
  <Navbar/>
  <v-sidebar/>
  </body>
</template>

<script>
import Navbar from '../home/Navbar/Navbar.vue'
import vSidebar from './Sidebar.vue';
export default {
  name: "User_manage",
  components :{
    Navbar,
    vSidebar
  },
}
</script>

<style scoped>

</style>
