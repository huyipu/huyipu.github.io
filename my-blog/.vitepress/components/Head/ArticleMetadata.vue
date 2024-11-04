<template>
  <div class="word">
    <p>
      <svg
        t="1730721538773"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="10827"
        width="16"
        height="16"
      >
        <path
          d="M92.462393 85.290365A85.290236 85.290236 0 0 1 177.881856 0.000129h501.920116l251.735423 255.999936v683.614163a84.385643 84.385643 0 0 1-84.51487 84.385643H176.977263A84.51487 84.51487 0 0 1 92.462393 939.485001V85.290365z"
          fill="#F5617F"
          p-id="10828"
        ></path>
        <path
          d="M931.537395 256.000065H764.44607a85.290236 85.290236 0 0 1-85.161009-85.290236V0.000129l251.735424 255.999936z"
          fill="#DC3E5D"
          p-id="10829"
        ></path>
        <path
          d="M672.177542 590.182716h-31.919225l-86.065602 232.609735h31.531542l24.55325-70.558286h93.690032l25.845526 70.558286H764.44607l-91.751618-232.609735z m-53.371012 137.239744l24.55325-68.232189a310.146312 310.146312 0 0 0 12.147397-44.454305q5.169105 18.867234 15.894999 48.331134l23.390201 64.613815z m-33.857639-348.914602V335.991968H238.877298v43.032801h151.454782v444.026137h43.032801V379.024769z"
          fill="#FFFFFF"
          p-id="10830"
        ></path>
      </svg>
      字数: {{ wordCount }} 字
      <svg
        t="1730721733676"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="14069"
        width="16"
        height="16"
      >
        <path
          d="M107.690667 540.416H128a21.333333 21.333333 0 0 0 17.066667-34.133333l-42.666667-56.832a21.333333 21.333333 0 0 0-34.133333 0l-42.666667 56.832a21.333333 21.333333 0 0 0 17.066667 34.133333h22.186666a447.317333 447.317333 0 0 0 183.466667 333.824A448 448 0 1 0 512 64a21.333333 21.333333 0 1 0 0 42.666667c119.466667 0 230.485333 52.053333 307.114667 140.8a405.333333 405.333333 0 1 1-711.424 293.034666z m438.101333 37.461333h0.853333V213.333333a42.666667 42.666667 0 0 0-85.333333 0v281.6h-171.52a42.666667 42.666667 0 0 0 0 85.333334h256v-2.389334zM512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z"
          fill="#9571E9"
          p-id="14070"
        ></path>
      </svg>
      时长: {{ readTime }} 分钟
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import { countWord } from "../../untils/functions";

const wordCount = ref(0);
const imageCount = ref(0);

const wordTime = computed(() => {
  return (wordCount.value / 275) * 60;
});

const imageTime = computed(() => {
  const n = imageCount.value;
  if (imageCount.value <= 10) {
    // 等差数列求和
    return n * 13 + (n * (n - 1)) / 2;
  }
  return 175 + (n - 10) * 3;
});

// 阅读时间
const readTime = computed(() => {
  return Math.ceil((wordTime.value + imageTime.value) / 60);
});

function analyze() {
  document.querySelectorAll(".meta-des").forEach((v) => v.remove());
  const docDomContainer = window.document.querySelector("#VPContent");
  const imgs = docDomContainer?.querySelectorAll<HTMLImageElement>(
    ".content-container .main img"
  );
  imageCount.value = imgs?.length || 0;
  const words =
    docDomContainer?.querySelector(".content-container .main")?.textContent ||
    "";
  wordCount.value = countWord(words);
}

onMounted(() => {
  // 初始化时执行一次
  analyze();
});
</script>

<style scoped>
.word {
  color: var(--vp-c-text-2);
  font-size: 15px;
}

.icon {
  display: inline-block;
  transform: translate(0px, 2px);
}
</style>
