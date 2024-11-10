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
      text: html5
      link: /note/html5/html5/html5-概述.html
    - theme: alt
      text: css3
      link: /note/css3/css3/css3-概述.html
    - theme: alt
      text: es6
      link: /note/es6/es6/es6-概述.html
    - theme: alt
      text: vue3
      link: /note/vue3/vue/vue-概述.html
    - theme: alt
      text: react
      link: /note/react/react/react-介绍.html

features:
  - title: 「代码海洋的探险家：每日学习，永不止步」🚀
    icon: 📚
    link: /
    details: 我相信持续学习是保持技术领先的关键。无论新JavaScript框架还是UI/UX趋势，我都乐于探索。我将分享学习笔记、心得和编程技巧（主要是我记不住）。
  - title: 「餐桌上的艺术：用美食点亮生活的色彩」🎨
    icon: 🍽️
    link: /
    details: 美食！美食！美食！重要的事情说三遍~
  - title: 「灵魂的守护者：烧香拜佛，心灵宁静的港湾」🌊
    icon: 🙏
    link: /
    details: 在繁忙的生活中，找到心灵的宁静之源，保持一颗平和、感恩的心（持续性烧香拜佛）。
---

<Confetti />

<script setup lang="ts">
import {ref,onMounted} from 'vue'

const timerNum=ref(0)
const timer=ref(null)

onMounted(()=>{
  timer.value=setInterval(()=>{
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const time = `${year}年${month}月${day}日 ${hour}时${minute}分${second}秒`
    const dom = document.querySelector('.tagline')
    if(dom){
      dom.innerHTML = time
    }else{
      timerNum.value+=1
    if(timerNum.value>5){
      clearInterval(timer.value)
      timer.value=null
    }
    }
  },1000)
})
</script>

<style module>
  :root{
    --vp-c-indigo-1:'#567bf3'!important;
  }
</style>
