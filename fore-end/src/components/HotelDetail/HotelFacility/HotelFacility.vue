<template>
    <div class="hotel-facility">
        <FacilityTitle />
        <FacilityContent />
    </div>
</template>

<script>
import FacilityTitle from './FacilityTitle.vue'
import FacilityContent from './FacilityContent.vue'
export default {
     name: 'HotelFacility',
     components: {
         FacilityTitle,
            FacilityContent
     }
}
</script>

<style scoped>
.hotel-facility {
    width: 80%;
    margin-left: 15%;
}
</style>