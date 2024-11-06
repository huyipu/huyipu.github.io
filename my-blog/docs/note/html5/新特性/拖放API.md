---
outline: deep
order: 15
---

# 拖放 API

<ArticleMetadata />

:::tip 简介
HTML5 引入了一套强大的拖放（Drag and Drop）API，允许开发者在网页上实现拖放功能。
:::

## 1、设置元素

使用 `draggable` 属性将元素设置为可拖动。

```html
<div id="drag-container" draggable="true">拖动我!</div>
```

## 2、拖动事件

为拖动操作添加必要的事件监听器，包括 dragstart, drag, dragenter, dragover, dragleave, drop, 和 dragend。

### dragstart

当拖动操作开始时触发。

```js
document.addEventListener("dragstart", function (event) {});
```

### drag

当拖动操作进行时触发。

```js
document.addEventListener("drag", function (event) {});
```

### dragenter

当元素进入可拖动目标元素时触发。

```js
document.addEventListener("dragenter", function (event) {});
```

### dragover

当元素在可拖动目标元素上移动时触发。

```js
document.addEventListener("dragover", function (event) {});
```

### dragleave

当元素离开可拖动目标元素时触发。

```js
document.addEventListener("dragleave", function (event) {});
```

### drop

当元素在可拖动目标元素上释放时触发。

```js
document.addEventListener("drop", function (event) {});
```

### dragend

当拖动操作结束时触发。

```js
document.addEventListener("dragend", function (event) {});
```

### 3、完整实例

::: code-group

```html
<div class="darg-demo">
  <div id="drag-container" draggable="true">拖动我!</div>
  <div id="drop-zone">拖放到我这里</div>
</div>
```

```css [style]
<style scoped>
#drag-container {
    width: 100px;
    height: 100px;
    background-color: #4CAF50;
    color: white;
    display: inline-block;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: grab;
}
#drag-container:active {
    cursor: grabbing;
}
#drop-zone {
    width: 300px;
    height: 200px;
    border: 2px dashed #ccc;
    margin-top: 20px;
    display: inline-block;
    text-align: center;
    line-height: 200px;
    border-radius: 10px;
    background-color: #f9f9f9;
    transition: box-shadow 0.3s ease;
}
.highlight {
    border: 2px dashed green;
    background-color: #e0ffe0;
}
.darg-demo{
    width: 400px;
    margin: 0 auto;
    text-align: center;
    margin-top: 50px;
}
#drop-zone.highlight {
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}
</style>
```

```js [vue]
import { ref, onMounted } from "vue";

onMounted(() => {
  // 获取拖动元素和放置区域的引用
  const drag = document.getElementById("drag-container");
  const dropzone = document.getElementById("drop-zone");

  // 当拖动开始时触发的事件
  drag.addEventListener("dragstart", function (event) {
    // 设置拖动数据，这里存储的是拖动元素的ID
    event.dataTransfer.setData("text/plain", event.target.id);
    // 隐藏拖动元素，以避免在拖动时看到重复的元素
    // event.target.style.display = 'none';
  });

  // 当拖动元素进入放置区域时触发的事件
  dropzone.addEventListener("dragenter", function (event) {
    // 阻止默认行为，允许放置
    event.preventDefault();
    // 添加高亮样式，表示放置区域可接受拖动元素
    dropzone.classList.add("highlight");
  });

  // 当拖动元素在放置区域上方移动时触发的事件
  dropzone.addEventListener("dragover", function (event) {
    // 阻止默认行为，允许放置
    event.preventDefault();
  });

  // 当拖动元素离开放置区域时触发的事件
  dropzone.addEventListener("dragleave", function (event) {
    // 移除高亮样式
    dropzone.classList.remove("highlight");
  });

  // 当拖动元素被放置在放置区域时触发的事件
  dropzone.addEventListener("drop", function (event) {
    // 阻止默认行为
    event.preventDefault();
    // 获取拖动数据的值，即拖动元素的ID
    var data = event.dataTransfer.getData("text/plain");
    // 根据ID获取拖动元素
    var draggedElement = document.getElementById(data);
    //  求掉原来的元素
    dropzone.innerHTML = "";
    // 将拖动元素添加到放置区域
    dropzone.appendChild(draggedElement);
    // 重新显示拖动元素，并调整其样式以适应放置区域
    draggedElement.style.display = "block";
    draggedElement.style.margin = "0 auto";
    draggedElement.style.marginTop = "40px";
    draggedElement.style.lineHeight = "normal";
    draggedElement.style.width = "80%";
    draggedElement.style.boxShadow = "none";
    // 移除高亮样式
    dropzone.classList.remove("highlight");
  });

  // 可选：当拖动结束时触发的事件（无论是否放置成功）
  drag.addEventListener("dragend", function (event) {});
});
```

:::

<div class="darg-demo">
    <div id="drag-container" draggable="true">拖动我!</div>
    <div id="drop-zone">拖放到我这里</div>
</div>

<script setup>
import { ref,onMounted } from 'vue'

onMounted(()=>{
    // 获取拖动元素和放置区域的引用
    const drag = document.getElementById('drag-container');
    const dropzone = document.getElementById('drop-zone');

    // 当拖动开始时触发的事件
    drag.addEventListener('dragstart', function(event) {
        // 设置拖动数据，这里存储的是拖动元素的ID
        event.dataTransfer.setData('text/plain', event.target.id);
        // 隐藏拖动元素，以避免在拖动时看到重复的元素
        // event.target.style.display = 'none';
    });

    // 当拖动元素进入放置区域时触发的事件
    dropzone.addEventListener('dragenter', function(event) {
        // 阻止默认行为，允许放置
        event.preventDefault();
        // 添加高亮样式，表示放置区域可接受拖动元素
        dropzone.classList.add('highlight');
    });

    // 当拖动元素在放置区域上方移动时触发的事件
    dropzone.addEventListener('dragover', function(event) {
        // 阻止默认行为，允许放置
        event.preventDefault();
    });

    // 当拖动元素离开放置区域时触发的事件
    dropzone.addEventListener('dragleave', function(event) {
        // 移除高亮样式
        dropzone.classList.remove('highlight');
    });

    // 当拖动元素被放置在放置区域时触发的事件
    dropzone.addEventListener('drop', function(event) {
        // 阻止默认行为
        event.preventDefault();
        // 获取拖动数据的值，即拖动元素的ID
        var data = event.dataTransfer.getData('text/plain');
        // 根据ID获取拖动元素
        var draggedElement = document.getElementById(data);
        //  求掉原来的元素
        dropzone.innerHTML = '';
        // 将拖动元素添加到放置区域
        dropzone.appendChild(draggedElement);
        // 重新显示拖动元素，并调整其样式以适应放置区域
        draggedElement.style.display = 'block';
        draggedElement.style.margin = '0 auto';
        draggedElement.style.marginTop = '40px';
        draggedElement.style.lineHeight = 'normal';
        draggedElement.style.width = '80%';
        draggedElement.style.boxShadow = 'none';
        // 移除高亮样式
        dropzone.classList.remove('highlight');
    });

    // 可选：当拖动结束时触发的事件（无论是否放置成功）
    drag.addEventListener('dragend', function(event) {

    });
})
        
</script>

<style scoped>
#drag-container {
    width: 100px;
    height: 100px;
    background-color: #4CAF50;
    color: white;
    display: inline-block;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: grab;
}
#drag-container:active {
    cursor: grabbing;
}
#drop-zone {
    width: 300px;
    height: 200px;
    border: 2px dashed #ccc;
    margin-top: 20px;
    display: inline-block;
    text-align: center;
    line-height: 200px;
    border-radius: 10px;
    background-color: #f9f9f9;
    transition: box-shadow 0.3s ease;
}
.highlight {
    border: 2px dashed green;
    background-color: #e0ffe0;
}
.darg-demo{
    width: 400px;
    margin: 0 auto;
    text-align: center;
    margin-top: 50px;
}
#drop-zone.highlight {
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}
</style>

<LastUpdated time="2024/11/6 23:11:18"/>
