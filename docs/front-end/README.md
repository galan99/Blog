# Q & A

- 语义化标签的好处 :heavy_check_mark:
<!-- 可读性  
有利于阅读器解析渲染,有利于SEO -->
- 语义化标签有哪些? :heavy_check_mark:
<!-- https://q.shanyue.tech/fe/html/543.html -->
- async和defer属性的作用？区别是什么？ :heavy_check_mark:
<!-- https://www.jianshu.com/p/c0c6e2382898 -->
<!-- async: 将js执行加到异步任务中
defer：在所有元素解析完成之后，DOMContentLoaded 事件触发之前执行js -->
- <!DOCTYPE>的作用？删除这个标签会怎样? 
<!-- https://blog.csdn.net/qq_38128179/article/details/80758192 -->
<!-- 告诉浏览器用哪种HTML规范或者XHTML规范来解析页面
如果删除，浏览器就会按照自己的方式来解析代码 -->
- 行内标签有哪些? :heavy_check_mark:
<!-- https://q.shanyue.tech/fe/html/529.html -->
- link标签prefetch、preload作用? :heavy_check_mark:
<!-- preload预先加载某些资源
prefetch等浏览器有空了，就提前加载后面页面需要用到的资源 -->
- iframe
  - iframe框架的应用场景以及缺点？ :heavy_check_mark:
  <!-- https://github.com/WindrunnerMax/EveryDay/blob/master/HTML/Iframe%E6%A1%86%E6%9E%B6%E5%8F%8A%E4%BC%98%E7%BC%BA%E7%82%B9.md -->
  <!-- 优点：
    1.可以跨域请求其它网站
    2.一个独立的环境
  缺点：
    会阻塞页面加载
    不利于SEO
  应用场景：
  1.插入广告
  广告是与原文无关的，假如硬编码进去，会造成网页布局的紊乱,而且这样势必需要引入额外的css和js文件，极大的降低了网页的安全性，使用iframe便可以解决这些问题。 -->
  - 网页如何与内嵌的iframe进行通信？iframe之间如何进行通信？ :heavy_check_mark:
  <!-- - https://juejin.cn/post/7077695826599870471 -->
  <!-- 用postMessage这个API -->
- 什么是 HTML 的实体编码 (HTML Entity Encode)？ :heavy_check_mark:
<!-- https://q.shanyue.tech/fe/html/480.html -->
<!-- 用来表示一些不可见字符或者保留字符
如＆nbsp;
可以用来避免XSS攻击 -->
- textarea 如何禁止拉伸? :heavy_check_mark:
<!-- https://q.shanyue.tech/fe/html/484.html -->
- 如何统计当前页面出现的所有标签? :heavy_check_mark:
<!-- https://q.shanyue.tech/fe/js/573.html -->
- 什么是iconfont? :heavy_check_mark:
<!-- https://juejin.cn/post/6844903715023880199#heading-10 -->
<!-- 本质上就是一种字体 -->
- Web Worker
  - 什么是Web Worker？ :heavy_check_mark:
  <!-- JS是单线程的，利用Web Worker浏览器可以开启多个线程
  这样一些耗时的计算就可以交给Web Worker去处理，不占用主线程，这样就不会阻塞到浏览器的UI渲染进程
  Web Worker和主线程位于不同上下文中，所以Webworker无法加载外部JS，无法操作DOM，不能读取本地文件 -->
  - Web Worker的应用场景 :heavy_check_mark:
  <!-- https://juejin.cn/post/6970336963647766559 -->
  - js 遇到一个大文件会阻塞吗？如何解决？ :heavy_check_mark:
  <!-- 会，因为js是单线程的
  用WebWorker
  Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。这样的好处是，一些计算密集型或高延迟的任务，被 Worker 线程负担了，主线程（通常负责 UI 交互）就会很流畅，不会被阻塞或拖慢。
  Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。
  引用自阮一峰老师的文章《Web Worker 使用教程》
  使用例子：首屏上使用了 async/await 或者长达 1 秒的动画，可能会阻塞到主线程，那么可以使用 Web Worker 等技术来实现时间分片，将大任务拆分成许多个小任务，使得主线程能抽出空来渲染页面，降低卡顿感 -->
- indexedDB
  - indexedDB是关系型数据库还是非关系型数据库？ :heavy_check_mark:
  <!-- 非关系型 -->
  - 事务是什么？
  <!-- 举个例子，一次操作需要在一 个数据表中同时插入两条数据，第1条数据插入成功，第2条数据插入失败。那么，对于整个操作来说，两条数据都插入成功才算成功，失败时便需要事务的回滚,将已经插入的第1条数据清除。
  IndexedDB支持事务意味着在一系列操作步骤之中，只要有 一步失败，整个事务就都取消，数据库回到事务发生之前的状态,不存在只改写一部分数据的情况。
  在IndexedDB中，事务会自动提交或回滚。当请求一个事务时,必须指定事务的请求访问模式。 -->
  - 应用场景
  <!-- https://www.jianshu.com/p/f52c0bb48d71 -->
