---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  image:
    src: /logo.svg
    alt: 比卡logo图捏
  name: "卡比~ & My Blog"
  text: "记录一下我的笔记."
  tagline: 这是一个占位符~
  actions:
    - theme: brand
      text: 个人简历
      link: https://huyipu.top
    - theme: alt
      text: 笔记
      link: /neto


---

<!-- features:
  - title: Feature A
    icon: 🤖
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    icon: 🚀
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit -->

<div>{{conttt}}</div>


<script setup lang="ts">
import {ref,onMounted} from 'vue'
const conttt=ref('这是一个占位符~')

setTimeout(()=>{
  conttt.value='欢迎来到我的博客~'
},2000)

onMounted(()=>{
  setInterval(()=>{
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const time = `${year}年${month}月${day}日 ${hour}时${minute}分${second}秒`
    document.querySelector('.tagline')!.innerHTML = time
  },1000)
})
</script>

<style scoped>
  :root{
    --vp-c-indigo-1:'#567bf3'!important;
  }
</style>

