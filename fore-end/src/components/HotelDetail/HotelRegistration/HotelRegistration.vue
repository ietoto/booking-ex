<template>
    <div class="HotelRegistration">
        <RegistrationTitle />
    </div>
</template>

<script>
import RegistrationTitle from './RegistrationTitle.vue';
export default {
    name: 'HotelRegistration',
    components: {
        RegistrationTitle
    },

}
</script>

<style scoped>
.HotelRegistration {
    width: 80%;
    margin-left: 15%;
}
</style>