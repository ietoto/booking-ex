<template>
    <div class="facility-card">
        <div class="icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path :d="iconPath"></path>
            </svg>
        </div>
        <div>
            {{ facilityName }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'FacilityOtherCard',
    props: {
        iconPath: {
            type: String,
            required: true
        },
        facilityName: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.facility-card {
    display: flex;
    align-items: center;
}


.icon svg {
    
    margin-right: 10px;
    width: 20px;
    height: 20px;
}
</style>
