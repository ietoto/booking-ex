<template>
   <div>
    <el-card class="box-card" shadow="hover">
       <HotelShowTitle/>
         <HotelShowImg/>
    </el-card>
   </div>
</template>

<script>
import HotelShowTitle from './HotelShowTitle.vue';
import HotelShowImg from './HotelShowImg.vue';
export default {
    name: 'HotelShow',
    components: {
        HotelShowTitle,
        HotelShowImg
    },
}
</script>

<style scoped>
.box-card {
    width: 80%;
}

</style>