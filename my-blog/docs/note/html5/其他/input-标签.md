---
outline: deep
order: 21
---

# input 标签

<ArticleMetadata />

:::tip 总览
在html5中，`<input />`标签增加了许多新的属性，这些属性可以用来控制输入框的行为和外观。
:::

## 常用属性

| 属性名 | 描述 |
| --- | --- |
| type | 指定输入框的类型，例如text、password、checkbox、radio、submit等 |
| name | 指定输入框的名称，用于在表单提交时标识输入框 |
| value | 指定输入框的默认值 |
| placeholder | 指定输入框的占位符文本，当输入框为空时显示 |
| required | 指定输入框为必填项 |
| disabled | 指定输入框为禁用状态 |
| maxlength | 指定输入框的最大字符数 |
| minlength | 指定输入框的最小字符数 |
| pattern | 指定输入框的验证正则表达式 |
| list | 指定输入框的datalist元素，用于提供输入建议 |
| step | 指定输入框的步长，用于数字输入框 |
| min | 指定输入框的最小值，用于数字输入框 |
| max | 指定输入框的最大值，用于数字输入框 |
| size | 指定输入框的宽度，用于文本输入框 |
| accept | 指定输入框接受的文件类型，用于文件输入框 |
| capture | 指定输入框捕获的媒体类型，用于文件输入框 |
| multiple | 指定输入框可以接受多个文件，用于文件输入框 |
| autocomplete | 指定输入框的自动完成功能，例如on、off |
| autofocus | 指定输入框在页面加载时自动获得焦点 |

## 示例

比较有意思的是`type`多了一个`color`属性，可以用来选择颜色。

```html
//默认给他取个颜色
<input type="color" />
```

<input type="color" value="#dd5292"/>

`type`还有一个`range`，可以用来选择一个范围。

<LastUpdated time="2024/11/6 18:00:31"/>
