---
outline: deep
order: 21
---

# input 标签

<ArticleMetadata />

:::tip 总览
在 html5 中，`<input />`标签增加了许多新的属性，这些属性可以用来控制输入框的行为和外观。
:::

## 常用属性

| 属性名       | 描述                                                              |
| ------------ | ----------------------------------------------------------------- |
| type         | 指定输入框的类型，例如 text、password、checkbox、radio、submit 等 |
| name         | 指定输入框的名称，用于在表单提交时标识输入框                      |
| value        | 指定输入框的默认值                                                |
| placeholder  | 指定输入框的占位符文本，当输入框为空时显示                        |
| required     | 指定输入框为必填项                                                |
| disabled     | 指定输入框为禁用状态                                              |
| maxlength    | 指定输入框的最大字符数                                            |
| minlength    | 指定输入框的最小字符数                                            |
| pattern      | 指定输入框的验证正则表达式                                        |
| list         | 指定输入框的 datalist 元素，用于提供输入建议                      |
| step         | 指定输入框的步长，用于数字输入框                                  |
| min          | 指定输入框的最小值，用于数字输入框                                |
| max          | 指定输入框的最大值，用于数字输入框                                |
| size         | 指定输入框的宽度，用于文本输入框                                  |
| accept       | 指定输入框接受的文件类型，用于文件输入框                          |
| capture      | 指定输入框捕获的媒体类型，用于文件输入框                          |
| multiple     | 指定输入框可以接受多个文件，用于文件输入框                        |
| autocomplete | 指定输入框的自动完成功能，例如 on、off                            |
| autofocus    | 指定输入框在页面加载时自动获得焦点                                |

## 实例

### color 类型

比较有意思的是`type`多了一个`color`属性，可以用来选择颜色。

::: code-group

```html
<label for="color">选中你喜欢的颜色:</label>
<input class="myinput" name="color" type="color" v-model="input1" />
```

```js [vue]
const input1 = ref("#dd5292");
```

:::

<label for="color">选中你喜欢的颜色:</label>
<input class="myinput" name="color" type="color" v-model="input1" />

当前选中的颜色 <b>{{ input1 }}</b>

### number 类型

新增的 number 类型限制了用户只能输入数字和数字符号。

::: code-group

```html
<label for="number">输入数字:</label>
<input
  class="myinput"
  name="number"
  type="number"
  v-model="input2"
  placeholder="尝试输入一下！"
/>
```

```js [vue]
const input2 = ref("#dd5292");
```

:::

<label for="number">输入数字:</label>
<input class="myinput" name="number" type="number" v-model="input2" placeholder="尝试输入一下！"/>

### 日期选择器 date pickers

HTML5 提供了多种日期选择器类型，包括：

- **date：** 选择日、月、年。
- **month：** 选择月、年。
- **week：** 选择周和年。
- **time：** 选择时间（小时和分钟）。
- **datetime-local：** 选择日期和时间（本地时间），但不包括时区。
- **注意：** datetime 类型已经不被推荐使用，因为它不符合当前的 HTML5 标准。

```html
<label for="date">日期时间选择:</label>
<input type="datetime-local" name="date" />
```

<label for="date">日期时间选择:</label>
<input class="myinput" type="datetime-local" name="date" />

### range 类型

range 类型是一个拖动框，用户可以拖动来选择一个数值范围。

```html
<label for="range">选择一个数值范围:</label>
<input class="myinput" type="range" name="range" min="0" max="100" />
```

<label for="range">选择一个数值范围:</label><br />
<input class="myinput" type="range" name="range" min="0" max="100" v-model="input3"/> <span>{{input3}}</span>

### 其他

还有些其他的类型，比如 email、url、tel、search 等等，大家可以自行尝试。

```html
<label for="emailInput">电子邮件地址:</label>
<input type="email" id="emailInput" name="emailInput" multiple />

<label for="urlInput">URL 地址:</label>
<input type="url" id="urlInput" name="urlInput" />

<label for="telInput">电话号码:</label>
<input type="tel" id="telInput" name="telInput" />

<label for="searchInput">搜索框:</label>
<input type="search" id="searchInput" name="searchInput" list="suggestions" />
<datalist id="suggestions">
  <option value="HTML5"></option>
  <option value="CSS3"></option>
  <option value="JavaScript"></option>
</datalist>
```

<script setup>
import { ref } from 'vue'

const input1=ref('#dd5292');
const input2=ref(null);
const input3=ref(10);
</script>

<style scoped>
.myinput{
    width: 200px;
    height: 30px;
    border-radius: 5px;
    margin: 8px;
    margin-bottom:0px;
    outline: none;
    font-size: 16px;
    color: #000;
    background-color: #f5f5f5;
    transition: all 0.3s;
    display: inline-block;
    vertical-align: middle;
    line-height: 30px;
    position: relative;
    transform: translateY(-50%);
    -webkit-appearance: none;
    -moz-appearance: none;
    margin-top:20px;
}
</style>

<LastUpdated time="2024/11/6 18:00:31"/>
