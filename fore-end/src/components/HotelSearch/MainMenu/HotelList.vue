<template>
    <div class="hotel-list">
        <PropertyCard />
    </div>
</template>

<script>
import PropertyCard from './HotelItem/PropertyCard.vue';
export default {
    name: 'HotelList',
    components: {
        PropertyCard
    }
}
</script>

<style>
.hotel-list {
    width: 80%;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
}
</style>