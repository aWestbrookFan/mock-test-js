<template>
  <div>
    <section class="mock-section">
      <li v-for="(item, index) in mockTest" :key="index">
        {{ item.name }}
      </li>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Api_getUser from '../api/test.js'
let mockTest = reactive([])
Api_getUser().then((res) => {
  mockTest.push(... res.data.data.array)
})
</script>

<style scoped>
.mock-section{
    width: 500px;
    text-align: left;
    margin: 0 auto;
}
</style>
