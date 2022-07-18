# 浏览器
- 浏览器主要有哪些线程？ :heavy_check_mark:
<!-- UI渲染线程
JS引擎线程
事件触发线程 -->
- JS执行进程和渲染进程可以同时进行吗？为什么？ :heavy_check_mark:
<!-- 不可以，因为 JS 太灵活了，它可以去获取 DOM 中的诸如坐标等信息。 如果两者同时执行，就有可能发生冲突，比如我先获取了某一个 DOM 节点的 x 坐标，下一时刻坐标变了。 JS 又用这个“旧的”坐标进行计算然后赋值给 DOM，冲突便发生了 -->
- 浏览器为什么是单线程 异步？ :heavy_check_mark:
<!-- 多线程会冲突，比如上面那个问题
同步会阻塞后面的代码 -->
- v8 是如何执行一段 JS 代码的?
<!-- https://q.shanyue.tech/fe/js/449.html#%E5%8F%82%E8%80%83%E5%87%A0%E7%AF%87%E6%96%87%E7%AB%A0 -->
- V8引擎在编译和解析代码的时候有做哪些优化？
<!-- 1.下载某一部分js文件的时候 解析另一部分js文件
2.源码翻译成字节码后，对多个页面共用的字节码进行缓存
3.懒解析，函数用到了才解析 -->
## 同源策略
- 什么是同源策略？什么是跨域问题？ :heavy_check_mark:
  <!-- 协议，域名，端口要一致 -->
- localhost:3000 与 localhost:5000 的 cookie 信息是否共享？ :heavy_check_mark:
<!-- https://q.shanyue.tech/fe/html/127.html -->
<!-- 不共享，cookie不能跨域共享 -->
- 如何解决跨域问题？:heavy_check_mark:
<!-- 前端：JSONP
后端配置头部 -->
- 预请求是什么？什么情况下会发送？:heavy_check_mark:
<!-- https://zhuanlan.zhihu.com/p/57080609 -->
<!-- https://cloud.tencent.com/developer/article/1046663 -->
<!-- 在跨域的时候允许的方法：GET POST HEAD，其它方法会发预请求 -->
- 为什么要发这个预请求？也就是options请求 :heavy_check_mark:
<!-- 就是去看一下服务器支持哪些方法
丢一个options请求过去，然后看返回的响应头里的Access-Control-Allow-Methods里支持哪些方法 -->
## 渲染机制
- 浏览器中输入URL之后发生了什么？ :heavy_check_mark:
<!-- https://juejin.cn/post/6844903682455109640#heading-84 -->
<!-- http://fex.baidu.com/blog/2014/05/what-happen/ -->
<!-- 有道云笔记 -->
- 浏览器渲染页面的过程是怎样的？ :heavy_check_mark:
<!-- 有道云笔记 -->
- 什么是回流与重绘？如何优化？？ :heavy_check_mark:
<!-- https://juejin.cn/post/6844903682455109640#heading-45 -->
<!-- 回流(reflow)：元素的布局发生变化，需要重新渲染
重绘(repaint)：元素的外观发生变化，布局不变，只需要重新渲染该元素
回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多 -->
- dom 树和 render 树节点是否一一对应？
<!-- https://blog.csdn.net/xjt1988xjt/article/details/7955727 -->
<!-- 不是 -->
- 怎么判断页面是否加载完成？ :heavy_check_mark:
<!-- https://juejin.cn/post/6844903682455109640#heading-30 -->
<!-- DOMContentLoaded 事件触发代表初始的 HTML 被完全加载和解析，
不需要等待 CSS，JS，图片加载
Load 事件触发代表页面中的 DOM，CSS，JS，图片已经全部加载完毕 -->


## 内存管理

- 什么是栈内存，堆内存？ :heavy_check_mark:
<!-- 堆和栈的概念存在于数据结构中和操作系统内存中。
在数据结构中，栈中数据的存取方式为先进后出。而堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。完全
二叉树是堆的一种实现方式。
在操作系统中，内存被分为栈区和堆区。
栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。
堆区内存一般由程序员分配释放，若程序员不释放，程序结束时可能由垃圾回收机制回收。 -->
- 什么时候会回收内存？ :heavy_check_mark:
<!-- 检测到没用的时候就会释放内存
基本数据放栈内存,引用数据放堆内存
栈内存会定期自动清理 -->
- 浏览器引擎是怎么进行垃圾回收的? :heavy_check_mark:
<!-- https://hejialianghe.gitee.io/jsadvanced/function.html#_2-1-2-%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6 -->
<!-- https://hejialianghe.gitee.io/jsadvanced/function.html#_2-1-3-v8-%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%E6%9C%BA%E5%88%B6 -->
<!-- 有道云 -->
- 如何检测内存泄漏? :heavy_check_mark:
<!-- 有道云 -->
- 闭包算内存泄漏吗? :heavy_check_mark:
<!-- 闭包状态下变量不会被自动回收,但是这是用户故意的,所以严格说不算内存泄漏 -->
- Map 与 WeakMap 有何区别? :heavy_check_mark:
<!-- https://q.shanyue.tech/fe/js/542.html -->
<!-- WeakMap的key只能是对象，他是弱引用，意思是如果有对象被他使用了，可以无视他，回收掉
因为他的成员随时会被回收，所以也不能用来遍历
应用场景：储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏 -->
- Vue中哪些场景下会发生内存泄漏? :heavy_check_mark:
<!-- 有道云 -->

## 缓存机制

- 浏览器的缓存机制有哪些？有什么区别？ :heavy_check_mark:
<!-- 强制缓存（根据时间判断）
  Expires：规定一个固定的时间过期，比如12:00
  Cache-Control：比如规定5分钟后过期
  Expires和Cache-Control的区别：
    没什么区别
    只不过Expires是http1.0的产物，Cache-Control是http1.1的产物
    两者同时存在的话，Cache-Control优先级高于Expires
    Expires设定的是固定时间，这个在客户端可以改的
协商缓存（根据内容判断）
  ETag：ETag是唯一标识，内容有更改就有变动
  Last-Modified：是上次修改时间
  ETag和Last-Modified区别：
    ETag比Last-Modified精确，因为Last-Modified只是精确到秒
    ETag优先级高于Last-Modified
缓存过程：
  先判断强制缓存，再判断协商缓存（协商缓存命中返回304） -->
  - 浏览器的缓存机制根据什么来判断的？ :heavy_check_mark:
  <!-- 根据HTTP报文的缓存标识来判断 -->
  - etag 是怎么生成的?
  - etag 不同，内容一定不同吗？ :heavy_check_mark:
    <!-- https://blog.csdn.net/weixin_45714179/article/details/103526711 -->
    <!-- 不一定，由服务器中 ETag 的生成算法决定
    比如 nginx 中的 etag 由 last_modified 与 content_length 组成，而 last_modified 又由 mtime 组成
    当编辑文件却未更改文件内容时，mtime 也会改变，此时 etag 改变，但是文件内容没有更改 -->
  - 计算整个文件得到 etag 会耗费性能，怎么解决？
  - Last-Modified是怎么生成的？ :heavy_check_mark:
  <!-- https://blog.csdn.net/weixin_45714179/article/details/103526711 -->
  <!-- 根据mtime,也就是文件内容改变的时间戳 -->
  - If-None-Match和If-Modified-Since是什么？ :heavy_check_mark:
  <!-- https://blog.csdn.net/shadow_zed/article/details/82534283 -->
  <!-- etag和If-None-Match搭配
  Last-Modified和If-Modified-Since匹配 -->
  - 强缓存一般存放在哪里？
  - 如果我不想要使用缓存了，每次都请求最新的，怎么做？no-store 和 no-cache 的区别是什么？ :heavy_check_mark:
    <!-- https://blog.csdn.net/qq_30422457/article/details/81272542 -->
    <!-- no-cache：不使用本地缓存。需要使用协商缓存，先与服务器确认返回的响应是否被更改，如果之前的响应中存在ETag，那么请求的时候会与服务端验证，如果资源未被更改，则可以避免重新下载。
    no-store：直接禁止游览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源。
    也就是说no cache是要通过服务器验证一下能不能使用本地缓存，而no store是直接不使用缓存 -->
  - 如何选择合适的缓存策略？
  <!-- https://juejin.cn/post/6844903682455109640#heading-37 -->
- 为什么每种缓存机制有两套方案？ :heavy_check_mark:
  <!-- 1.历史原因
  2.辅助，比如etag和lastModify -->
- 离线缓存是什么？ :heavy_check_mark:
  <!-- service workers -->
  - 如何判断用户是否处于离线状态? :heavy_check_mark:
  <!-- navigator.onLine,可以返回用户在线状态,但是不准确,断网很久才返回false
  navigator.connection.downlink返回的是用户带宽,比如10就是10M的带宽,不能拿到实际网速
  所以做法是模拟发送一个请求,看这个请求返回的时间,判断网速,如果低于某个阈值就判定为离线 -->

## 存储机制

- 浏览器的存储机制有哪些？有什么区别？ :heavy_check_mark:
<!-- 有道云 -->
<!-- cookie
session storage
local storage
indexDB
区别：
  过期时间
  存储大小
  是否会带入header中
  应用场景 -->
- token 放 Cookie 还是 LocalStorage？
- Cookie
<!-- 有道云 -->
  - 如何增加一个cookie? :heavy_check_mark:
  <!-- 服务端在报文上写个set-cookie来写入
  浏览器通过document.cookie获取 -->
  - 如何删除一个cookie?
  <!-- https://q.shanyue.tech/fe/dom/162.html -->
  - 前端可以设置cookie吗？ :heavy_check_mark:
  <!-- 可以，但是无法设置HttpOnly选项 -->
  - 当 cookie 没有设置 maxage 时，cookie 会存在多久? :heavy_check_mark:
  <!-- 不设置 max-age 和 expires，此 cookie 就是会话级别的，浏览器关闭就没了 -->
  - 浏览器中 cookie 有哪些字段? :heavy_check_mark:
  <!-- https://q.shanyue.tech/fe/dom/560.html -->

## EventLoop
- 什么 EventLoop？ :heavy_check_mark:
<!-- JS是单线程的，有一个主线程，有一个异步任务队列，队列里面又分为微任务和宏任务 -->
- 什么是宏任务和微任务？ :heavy_check_mark:
  <!-- 执行顺序：同步任务 - 微任务 - DOM渲染 - 宏任务
  微任务：promise.then / nextTick
  宏任务：setTimeout / setInterval -->
- 微任务和宏任务的区分标准是什么？ :heavy_check_mark:
<!-- 微任务在渲染之前执行，宏任务在渲染之后执行 -->
- Node中的EventLoop有什么不同？ :heavy_check_mark:
<!-- 有道云 -->