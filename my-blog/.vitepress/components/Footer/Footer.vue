<template>
  <div class="footer-container">
    <div class="footer-container-text">
      本站总访问量
      <span id="busuanzi_value_site_pv" class="font-bold">--</span> 次
    </div>
    <span class="footer-container-text">
      本站访客数
      <span id="busuanzi_value_site_uv" class="font-bold">--</span> 人次
    </span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer-container {
  padding: 12px;
}
.footer-container {
  display: flex;
  justify-content: center;
  gap: 5em;
}

.footer-container .footer-container-text {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

@media (min-width: 768px) {
  .footer-container {
    gap: 10em;
    padding: 20px;
  }
}
</style>
