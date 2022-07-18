# Sass
- Less 和 Sass 的比较
<!-- Less环境较Sass简单
Less使用较Sass简单
从功能出发，Sass较Less强大
sass有变量和作用域。
sass有函数的概念；
@if @else；@for @each @while @extend @import
数据结构：
-$list类型 = 数组；
-$map类型 = object；
Less 与 Sass 处理机制不一样.前者是通过客户端处理的，后者是通过服务端编译，相比较之下前者解析会比后者慢一点
关于变量在Less和Sass中的唯一区别就是Less用@，Sass用$。 -->

## 变量
```css
.box {
  color: $primary-color
}
```

## 引用
```css
.box {
  &:hover {

  }
  &__title {

  }
}
```
## 模板
```css
@use
```

## 继承
```css
@extend
```

## mixins

## 运算