<template>
    <div class="HotelRegistration">
        <RegistrationTitle />
        <RegistrationContent />    
    </div>
</template>

<script>
import RegistrationContent from './RegistrationContent.vue';
import RegistrationTitle from './RegistrationTitle.vue';
export default {
    name: 'HotelRegistration',
    components: {
        RegistrationTitle,
        RegistrationContent
    },

}
</script>

<style scoped>
.HotelRegistration {
    width: 80%;
    margin-left: 15%;
}
</style>