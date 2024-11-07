---
outline: deep
order: 13
---

# Canvas 画布

<ArticleMetadata />

:::tip 简介
html5 新增了一个用于绘制图形的标签 canvas，它是一个 HTML5 元素，通过 JavaScript 来绘制图形。本文主要介绍了 canvas 的基本用法，包括绘制矩形、圆形、线条、文本和图像等。
:::

## Canvas基础入门

### Canvas简介

Canvas是一个HTML5元素，它提供了一个用于绘图的画布。通过JavaScript，我们可以在这个画布上绘制各种图形、图像、文字等。Canvas应用场景广泛，包括游戏开发、数据可视化、网页动画等。

### 创建Canvas元素

在HTML中，我们可以通过添加一个`<canvas>`标签来创建一个Canvas元素。例如：

```html
<canvas id="myCanvas" width="400" height="300"></canvas>
```

- 我们为Canvas元素设置了一个id（myCanvas）。

### 获取Canvas上下文

要在Canvas上进行绘图操作，我们需要获取其绘图上下文（Context）。对于2D绘图，我们使用getContext('2d')方法。例如：

```js
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
```

现在，我们就可以通过ctx对象在Canvas上进行绘图了。

## Canvas图形绘制

### 绘制基本图形

Canvas提供了多种方法来绘制基本图形，包括矩形、圆形、线条等。下面是一些常用的方法：

#### 绘制矩形

```js
// 绘制一个填充的矩形
ctx1.fillRect(50, 50, 100, 100);

// 绘制一个描边的矩形
ctx1.strokeRect(200, 50, 100, 100);
```

<canvas id="myCanvas1" width="400" height="200"></canvas>

#### 绘制圆形

```js
// 绘制一个圆形（圆心为(75,75)，半径为50）
ctx2.arc(75, 75, 50, 0, Math.PI * 2, true);
// 设置填充
ctx2.fillStyle = '#dd5292';
// 填充圆形
ctx2.fill();
```

<canvas id="myCanvas2" width="400" height="200"></canvas>

#### 绘制线条

```js
// 开始一条路径
ctx3.beginPath();
// 移动到起点
ctx3.moveTo(50, 50);
// 绘制一条直线到终点
ctx3.lineTo(200, 200);
// 设置线条颜色
ctx3.strokeStyle = '#dd5292';
// 设置线条宽度
ctx3.lineWidth = 5;
// 绘制路径
ctx3.stroke();
```

<canvas id="myCanvas3" width="400" height="200"></canvas>

#### 绘制文本

Canvas还提供了绘制文本的方法。例如：

```js
// 设置字体样式
ctx4.font = '30px Arial';
// 设置文本颜色
ctx4.fillStyle = '#dd5292';
// 绘制文本
ctx4.fillText('这是我的canvas!', 50, 100);
```

<canvas id="myCanvas4" width="400" height="200"></canvas>

#### 绘制图像

Canvas还支持绘制图像。例如：

```js
// 创建一个Image对象
const img = new Image();
// 设置图像的src属性
img.src = '/logo.svg';
// 当图像加载完成后，绘制图像
img.onload = function() {
  ctx5.drawImage(img, 50, 50, 100, 100);
};
```

<canvas id="myCanvas5" width="400" height="200"></canvas>

- 恭喜你！🥳你已经学会`canvas`的基础用法啦~ 现在尝试使用`canvas`制作小游戏吧🐶

<LastUpdated time="2024/11/6 16:48:18"/>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    //获取canvas元素
    const canvas1 = document.getElementById('myCanvas1');
    const canvas2 = document.getElementById('myCanvas2');
    const canvas3 = document.getElementById('myCanvas3');
    const canvas4 = document.getElementById('myCanvas4');
    const canvas5 = document.getElementById('myCanvas5');
    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');
    const ctx3 = canvas3?.getContext('2d');
    const ctx4 = canvas4?.getContext('2d');
    const ctx5 = canvas5?.getContext('2d');

    /* 绘制矩形 */
    // 绘制一个填充的矩形
    ctx1.fillRect(50, 50, 100, 100);
    // 绘制一个描边的矩形
    ctx1.strokeRect(200, 50, 100, 100);

    /* 绘制圆形 */
    // 绘制一个圆形（圆心为(75,75)，半径为50）
    ctx2.arc(75, 75, 50, 0, Math.PI * 2, true);
    // 设置填充颜色
    ctx2.fillStyle = '#dd5292';
    // 填充圆形
    ctx2.fill();

    /* 绘制线条 */
    // 开始一条路径
    ctx3.beginPath();
    // 移动到起点
    ctx3.moveTo(50, 50);
    // 绘制一条直线到终点
    ctx3.lineTo(200, 200);
    // 设置线条颜色
    ctx3.strokeStyle = '#dd5292';
    // 设置线条宽度
    ctx3.lineWidth = 5;
    // 绘制路径
    ctx3.stroke();

    /* 绘制文本 */
    // 设置字体样式
    ctx4.font = '30px Arial';
    // 设置文本颜色
    ctx4.fillStyle = '#dd5292';
    // 绘制文本
    ctx4.fillText('这是我的canvas!', 50, 100);

    /* 绘制图像 */
    // 创建一个Image对象
    const img = new Image();
    // 设置图像的src属性
    img.src = '/logo.svg';
    // 当图像加载完成后，绘制图像
    img.onload = function() {
      ctx5.drawImage(img, 50, 50, 100, 100);
    };
})

</script>

<style scoped>
canvas{
    max-width: 100%;
}
</style>