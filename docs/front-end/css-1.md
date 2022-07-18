# 概念
- 层叠模型 :heavy_check_mark:
<!-- 有道云 -->
- 盒子模型 :heavy_check_mark:
<!-- IE模型：content + padding + border
WC3模型：只包含content
默认为W3C模型
如果在ie6，7，8中缺失DOCTYPE声明会使用IE盒子模型 -->
- css选择器
  - 选择器有哪些? :heavy_check_mark:
<!-- https://juejin.cn/post/6844904147414712334 -->
<!-- h1 .class #id
[width=200]
p h1
p>h1 
h1+h2
h1~h2 -->
<!-- 还有一个在同一个div里的样式，如 -->
<!-- <div class="style1 style2"></div> -->
<!-- css就要这样写 -->
<!-- .style1.style2 { -->
<!-- } -->
  - '+' 与 '~' 选择器有什么不同? :heavy_check_mark:
  <!-- https://juejin.cn/post/6844904147414712334 -->
  <!-- + 选择器匹配紧邻的兄弟元素
  ~ 选择器匹配随后的所有兄弟元素 -->
  - 选择器优先级 :heavy_check_mark:
  <!-- https://juejin.cn/post/6844904147414712334 -->
  <!-- !important > 内联 > #id > .class  [width=200] > h1 > 继承 > 通配 -->
- 属性继承
  - 哪些属性可以继承？ :heavy_check_mark:
  <!-- 有道云 -->
  <!-- 字体相关的属性
  visibility,cursor,表格的布局属性 -->
- BFC
  - BFC的用途? :heavy_check_mark:
  <!-- 形成一个盒子，对外隔离样式 -->
  - BFC的创建方式? :heavy_check_mark:
  <!-- 满足以下任意一点即可：
  1.overflow: hidden;
  2.float: left / right;
  3.display: table-cell /  table-caption / inline-block;
  4.position不为 static / relative; -->
- 单位
  - vw和vh :heavy_check_mark:
  <!-- 相对于可视区域的宽高 -->
  - em和rem :heavy_check_mark:
  <!-- em相对父元素的font-size
  rem相对根元素的font-size -->
  - 怎么更改根元素的font-size :heavy_check_mark:
  <!-- html {
    font-size
  } -->
- padding能为负值吗？margin能为负值吗？ :heavy_check_mark:
<!-- 不能；能 -->
- CSS隐藏一个元素有哪些方法？ :heavy_check_mark:
<!-- https://blog.csdn.net/weixin_34326179/article/details/92425983 -->
<!-- visibility: hidden
display: none
opacity: 0
content-visibility: hidden; -->
- display:none 和 visibility:hidden 的区别? :heavy_check_mark:
<!-- display:none不占空间
visibility:hidden占空间 -->
- border:none 与 border:0 的区别? :heavy_check_mark:
<!-- boder:none不占内存,但是低版本浏览器不兼容 -->
- @import 和 link的区别 :heavy_check_mark:
<!-- @import
  等页面加载完才加载,只可用于css,支持css2.1以上才能使用
link
  与页面一起加载,无兼容性问题 -->
- 块级元素与内联元素有什么区别？ :heavy_check_mark:
<!-- 块级元素：
  1.独占一行
  2.宽高默认与父元素一致
内联元素
  1.不独占一行
  2.宽高由内容决定
  3.有些样式不支持，如width，height等 -->
- 哪些标签默认为块级？哪些标签默认为内联级？ :heavy_check_mark:
<!-- 块级：div,p,h1
内联级：span,a,strong -->
- 一个元素加上 float 属性之后会有哪些变化 :heavy_check_mark:
<!-- 1.脱离文档流
2.内联样式会变得支持所有样式，如width，height
3.宽度变得由内容来决定
4.一行装不下会自动换行 -->
- 网站设置字体时，如何设置优先使用系统默认字体? :heavy_check_mark:
<!-- https://q.shanyue.tech/fe/css/489.html -->
<!-- font-family: system-ui -->
- 写 CSS 时如何避免命名样式冲突? :heavy_check_mark:
<!-- https://q.shanyue.tech/fe/css/493.html#_1-bem-%E5%BC%8F-home-page-home-page-btn -->
<!-- BEM命名 + Scoped -->
- normalize.css 与 reset.css 的区别? :heavy_check_mark:
<!-- https://q.shanyue.tech/fe/css/549.html -->
<!-- normalize.css:会保留有用的样式，比如 h1 的字体大小
reset.css:重置所有 -->
- line-height 的值分别取 [2, 2em, 200%] 有什么区别? :heavy_check_mark:
<!-- https://q.shanyue.tech/fe/css/550.html -->
<!-- line-height:2等于line-height:200%,根据自身字体大小来计算
注意line-height会被子元素继承 -->
- 伪类的实现原理 :heavy_check_mark:
<!-- 在文档树里查找,比如:first-child -->
- 如何实现多主题样式? :heavy_check_mark:
<!-- https://www.eoway.cn/article/1596356438.html
https://juejin.cn/post/7021823120642637838
https://juejin.cn/post/7044812712487944200
https://www.zhangxinxu.com/wordpress/2019/02/link-rel-alternate-website-skin/ -->
<!-- 写不同主题的样式,然后动态切换body绑定的css文件
动态切换的方式有vuex(也就是js切换),或者用scss的mixin -->
- 设置元素的backgroud 哪些区域颜色会改变?
<!-- https://mp.weixin.qq.com/s?__biz=Mzg3ODAyNDI0OQ==&mid=2247488042&idx=1&sn=38beca082c6c15d8c34337c341d939a2&chksm=cf1b517cf86cd86a48d1bde5372e24c16d2d78a432ac04f0a475a98f555534dec8ab4a1cb5cb&scene=21#wechat_redirect -->