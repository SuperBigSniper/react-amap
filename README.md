<h1 align="center" style="line-height: 50px; height: 50px">
  <img height="24" src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/amap-logo.svg" />
  <span style="padding-left: 8px">React AMap<span>
</h1>

<div align="center">
  基于 React 封装的高德地图组件，助你轻松的接入到 React 项目中。
</div>

本库主要参考 饿了么[react-amap](https://github.com/ElemeFE/react-amap)，API基本一致。

## ✨ 特性

- 📦 开箱即用，本组件支持了大部分的常用地图组件
- 🎉 可扩展，支持自定义地图组件
- 💻 使用 TypeScript 编写，提供完善的类型定义，包含高德地图 JS SDK 声明。
- 💝 无任何第三方依赖

## 🏗 安装

```sh
# npm install
$ npm install @pansy/react-amap --save

# yarn install
$ yarn add @pansy/react-amap
```

## 🔨 使用

```html
<div id="app"></div>
```

```css
#app {
  width: 600px;
  height: 400px;
}
```

```tsx | pure
import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'react-amap';

ReactDOM.render(
  <Map mapKey={YOUR_AMAP_KEY} version={VERSION} />,
  document.querySelector('#app')
)
```
