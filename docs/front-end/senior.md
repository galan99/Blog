# 高级

- 组件封装
- 架构
  - 缓存方案
- 项目管理
  - tapd

## 项目
- 项目难点？
<!-- 组件联动
大数据下拉框:分页加载,滚动加载,webworker,虚拟列表
v-debouce
风控限制 -->
- 踩过哪些坑？
<!-- 内存泄漏
数组和对象的响应式问题，没有使用this.$set
切换路由时会自动scroll到顶部（SPA的通病）,解决方案：缓存scrollTop的值
路由拿到的"true" == true?
v-deep
try-catch
element远程排序
id过长number溢出，得改为string类型 -->

## 性能优化
- 什么是白屏时间和首屏时间？如何计算白屏时间和首屏时间？ :heavy_check_mark:
<!-- https://q.shanyue.tech/fe/html/469.html -->
<!-- https://www.cnblogs.com/longm/p/7382163.html -->
<!-- 白屏时间：用户打开网站开始，到浏览器开始显示内容的时间
首屏时间：用户打开网站开始，到浏览器首屏内容渲染完成的时间 -->
- 性能测试工具有哪些？ :heavy_check_mark:
<!-- 1.chrome调试器
  network performance lighthouse
2.webpagetest -->
- 首屏加载慢，如何排查？ :heavy_check_mark:
<!-- https://blog.csdn.net/Lv_Victor/article/details/53148421 -->
<!-- 方案一:打开chrome
在network中看瀑布流,观察各个资源的加载时间
看一下FP(first paint),FCP(first content paint),DCL(dom content loaded),lcp(largest contentfull paint)
  如果FP前面很长说明加载很慢
    如果是加载很慢,用CDN,路由懒加载,优化HTTP缓存策略
  如果FP和FCP后面很长说明渲染很慢
    如果是渲染很慢,优化服务端接口,因为有可能是ajax请求慢,优化前端代码
方案二:用第三方工具,如lighthouse -->
- ⭐性能优化的方法有哪些?  :heavy_check_mark:
<!-- 有道云 -->
- 首屏加载慢，如何优化？ :heavy_check_mark:
<!-- https://blog.csdn.net/qq_41996454/article/details/111412141 -->
<!-- 有三个关键指标
1.呈现有效内容的时间
2.全部加载完的时间
3.用户可交互的时间
然后去答性能的优化方法即可，参考有道云笔记
如路由懒加载，SSR，预加载 -->
- 如何实现图片懒加载？ :heavy_check_mark:
<!-- https://github.com/shfshanyue/Daily-Question/issues/1 -->
<!-- https://codepen.io/hwb2017/pen/BaZKeLa -->
<!-- 方案一：直接使用浏览器提供的懒加载属性
<img src="shanyue.jpg" loading="lazy">
方案二：
先将img标签中的src链接设置为空，
将真正的图片链接放在自定义属性（data-src），
当js监听到图片元素进入到可视窗口的时候，
将data-src的地址存储到src中，
达到懒加载的效果。
1.如何监听？
监听window.scroll事件，然后判断高度
img.getBoundingClientRect().top < document.documentElement.clientHeight
2.如何设置？
img.src = img.datset.src
方案三：
直接使用IntersectionObserver这个API，它可以判断一个元素是否出现在当前窗口 -->
- 渐进式应用是什么？ :heavy_check_mark:
<!-- 就是逐渐展示出内容，让用户感知，而不是白屏
转圈：让用户知道输入网站后在处理了
骨架屏：让用户知道是不是他要访问的页面
然后才是全部内容 -->
- 如何设计一个前端性能监控系统？
<!-- https://juejin.cn/post/6844903662020460552 -->
## SEO
- 搜索引擎的工作原理? :heavy_check_mark:
<!-- 搜索引擎通过爬虫去抓网上的数据，提取其中的关键词存储到数据库里
用户输入关键词后会匹配到一个list，与关键词最吻合的网站会在最前面 -->
- 为什么说SPA应用对SEO不友好? :heavy_check_mark:
<!-- 因为单页面的情况下的页面中的很多内容都是根据匹配到的路由动态生成并展示出来的,而且很多页面内容是通过ajax异步获取的,网络抓取工具并不会等待异步请求完成后再行抓取页面内容,对于网络抓取工来说去准确模拟相关的行为获取复合数据是很困难的,它们更擅长对静态资源的抓取和分析. -->
- ⭐SEO优化有哪些方法? :heavy_check_mark:
<!-- 有道云 -->
- SPA应用如何做SEO优化? :heavy_check_mark:
<!-- 1.预渲染
2.SSR -->
## 业务场景技术设计
- 系统架构
  - 登录认证有哪些方案？ :heavy_check_mark:
  <!-- https://juejin.cn/post/6898630134530752520#heading-1 -->
  <!-- 1.cookie-session
  后端通过set-cookie给前端一个cookieID，然后每次前端的请求会自动带上这个cookie信息
  后端根据cookieID去匹配响应的session，session里面是用户信息
  2.JWT(Json Web Token)
  前端发登录请求获取一个token，然后存到本地（如localStorage），然后每次请求在请求头部里带上，让后端去验证token的有效性
  3.OAuth 2.0(第三方登录)
  比如在创量引擎要通过微信扫码登录，那cl就去调wx接口拿到一张二维码
  扫码之后wx给用户一个token，然后用户把这个token给cl，cl去wx校验这个token是否正确 -->
  - 两种方案的使用场景是什么？ :heavy_check_mark:
  <!-- cookie-session
    session占用服务端内存，硬件成本高
    多进程多服务器时不好同步，需要使用第三方缓存，如redis
  JWT
    如果服务端密钥丢失，用户信息就会泄漏，因为token里面有用户的所有信息
  一般用JWT就可以了，如果要对用户信息有保密要求，要求能迅速封禁用户就用cookie-session -->
  - JWT的优点? :heavy_check_mark:
  <!-- 不需要做数据存储 -->
  - JWT由哪些部分组成？ :heavy_check_mark:
  <!-- https://jwt.io/#debugger-io -->
  <!-- header：使用哪种加密算法
  payload：用户信息
  signature：签名 -->
  - JWT中的token是怎么验证的？ :heavy_check_mark:
  <!-- 服务端存储一个secret + JWT里的payload，用header里的加密算法进行加密得到signature，然后匹配signature是否正确 -->
  - 什么是Session的分布式问题？ :heavy_check_mark:
  <!-- 服务端一般有多台机器，而用户请求过来会走一次负载均衡，不一定打到哪台机器上
  如果到某台机器上找不到对应的Session怎么办
  解决：
  方法一：把 session 集中存储到Redis里
  方法二：让相同 IP 的请求在负载均衡时都打到同一台机器上 -->
  - 如何实现token的无感刷新？ :heavy_check_mark:
  <!-- https://juejin.cn/post/6898630134530752520#heading-5 -->
  <!-- 前端发登录请求获取一个access_token（用于认证）和refresh_token（用于刷新token）
  access_token的有效时间较短 refresh_token的有效时间较长
  后面每次请求，如果access_token过期，前端就在axios拦截器通过refresh_token去发请求更新token
  如果refresh_token也过期了，那就得重新登录了 -->
  - 什么是单点登录？如何实现？ :heavy_check_mark:
  <!-- 有道云 -->
  - 如何设计权限系统? :heavy_check_mark:
  <!-- 有道云 -->
- 文件相关
  - 如何实现文件下载? :heavy_check_mark:
  <!-- https://juejin.cn/post/6846687590783909902#heading-35 -->
  <!-- 动态创建一个a标签，模拟click之后删除
  实际项目中可以用 FileSaver.js 来完成 -->
  - 如何实现大文件上传?
  <!-- https://juejin.cn/post/7053658552472174605 -->
  <!-- https://juejin.cn/post/6846687590783909902#heading-34 -->
  <!-- https://juejin.cn/post/6844904046436843527 -->
  <!-- 1.切片
  2.并发控制
    QPS
    原理promise.race
    实际开发中可用的库:
      前端:promise-limit或p-limit或p-map
      后端:用redis进行rate limit
  3.断点重传 -->
   - 实现promise-limit
    <!-- https://www.jianshu.com/p/c7c5498d2991 -->
  - 前端上传文件时如何读取文件内容？
  <!-- https://q.shanyue.tech/fe/js/487.html -->
- 什么是防盗链?怎么解决? :heavy_check_mark:
<!-- https://juejin.cn/post/7079705713781506079 -->
<!-- https://juejin.cn/post/6844903472110780429 -->
<!-- 就是其它网站访问你的资源的时候,给它ban掉
它是通过refer来判断的,所以把refer隐藏掉就好 -->
- 后端一次给你10万条数据,如何优雅展示? :heavy_check_mark:
<!-- https://juejin.cn/post/6986237263164211207 -->
<!-- https://juejin.cn/post/6844904184689475592 -->
<!-- 虚拟列表：https://juejin.cn/post/6990596611189506062#heading-3 -->
<!-- 方案一：滚动加载或分页
方案二：对10w条数据进行分组,然后加个setTimeout去分批加载
方案三：
  1.使用虚拟列表，只展示可视区域内的内容，区域外的内容动态销毁，滚到对应区域再动态创建
  外层用total * itemHeight计算出来的height撑起高度
  然后用scrollTop / itemHeight可以计算出滚到到第几条,然后去截取相应的数据更新上去即可
  编程实现有点麻烦，可以用第三方插件，比如vue-virtual-scroll-list
  2.数据存储:利用webwoker去拉取数据然后存储到indexedDB中
- 图片剪裁怎么做，比如选择头像后进行裁剪 -->
<!-- https://q.shanyue.tech/fe/js/231.html -->
- 如何优化渲染大量数据？
<!-- https://juejin.cn/post/7088144745788080142#heading-38 -->
- 如何实现多个tab之间的通讯？ :heavy_check_mark:
<!-- 有道云 -->
- 二维码扫描登录的实现
- 健康码的实现
- 滴滴打车等待逻辑的案例设计
- 60个请求（限制最多同时请求6个）请求并行方案
- b站的一键三连是怎么实现的？
- 前端图片压缩怎么做?
- 对 b 和 c 端业务对理解

## Node.js
<!-- https://juejin.cn/post/6844904177466867726#heading-7 -->
- Node.js的三大特性是什么？ :heavy_check_mark:
<!-- 1.单线程
2.事件驱动
3.非阻塞IO -->
- 你认为 node 适合用来做什么?
- 什么是中间件？常用的中间件有哪些？
<!-- 中间件的本质就是一个函数，在收到请求和返回相应的过程中做一些我们想做的事情
在请求或响应前被调用 -->
- 中间件的实现原理是什么？
- Koa 和 Express 的区别？
  <!-- https://www.jianshu.com/p/e055815290e1 -->
  <!-- Express的中间件是顺序执行
  Koa的中间件是按洋葱模型执行 -->
- node中Buffer和Stream的区别？ :heavy_check_mark:
<!-- https://blog.csdn.net/weixin_45731450/article/details/108800286?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0.pc_relevant_antiscanv2&spm=1001.2101.3001.4242.1&utm_relevant_index=3 -->
<!-- Buffer相当于集装箱，装满二进制数据，就装下一个集装箱
stream相当于公交车，把Buffer从起点运到终点 -->
- BFF是啥？
<!-- https://zhuanlan.zhihu.com/p/147020965 -->
- npm
  - npm几个安装命令的区别？ :heavy_check_mark:
  <!-- 全局安装
    npm i -g
  局部安装
    npm i -D  开发环境，写入devDependencies
    npm i -S  生产环境，写入dependencies -->
  - npm install 的安装机制？ :heavy_check_mark:
    <!-- https://juejin.cn/post/6844903870578032647 -->
    <!-- 有道云 -->
  - package-lock.json是干嘛用的？ :heavy_check_mark:
  <!-- npm install默认会下载依赖包的最新版本（大版本），所以需要package-lock.json来记录版本号，让所有开发人员下载的依赖版本相同 -->
  - npm run xxx 的原理? :heavy_check_mark:
  <!-- https://juejin.cn/post/7078924628525056007 -->
  <!-- 运行 npm run xxx的时候，npm 会先在当前目录的 node_modules/.bin 查找要执行的程序
  没有找到啊就继续往上层找
  如果全局目录里也没有,就去path环境变量里找 -->
  - npm cache装在哪里？:heavy_check_mark:
<!-- - https://blog.csdn.net/baidu_16839249/article/details/85007365 -->
  <!-- npm获取到下载地址后，去下载资源的压缩包，到~/.npm(本地NPM缓存路径)目录，然后再解压压缩包到当前项目的node_modules目录 -->
  - npm和yarn的区别？
  <!-- https://www.jianshu.com/p/254794d5e741 -->
  - npm如何发布一个包？ :heavy_check_mark:
  <!-- https://q.shanyue.tech/fe/js/103.html#%E6%AD%A5%E9%AA%A4 -->
  - 如何删除项目中没有使用到的 package？ :heavy_check_mark:
  <!-- https://q.shanyue.tech/fe/js/307.html -->
  <!-- npm install depcheck -g -->
  - npx是什么？ :heavy_check_mark:
  <!-- npx会自动查找当前依赖包中的可执行文件
    如果找不到，就会去 PATH 里找
    如果依然找不到，就会帮你临时安装，执行完命令后删除
  npm是安装，npx是执行
  比如
  npm:
    npm i create-react-app -g
    create-react-app my-react-app
  npx:
    npx create-react-app my-react-app
    npx执行完就会删除 -->
- 如何查看你们 JS 项目中应采用的 node 版本？
<!-- https://q.shanyue.tech/fe/js/274.html -->

## 前端测试

- 什么是单元测试？
<!-- https://hejialianghe.gitee.io/jsadvanced/function.html#_2-2-%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E4%BD%A0%E7%9A%84%E4%BB%A3%E7%A0%81%E8%B4%A8%E9%87%8F -->
- 进行单元测试的工具有哪些? :heavy_check_mark:
<!-- Jest
Mocha + Chai -->
- 为什么选择jest? :heavy_check_mark:
<!-- 改动了a只需要对a文件进行重新测试
配置简单 -->
- mock
  - 前端怎么mock数据？
  <!-- 1.yapi
  配置返回内容，然后调用mock的那个url即可
  2.mock.js
  3.apifox -->
  - mockjs原理 :heavy_check_mark:
  <!-- 拦截请求，返回指定数据 -->
  - 怎么 mock 真数据，我需要真的 id 怎么办，除了写死
- 什么是灰度环境？ :heavy_check_mark:
<!-- AB test就是 一种灰度发布方式，让一部分用户继续用A，一部分用户开始用B，如果用户 对B没有什么反对意见，那么逐步扩大范围，把所有用户都迁移到B上面 来 -->
## 微前端
- 什么是微前端?
<!-- https://zhuanlan.zhihu.com/p/96464401 -->
- 为什么不用iframe？
<!-- https://www.yuque.com/kuitos/gky7yw/gesexv -->
- 隔离机制原理？
<!-- https://juejin.cn/post/7070032850237521956 -->
<!-- https://github.com/Shenjieping/micro-app/blob/master/doc/%E6%B2%99%E7%AE%B1.md -->

## Vite
- vite为什么这么快? :heavy_check_mark:
<!-- https://juejin.cn/post/7040750959764439048 -->
<!-- https://zhuanlan.zhihu.com/p/467325485 -->
<!-- https://juejin.cn/post/6844904146915573773 -->
<!-- 快在两方面
1.启动快 2.热更新快
启动快是因为：
  webpack是先解析依赖，打包构建完再开启服务器，vite是先开启服务器，浏览器遇到es6的import就会去发起一个http请求，而vite就是对这些请求进行监听，启动时不编译，监听到请求再去拿文件进行编译
  esbuild预编译：
    1.对依赖进行预编译 
    2.CommonJS转ESM（就是require转import）
    3.比如lodash源码里面有很多import，如果不处理就会发送很多个http请求，所以预编译的时候会把这些import合并成一个
    预编译之后的文件放在node_modules/.vite下面
热更新快是因为：
  基于ESM的HMR，同时利用浏览器缓存策略提升速度（对一些第三方库自动开启了HTTP的硬缓存） -->
- 为什么vite在开发环境用esbuild打包，在生产环境用rollup打包？ :heavy_check_mark:
<!-- Vite推出主要解决开发环境dev server性能问题，开发环境无所谓浏览器兼容问题，所以vite使用esm+esbuild这一套
生产环境就不能这么直接用了，而自己从头做一套打包工具成本太高，不如集成一个现有的生态完善的构建工具，所以生产环境使用了Rollup -->

## 前端可视化
- 可视化方案中svg、canvas区别 使用场景
<!-- canvas通过js来绘制,绘制的图形不会出现在DOM结构中,放大缩小会失真,依赖于分辨率
应用场景:高数据量高绘制频率（帧率）的场景，如动画、游戏
svg通过html标签来绘制,绘制的图形会出现在DOM结构中,放大缩小不会失真,不依赖分辨率
应用场景:低数据量低绘制频率的场景，如图形、图表 -->
- echart中svg和canvas怎么选择?
<!-- https://juejin.cn/post/6844903552565903367 -->
<!-- https://echarts.apache.org/zh/feature.html#mobile -->
- echarts 数据量太大，造成图表渲染卡顿，影响性能怎么办？
<!-- 1.设置dataZoom只显示部分图表
2.sampling 降采样渲染
https://blog.csdn.net/Yana1225/article/details/120185727 -->
<!-- https://juejin.cn/post/7048871462697959432 -->
  
## element-ui源码
- element架构 :heavy_check_mark:
<!-- build 放node脚本，用来生成新组件，自动加入文档等
packages 放各个组件
src
  index.js 统一引入和注册组件
test 单元测试用例
types 用ts定义接口和类型 -->
- 组件库文档怎么生成？ :heavy_check_mark:
<!-- https://juejin.cn/post/6994721311624970254#heading-9 -->
- 按需加载怎么实现的？ :heavy_check_mark:
<!-- https://juejin.cn/post/6968505746757533710#heading-1 -->
<!-- https://juejin.cn/post/6855574498390769677 -->
<!-- https://juejin.cn/post/6844904147049775118 -->
<!-- 原理：
把import { Button } from 'vant';
转化成
import "vant/es/button/style";
import _Button from "vant/es/button";
插件是在源码解析成AST后，对AST进行转化实现的 -->
- 自定义主题怎么实现的？ :heavy_check_mark:
<!-- https://juejin.cn/post/6844903925632466951#heading-3 -->
<!-- packages/theme-chalk/src/common/var.scss下有定义一些变量，通过接口去获取新的变量值覆盖默认样式 -->
- 如何设计一个组件库？ :heavy_check_mark:
<!-- https://juejin.cn/post/6869279208439791623#heading-54 -->
<!-- https://github.com/xxholly32/vue-general-components -->
<!-- 组件测试
  jest + @vue/test-utils
组件文档
  vuepress
自定义主题
支持按需引入
组件库的划分
  基础组件，表单组件，数据呈现组件，通知类组件，导航类组件和其他组件
vscode提醒
  https://juejin.cn/post/6954011748277944333 -->
  
## 前端错误监控
- 如何设计一个前端错误监控系统？
<!-- 有道云 -->

## 数据埋点
- 数据埋点怎么做？

## 低代码平台
<!-- https://zhuanlan.zhihu.com/p/90746742 -->
<!-- https://juejin.cn/post/7046924227340926983 -->

## Docker
- Docker是什么？
- Docker如何部署前端应用？
<!-- 进入jenkin，构建成镜像，push到远程仓库
然后 -->

## CICD
- 什么是CICD?
<!-- https://juejin.cn/post/6870325047324573710 -->

## 移动端
<!-- https://juejin.cn/post/6844904122747977741#heading-1 -->