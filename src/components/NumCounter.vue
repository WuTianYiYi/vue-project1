<template>
  <!-- 先放占位，后续再写真正内容 -->
  <div>NumCounter 组件加载成功</div>
  <div>
    <p v-if="loading">加载中…</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else>当前计数：{{ count }}</p>

    <!-- 按钮必须写在 template 里，且大小写、引号都要对 -->
    <button @click="inc">+1</button>
    <button @click="dec">-1</button>

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
    const { data } = await axios.get<{ count: number }>('https://my-api.15329444365-788.workers.dev/api/counter')
    count.value = data.count ?? 0
  } catch (err: unknown) {
    console.error('Error fetching counter:', err)
    error.value = axios.isAxiosError(err)
      ? err.response?.data?.message || '无法获取计数'
      : '无法获取计数'
  } finally {
    loading.value = false
  }
})

async function inc() {
  error.value = ''
  try {
    loading.value = true
    const { data } = await axios.post<{ count: number }>('https://my-api.15329444365-788.workers.dev/api/counter/inc')
    count.value = data.count ?? 0
  } catch (err: unknown) {
    console.error('Error incrementing counter:', err)
    error.value = axios.isAxiosError(err)
      ? err.response?.data?.message || '无法增加计数'
      : '无法增加计数'
  } finally {
    loading.value = false
  }
}

async function dec() {
  error.value = ''
  try {
    loading.value = true
    const { data } = await axios.post<{ count: number }>('https://my-api.15329444365-788.workers.dev/api/counter/dec')
    count.value = data.count ?? 0
  } catch (err: unknown) {
    console.error('Error decrementing counter:', err)
    error.value = axios.isAxiosError(err)
      ? err.response?.data?.message || '无法减少计数'
      : '无法减少计数'
  } finally {
    loading.value = false
  }
}


// 先占坑，模板写完再删
void inc

</script>
