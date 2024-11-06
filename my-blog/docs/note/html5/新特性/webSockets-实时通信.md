---
outline: deep
order: 15
---

# webSockets 实时通信

<ArticleMetadata />

:::tip 总览
HTML5引入了`webSockets`技术，它允许在浏览器和服务器之间建立持久的双向通信通道。这使得实时通信应用（如在线聊天、多人协作等）变得更加简单和高效，本文介绍了关于`webSockets`的基本概念、使用方法以及一些常见的应用场景。
:::

## 什么是 webSockets？

`webSockets`是一种在浏览器和服务器之间建立持久连接的技术，它允许数据在客户端和服务器之间实时、双向地传输。与传统的HTTP请求-响应模式不同，`webSockets`连接一旦建立，就可以保持打开状态，允许数据在客户端和服务器之间实时传输，而不需要每次都发送HTTP请求。

## webSockets 的使用方法

### 1. 创建 webSockets 对象

要使用`webSockets`，首先需要创建一个`webSockets`对象，指定要连接的服务器地址。例如：

```javascript
const ws = new WebSocket("ws://localhost:8080");
```

这里使用了`ws://`协议，表示使用的是`webSockets`协议，对应的是`http://`，`wss://`对应的是`https://`。

### 2. 监听 webSockets 事件

创建`webSockets`对象后，可以通过监听一些事件来处理连接的状态和消息。例如：

```javascript
// 监听连接打开事件
ws.onopen = (event) => {
    console.log("webSocket连接已打开");
}

// 监听消息到达事件
ws.onmessage = (event) => {
    console.log("收到消息：" + event.data);
}

// 监听连接关闭事件
ws.onclose = (event) => {
    console.log("WebSocket连接已关闭");
}

// 监听连接错误事件
ws.onerror = (event) => {
    console.log("WebSocket连接发生错误");
}
```

### 3. 发送和接收消息

通过`webSockets`对象，可以发送和接收消息。例如：

```js
// 发送消息
ws.send("这是我的第一条webSockets信息！");

// 接收消息
ws.onmessage = (event) => {
    console.log("收到消息：" + event.data);
}
```

### 4. 关闭连接

当不再需要连接时，可以通过调用`close()`方法关闭连接。例如：

```js
ws.close();
```

## webSockets 的应用场景

`webSockets`技术可以用于许多实时通信场景，例如：

- 在线聊天：用户可以在浏览器中与其他用户实时聊天，而不需要每次都发送HTTP请求。
- 多人协作：用户可以在浏览器中实时协作编辑文档，而不需要每次都发送HTTP请求。
- 实时数据监控：用户可以在浏览器中实时监控服务器状态，而不需要每次都发送HTTP请求。

## 总结

`webSockets`是一种在浏览器和服务器之间建立持久连接的技术，它允许数据在客户端和服务器之间实时、双向地传输。与传统的HTTP请求-响应模式不同，`webSockets`连接一旦建立，就可以保持打开状态，允许数据在客户端和服务器之间实时传输，而不需要每次都发送HTTP请求。这使得实时通信应用（如在线聊天、多人协作等）变得更加简单和高效。

<LastUpdated time="2024/11/6 17:22:25"/>
