<template>
  <div>
    <div 
      v-if="data" 
      style="margin-top: -10px; display: grid; grid-gap: 20px; grid-template-columns: auto auto auto auto"
    >
      <div 
        v-for="el in data" 
        :key="el.name" 
        style="margin-bottom: -33px; padding: 0"
      >
        <p style="color: #4A9AD4; margin-bottom: -12px; fontSize: 15px">{{ el.name }}</p>
        <p style="color: #A5A5A5; fontSize: 14px">{{ el.properties }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import dbData from "@/assets/Degination.json";
export default {
  props: ['v'],
  data() {
    return {
      data: []
    }
  },
  watch: {
    v() {
      this.getData()
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      const data = dbData;

      if (this.v === 'Regions') {
        this.data = data[0].regions
      } else if (this.v === 'Cities') {
        this.data = data[0].cities
      } else {
        this.data = data[0].interests
      }
    }
  }
}
</script>
