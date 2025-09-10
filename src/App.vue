<template>
  <div class="box">
    <div class="investment-accounting">
      <div class="title">Investment Accounting</div>

      <!-- 输入框区域 -->
      <div class="form">
        <input v-model="value" class="add" type="text" placeholder="add" @keyup.enter="add" />
        <div @click="add" class="button">to do</div>
      </div>

      <!-- 列表滚动容器 -->
      <div class="list-container">
        <div v-for="item in list" :key="item._id" :class="[item.isCompleted ? 'completed' : 'item']">
          <div>
            <input v-model="item.isCompleted" type="checkbox" aria-label="wss" />
            <span class="name">{{ item.value }}</span>
          </div>
          <div @click="del(item._id)" class="del">del</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'


getList()

const value = ref('')
const list = ref([])

async function getList() {
  const res = await axios({
    url: "https://l4lgh38aty.bja.sealos.run/Get",
    method: "GET"

  })

  list.value = res.data.list.reverse()
  console.log(list.value)
}

async function add() {
if (!value.value?.trim()) return;


  await axios({
    url: 'https://l4lgh38aty.bja.sealos.run/Add',
    method: 'POST',
    data: {
      value: value.value,
      isCompleted: false,
    },
  })
  getList()
  value.value = ''


}

async function update(id) {
  await axios({
    url: 'https://l4lgh38aty.bja.sealos.run/Updata',
    method: 'POST',
    data: {
      id
    }
  })
  getList()
}

async function del(id) {
  await axios({
    url: 'https://l4lgh38aty.bja.sealos.run/Del',
    method: 'POST',
    data: {
      id: id,
    }
  })
  getList()
}

/*async function add1() {
  if (!str.value.trim()) return
  list.value.unshift({
    id: crypto.randomUUID(),
    iscompleted: false,
    text: str.value.trim()
  })
  str.value = ''
  await nextTick()
  listBox.value.scrollTop = 0
}*/


</script>

<style>
/* 全局清零 */
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
</style>

<style scoped>
/* 滚动列表区域 */
.list-container {
  flex: 1;              /* 占满剩余高度 */
  overflow-y: auto;     /* 超出自身才滚 */
}


/* 已完成样式 */
.completed {
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 40px;
  margin: 8px auto;
  padding: 16px;
  border-radius: 20px;
  box-shadow: rgba(150, 150, 150, 0.2) 0 8px 20px;
  text-decoration: line-through;
  opacity: 0.4;
}

/* 未完成样式 */
.item {
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 40px;
  margin: 8px auto;
  padding: 16px;
  border-radius: 20px;
  box-shadow: rgba(150, 150, 150, 0.2) 0 8px 20px;
}

.item span {
  transform: translateY(-0.65px);
  display: inline-block;
}

/* 删除按钮 */
.del {
  color: red;
  cursor: pointer;
}

/* 输入框 */
.add {
  margin-bottom: 30px;
  border: 1px solid rgb(205, 221, 236);
  border-radius: 20px 0 0 20px;
  outline: none;
  width: 60%;
  height: 50px;
  padding-left: 30px;
}

/* 添加按钮 */
.button {
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 0 20px 20px 0;
  background: linear-gradient(to right, #1aff05, #4f8db6);
  color: #fff;
  cursor: pointer;
  user-select: none;
}

/* 输入框区域 */
.form {
  display: flex;
  justify-content: center;
  padding: 10px;
}

/* 标题 */
.title {
  color: #000;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
}

/* 白卡片 */
.investment-accounting {
  width: 96vw;
  height: 77vh;
  background-color: #fff;
  border-radius: 10px;
  padding-top: 30px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 全屏背景 */
.box {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #4ecc4a, #5fd4d8);
  display: flex;
  justify-content: center;
}
</style>
