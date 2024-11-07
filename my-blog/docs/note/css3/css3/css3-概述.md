---
outline: deep
order: 1
---

# css3 概述

<ArticleMetadata />

:::tip 简介
css3 是 css 的最新版本，它引入了许多新的特性和改进，使得网页开发更加的灵活和实现更复杂的动效。
:::

## css3 新特性

css3 引入了许多新的特性和改进，包括：

### 1、选择器

css3 引入了许多新的选择器，如伪类选择器、属性选择器等，使得选择元素更加灵活。例如：

- [**伪类选择器**](/note/css3/css3/选择器.html#伪类选择器)：可以选择元素的特殊状态或位置，`:hover`、`:active`、`:focus`、`:nth-child`、`:nth-of-type` 等。
- [**属性选择器**](/note/css3/css3/选择器.html#属性选择器)：允许按照元素的某个属性来选择元素，`[attr=value]`、`[attr^=value]`、`[attr$=value]`、`[attr*=value]` 等。
- [**伪元素选择器**](/note/css3/css3/选择器.html#伪元素选择器)：可以用于选择元素的特定部分，如 `::before`、`::after`、`::first-line`、`::first-letter` 等。

### 2、盒模型

css3 引入 `box-sizing` 属性，允许我们更灵活地控制元素的尺寸和边距。

- **box-sizing：** 可以设置元素的盒模型类型，如 `content-box`、`border-box`、`padding-box` 等。

### 3、布局模式

css3 引入了新的布局方式， `flex` 布局和`grid` 布局，使得布局更加灵活和高效。

- **弹性盒子布局（flex）：** 一种一维布局模型，允许容器内的项目能够灵活地伸缩其尺寸以最佳方式填充可用空间。
- **网格布局（grid）：** 一种二维布局系统，允许以行和列的形式对元素进行布局，并提供了更精细的控制选项。

### 4、css3 媒体查询与响应式

css3 引入了媒体查询，使得网页可以根据不同的设备尺寸和分辨率进行适配。例如：

- **媒体查询（@media）：** 允许根据不同的设备特性（如屏幕宽度、分辨率等）来应用不同的样式规则，如：`@media screen and (max-width: 600px) { ... }`、`@media print { ... }` 等。
- **响应式设计：** 一种设计理念，使得网页能够自适应不同设备和屏幕尺寸，提供更好的用户体验，一般使用媒体查询来实现。

### 5、css3 过渡与动画

css3 引入了 CSS 动画和过渡，使得动画的实现更加简单和高效。例如：

- **过渡（transition）：** 允许元素在一段时间内平滑地过渡到新的状态，如：`transition: all 0.5s ease;`、`transition-property`、`transition-duration`、`transition-timing-function`、`transition-delay` 等。
- **动画（animation）：** 允许元素通过关键帧定义一系列的动画效果，如：`@keyframes`、`animation-name`、`animation-duration`、`animation-timing-function`、`animation-delay`、`animation-iteration-count`、`animation-direction`、`animation-fill-mode`、`animation-play-state` 等。

### 6、其他

css3 还引入了许多其他的新特性，如：

- [**文本与字体**](/note/css3/其他/文本与字体.html)：允许我们调整更多的文本样式和使用自定义的字体。
- [**边框与背景**](/note/css3/其他/边框与背景.html)：允许我们创建更多的边框样式和背景效果。
- [**颜色与透明度**](/note/css3/其他/颜色与透明度.html)： 设计了更多颜色表达方式并且使用`opacity`属性来设置元素的透明度。

<LastUpdated time="2024/11/7 9:10:21"/>
