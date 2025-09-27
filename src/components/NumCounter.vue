<template>
  <div class="p-6">
    <h1 class="text-2xl mb-4">当前计数：{{ count }}</h1>
    <button
      @click="inc"
      class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      :disabled="loading"
    >
      点我 +1
    </button>
    <p v-if="error" class="text-red-500 mt-2">发生错误：{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const count = ref(0)
const error = ref('')
const loading = ref(false)

onMounted(async () => {
  error.value = ''
  try {
    loading.value = true
    const response = await axios.get('http://localhost:64527/api/counter')
    count.value = response.data.count ?? 0
  } catch (error) {
    console.error('Error fetching counter:', error)
    error.value = '无法获取计数'
  } finally {
    loading.value = false
  }
})

async function inc() {
  error.value = ''
  try {
    loading.value = true
    const response = await axios.post('http://localhost:64527/api/counter/inc')
    count.value = response.data.count ?? 0
  } catch (error) {
    console.error('Error incrementing counter:', error)
    error.value = '无法增加计数'
  } finally {
    loading.value = false
  }
}
</script>


