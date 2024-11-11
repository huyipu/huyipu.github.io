---
outline: deep
order: 1
---

# vue 概述

<ArticleMetadata />

:::tip 简介
Vue 3 是由尤雨溪（Evan You）开发并维护，是 Vue.js 框架的第三个主要版本。与 Vue 2 相比，Vue 3 在性能、代码复用、类型安全性、打包体积、生命周期控制和模块化等方面都有显著提升。
:::

## Vue 3 的新特性

1. **性能改进**：Vue 3 在性能上进行了显著优化，包括编译器优化、虚拟 DOM 优化和响应式系统重构。这些改进使得 Vue 3 能够更快地处理大量数据和复杂的界面，从而提升用户体验。
2. **响应式系统优化**：Vue 3 的响应式系统基于 Proxy 对象实现，相比 Vue 2 中的 Object.defineProperty，Proxy 提供了更强大的功能，可以更高效地追踪依赖和触发更新。
3. **组合式 API**：Vue 3 引入了新的组合式 API（Composition API），提供了一种更灵活、更逻辑化的方式来组织和复用代码。与 Vue 2 中的选项式 API 不同，组合式 API 允许开发者将相关的逻辑组合在一起，形成可重用的函数。
4. **TypeScript 支持**：Vue 3 更好地支持 TypeScript，增强了类型安全性和开发体验。通过 TypeScript 的类型检查，可以捕捉到更多的潜在错误，同时 IDE 的自动补全和类型提示功能也使得开发更加高效。
5. **更小的打包体积**：Vue 3 通过多种技术手段减少了打包后的文件体积，包括 Tree-shaking（去除未使用的代码）和更精简的核心库。这些改进使得 Vue 3 应用程序在网络传输和加载时更加高效。
6. **生命周期的变化**：使用 setup 代替了之前的 beforeCreate 和 created。
7. **Template 模板**：现在，template 模板支持多个根标签了。

<LastUpdated time="2024/11/1 16:00:31"/>
