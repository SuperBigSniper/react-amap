---
title: ToolBar 工具条
nav:
  title: 组件
  path: /components
order: 1
group:
  path: /control
  title: 地图控件
  order: 200
---

# ToolBar 工具条

## 何时使用

-  需要显示地图工具条插件时使用；

## 代码示例

### 基础用法

<code src="./demo/demo-01.tsx"></code>

### 动态设置属性

<code src="./demo/demo-02.tsx"></code>

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|position|控件停靠位置| `LT` \| `RT` \| `LB` \| `RB` | `LT` |
|offset|相对于地图容器左上角的偏移量，正数代表向右下偏移| `Offset` | -- |

### 扩展属性

| 属性 |属性类型|说明|类型|默认值|
|-----|-----|----|----|----|
|visible| 动态属性 |圆形的显示/隐藏状态 | `boolean` | `true` |
