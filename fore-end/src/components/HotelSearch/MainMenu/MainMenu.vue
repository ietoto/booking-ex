<template>
 <div>
   <MenuTitle/>
 </div>
</template>

<script>
import MenuItem from './Menuitem.vue';
import MenuTitle from './MenuTitle.vue';
export default {
   name: 'MainMenu',
   components: {
       MenuItem,
         MenuTitle
   }
}
</script>

<style scoped>
</style>