# Vue-Router

- 什么是前端路由？ :heavy_check_mark:
<!-- 以前都是后端来控制路由，前端发送请求让后端来处理，返回不同的页面
浏览器提供了接口后，就可以通过前端来控制路由跳转，每次路由跳转就不用向后端发送请求，优化体验
前端路由主要有hash和history两种模式，也就是两种接口 -->
- hash模式和history模式的区别？ :heavy_check_mark:
<!-- 使用上：如果不想要url带#就用history模式，然后需要服务器配置相应的路由，不然会返回404
另外它们的实现原理也不同，调用的是浏览器提供的不同接口 -->
- $router 和 $route 的区别？ :heavy_check_mark:
<!-- $router是整个路由实例，如用this.$router.go(-1)控制路由后退
$route是某个路由对象 -->
- query和params的区别？ :heavy_check_mark:
<!-- query可以用path也可以用name，参数暴露在URL中，页面刷新后参数还在
params只能用name，参数不出现在URL中，要在path中配置:xxx，否则页面刷新后参数就不在了
query比较方便点，一般就用query吧 -->
- /home/setting这种路由怎么配？
- 什么时候用生命周期函数 什么时候用导航守卫？
- 路由懒加载怎么做？
- 什么是路由鉴权？
<!-- https://juejin.cn/post/6844903682455109640#heading-73 -->