<template>
  <div style="margin: 0 auto;  font-family: 'Microsoft YaHei', Arial, sans-serif; width: 64%; text-align: left">
    <h2>大家都爱去</h2>
    <div class="button-group" style="margin-left: 1.3px">
      <button 
        v-for="type in types" 
        :key="type"
        class="tab"
        :class="{active: active === type}"
        @click="setActive(type)"
      >
        {{ getButtonTypeText(type) }}
      </button>
    </div>
    <hr style="border: 0.1px solid #0071C2; margin-top: 4px" />
    <DeginationData :v="active"></DeginationData>
  </div>
</template>

<script>
import DeginationData from './DeginationData'

export default {
  components: {
    DeginationData
  },
  data() {
    return {
      active: 'Regions',
      types: ['Regions', 'Cities', 'Place of interests'],
      buttonTexts: {
        Regions: '地区',
        Cities: '城市',
        'Place of interests': '景点'
      }
    }
  },
  methods: {
    setActive(type) {
      this.active = type
    },
    getButtonTypeText(type) {
      return this.buttonTexts[type]
    }
  }
}
</script>

<style scoped>
.tab {
  margin-right: 15px;
  font-size: 14px;
  background: transparent;
  border: none;
  outline: none;
  padding: 5px 10px;
  cursor: pointer;
  color: gray;
  transition: all ease-in-out .2s;
  border-bottom: 2px solid transparent;
}

.tab.active {
  background-color: #0071C2;
  color: white;
}

.button-group {
  display: flex;
}
</style>
