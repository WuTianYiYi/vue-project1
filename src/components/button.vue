<script setup>
import { defineProps } from 'vue';

const props = defineProps(['text'])
</script>
    
<template>
    <div class="button">{{ props.text }}</div>
</template>

<style scoped>
.button{
    margin: 100px 0 0 200px;
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: bisque;
    border-radius: 10PX;
}
</style>