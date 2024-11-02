<script setup>
import DefaultTheme from "vitepress/theme";
import Footer from "../components/Footer/Footer.vue";
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <!-- 在侧边栏大纲之前插入自定义内容 -->
    <template #layout-bottom>
      <Footer />
    </template>
  </Layout>
</template>
