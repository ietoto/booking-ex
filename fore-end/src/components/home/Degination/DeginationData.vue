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
  import axios from 'axios'
  
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
        axios.get("https://manishsinghbhadouria.github.io/api/db.json").then((response) => {
          if (this.v === '地区') {
            this.data = response.data[0].regions
          } else if (this.v === '城市') {
            this.data = response.data[0].cities
          } else {
            this.data = response.data[0].interests
          }
        })
      }
    }
  }
  </script>
  