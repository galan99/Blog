# 布局

- ⭐居中布局的实现方式 :heavy_check_mark:
<!-- https://juejin.cn/post/6844903982960214029#heading-20 -->
<!-- inline
block
  定宽高
    margin: 0 auto
    absolute + 定位
  不定宽高
    flex
    grid
    transform
    display: table-cell -->
- 实现一些常见布局
<!-- https://juejin.cn/post/6844903574929932301#heading-37 -->
<!-- 从这几个方面考虑：flex grid position:absolute float table vh -->
- 瀑布流布局
  - 横向瀑布流
  - 竖向瀑布流
- css 如何实现响应式布局大屏幕三等分、中屏幕二等分、小屏幕一等分?
<!-- https://github.com/shfshanyue/Daily-Question/issues/473 -->
- 用 css 画一个三角形
  <!-- https://blog.csdn.net/weixin_36270908/article/details/98947183 -->
- 怎么画出 0.5px 的线 :heavy_check_mark:
  <!-- https://blog.csdn.net/qq_42068550/article/details/101162325 -->
  <!-- 缩放
  1.<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>
  2.transform: scale(0.5,0.5); -->
- CSS 如何实现固定长宽比的元素? :heavy_check_mark:
<!-- https://q.shanyue.tech/fe/css/547.html -->
<!-- 第一种方法:padding
父元素 height:0,padding-top:75%
子元素: position: absolute
第二种方法:aspect-ratio:1/1 -->
- 画一个正方形，保证宽高一致
  <!-- .box {
    width: 100vw
    .item {
      padding: 100%
    }
  } -->
- 移动端布局
  - 移动端布局需要注意哪些问题？
  <!-- 有道云 -->
- 响应式布局
  - 什么是响应式布局？
  <!-- 能根据不同设备采用不同的样式 -->
  - 如何进行响应式布局
  <!-- 有道云 -->

## 定位

- display: none, block, inline-block, flex, grid
- position: static, relative, absolute, fixed，sticky
- float: left right

## flex

- align-items 和 align-content 的区别？
- flex: 1 是什么？
- width 与 flex-basis 有什么区别？
  <!-- https://mp.weixin.qq.com/s/PJhygm_cciOFZQlK6tHcQQ -->
  <!-- 1.flex-direction为column时,flex-basis为height
  2.flex-basis为理想值，实际中可能会被压缩 -->
- flex-wrap:wrap-reverse 是干嘛的？
- flex-flow 是什么？
  <!-- flex-direction和flex-wrap的合体 -->

## grid