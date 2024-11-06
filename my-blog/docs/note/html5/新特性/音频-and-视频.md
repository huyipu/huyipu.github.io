---
outline: deep
order: 12
---

# 音频 and 视频

<ArticleMetadata />

:::tip 总览
html5 新增了对于音频和视频原生的支持，通过`<audio>`和`<video>`标签来播放音频和视频，无需依赖第三方插件（如早期的 Flash）。
:::

## 音频

- `<audio>` 元素用于在网页中嵌入音频内容。它支持多种音频格式，如 MP3、WAV，但具体支持哪些格式取决于浏览器和操作系统，以下是一个基本的示例：

```html
<audio controls>
  <source src="/audio.mp3" type="audio/mpeg" />
  您的浏览器不支持 audio 元素。
</audio>
```

<audio controls >  
  <source src="https://huyipu.top/files/audio.mp3" type="audio/mpeg">  
  您的浏览器不支持 audio 元素。  
</audio>

- `<source>`元素：指定音频文件的路径和格式。浏览器会按顺序尝试加载每个`<source>`元素指定的文件，直到找到一个它支持的格式。
- 如果浏览器不支持`<audio>`元素，则显示回退内容。

### 音频属性

- `controls`属性：添加播放、暂停和音量控件。
- `autoplay`：页面加载后自动播放音频。
- `loop`：音频播放完毕后重新开始播放。
- `muted`：静音播放音频。
- `preload`：预加载音频数据（可选值：auto、metadata 或 none）。

## 视频

`<video>` 元素用于在网页中嵌入视频内容，支持 MP4、WebM、Ogg 格式。以下是一个基本的示例：

```html
<video width="640" height="360" controls>
  <source src="/video.mp4" type="video/mp4" />
  您的浏览器不支持 video 元素。
</video>
```

<video controls>
  <source src="https://huyipu.top/files/video.mp4" type="video/mp4" />
  您的浏览器不支持 video 元素。
</video>

- `<source>`元素：指定视频文件的路径和格式。
- 如果浏览器不支持`<video>`元素，则显示回退内容。

### 视频属性

- `controls`属性：添加播放、暂停和音量控件。
- `autoplay`：页面加载后自动播放视频。
- `loop`：视频播放完毕后重新开始播放。
- `muted`：静音播放视频。
- `preload`：预加载视频数据（可选值：auto、metadata 或 none）。
- `poster`：视频加载前的占位图。

<LastUpdated time="2024/11/5 22:40:11"/>
