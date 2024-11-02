<template>
  <div class="last-updated" v-if="props?.time">
    <span>最后更新于: {{ props.time }}</span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  time: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.last-updated {
  display: flex;
  margin-bottom: -60px;
  justify-content: flex-end;
  padding: 16px 0;
  color: rgba(60, 60, 67, 0.78);
  font-weight: 500;
}
</style>
