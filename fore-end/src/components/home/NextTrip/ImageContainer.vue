<template>
    <div class="cont" :style="{ width: wide }">
        <div class="background" :style="{ backgroundImage: 'url(' + img + ')' }">
        </div>
        <div class="text">
            <slot></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        wide: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    }
}
</script>
  
<style scoped src="./image-container-styles.css"></style>
  