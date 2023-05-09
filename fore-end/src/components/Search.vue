<template>
  <div>
    <div class="search-container">
    <input type="text" class="destination-input" placeholder="目的地" />
    <input type="date" class="date-input" placeholder="日期" />
    <input type="text" class="people-input" placeholder="人员情况" />
    <button class="search-button">搜索</button>
  </div>

  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  padding: 20px;
  margin-top: 30px;
  border-radius: 4px;
}

.destination-input,
.date-input,
.people-input {
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
}

.search-button {
  background-color: #187bcd;
  border: none;
  color: #fff;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #4799e6;
}
</style>
