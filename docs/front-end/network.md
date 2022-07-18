# 计算机网络
- 五层模型是什么？ :heavy_check_mark:
<!-- 物理层,数据链路层,网络层,传输层,应用层 -->

## 物理层
- 作用
<!-- 传输比特流 -->
- 设备
<!-- 中继器 hub -->
## 数据链路层
- 作用
  - 为什么要组帧？
- 设备
  - 基于什么来定位？

## 网络层
- IP由什么组成？
- IP地址分类
- 什么是子网掩码？
- ARP协议是用来干嘛的？


## 传输层
- TCP连接的三次握手过程是怎样的？ :heavy_check_mark:
<!-- 有道云 -->
<!-- 在吗
在
好的 -->
- TCP释放的四次握手过程是怎样的？为什么不是三次？ :heavy_check_mark:
<!-- 我走了
好的
我也走了
好的 -->
- TCP有哪些手段保证可靠交付? :heavy_check_mark:
<!-- 就是保证发出的内容和接收到的内容是完全一样的
1.校验：和UDP一样
2.序号：给每一个字节编号，确保有序
3.确认：收到就回复一个确认序号，累积确认
4.重传：有两种情况会重传
1.TCP每发送一个报文段就可以设置一次计时器，超时没收到确认就重传
2.比如2号报文段丢了，接收方就会多次发ACK=2过来，当接收方收到3个冗余ACK时就知道丢了，就会立即快速重传2号报文段 -->
- TCP和UDP的区别？ :heavy_check_mark:
<!-- TCP有连接，安全，客户端服务端，文件传输
UDP无连接，快，qq，DNS查询，流媒体 -->
- 什么是SYN洪泛攻击？ :heavy_check_mark:
<!-- 有道云 -->
- socket是什么？ :heavy_check_mark:
<!-- IP+端口 -->

## 应用层
- url的结构 :heavy_check_mark:
<!-- https://pic3.zhimg.com/80/v2-62d9ffda81d62608bd4bf0171c052d72_720w.jpg?source=1940ef5c -->
  - frag的作用？ :heavy_check_mark:
  <!-- 服务器返回的是整个html，加frag浏览器可以帮你处理，显示相应的片段 -->
- uri和url的区别？ :heavy_check_mark:
<!-- uri包括url和urn
url通过位置来定位资源
urn通过名称来定位资源 -->
- DNS
  - DNS服务器是干嘛用的？ :heavy_check_mark:
  <!-- 域名转IP -->
  - DNS的工作过程 :heavy_check_mark:
  <!-- 递归模式：A找B，B找C，找到底
  迭代模式：自己一个个去找
  查找顺序：本地DNS，根DNS，顶级DNS，权限DNS -->
  - DNS解析会出错吗,为什么? :heavy_check_mark:
  <!-- 会，因为域名可能会被污染 -->
  - DNS 是如何泄漏个人隐私的？怎么防范？ :heavy_check_mark:
  <!-- https://baijiahao.baidu.com/s?id=1699425118905848298&wfr=spider&for=pc -->
  <!-- DNS泄漏是指你的信息无意间对你的Internet服务提供商可见的情况
  如果发生泄漏，你的Internet服务提供商也可以窥视你在网上所做的事情。这意味着可以看到你的在线活动，例如你访问的站点和使用的应用程序，使用它们的时间以及你来自何处（你的位置，基于IP地址）
  在以下情况下发生DNS泄漏：
  使用手动配置的代理ip，其中某些内容未正确设置
  黑客或不良行为者已渗透到你的网络
  防止DNS泄漏的一种好方法是使用可靠的代理ip -->
  - 什么是 CNAME 记录和 A 记录？ :heavy_check_mark:
  <!-- https://q.shanyue.tech/base/network/88.html -->
- 什么是域名收敛？ :heavy_check_mark:
<!-- https://www.cnblogs.com/coco1s/p/5365179.html -->
<!-- 域名收敛：10个资源放到1个域名里
域名发散：10个资源放到10个域名里
PC一般用域名发散，这样可以利用浏览器的多线程并发功能
移动端一般用域名收敛，因为移动端DNS的耗费较大（为了节约流量） -->
- CDN
  - 什么是CDN？ :heavy_check_mark:
  <!-- 比如要访问一个静态的A资源，可以利用CND技术，用户向源站域名发起请求时，请求会被调度至最接近用户的服务节点，直接由服务节点直接快速响应，有效降低用户访问延迟，提升可用性
  打一个比方，CDN就是相当于遍布各个地方的仓储一样，如果你想以最快的速度拿到您的快递，那么，最靠谱的方法就是从离您最近的仓库发货 -->
  - CDN的原理是什么？ :heavy_check_mark:
  <!-- https://blog.csdn.net/coolmeme/article/details/9468743 -->
  <!-- 开启CDN服务后，流程如下
  1.用户访问xxx.com，DNS进行解析发现有CNAME记录，则向CDN系统查询，返回离用户最近的IP节点
  2.用户向这个IP节点发出请求
  3.CDN服务器返回内容，并缓存数据 -->
- WebSocket
  - socket和WebSocket的区别？ :heavy_check_mark:
  <!-- Socket 其实并不是一个协议，而是为了方便使用 TCP 或 UDP 而抽象出来的一层，是位于应用层和传输控制层之间的一组接口。 Socket本身并不是一个协议，它工作在OSI模型会话层，是一个套接字，TCP/IP网络的API，是为了方便大家直接使用。
  Socket = ip+端口号
  websocket是一个应用层协议 -->
  - WebSocket 工作在七层（或者四层）中的哪一层？和 HTTP 是什么关系？ 是基于 UDP 的还是 TCP 的？ :heavy_check_mark:
  <!-- 基于TCP
  HTTP和WebSocket虽都是基于TCP协议，但是两者属于完全不同的两种通讯方式 -->
  - websocket和HTTP的区别？ :heavy_check_mark:
  <!-- WebSocket双向通信 -->
  - websocket如何建立连接的？
- HTTP
  - 一个报文包括哪些部分？ :heavy_check_mark:
  <!-- 请求报文：起始行 + 首部
  响应报文：起始行 + 首部 + 实体 -->
  - HTTP在安全上有什么问题？ :heavy_check_mark:
  <!-- 1.明文传输
  2.中间人攻击
  3.DNS劫持：访问某个URL，但实际上被重定向到其它URL -->
  - http中设置keep-alive的作用? :heavy_check_mark:
  <!-- https://www.cnblogs.com/cangqinglang/p/11361638.html -->
  <!-- 一定时间内，同一域名多次请求数据，只建立一次HTTP请求，其他请求可复用每一次建立的连接通道，以达到提高请求效率的问题。这里面所说的一定时间是可以配置的，不管你用的是Apache还是nginx
  也就是说一段时间内多个请求，不用重复建公路 -->
  - keep-alive存在什么问题？ :heavy_check_mark:
  <!-- https://www.cnblogs.com/cangqinglang/p/11361638.html -->
  <!-- 1.文件只能串行传输，也就是说B文件需要等A文件传输完成
  2.假设Apache设置了最大并发数为300，因为浏览器限制，浏览器发起的最大请求数为6，也就是服务器能承载的最高并发为50，当第51个人访问时，就需要等待前面某个请求处理完成 -->
  - http方法有哪些？区别是什么？ :heavy_check_mark:
  <!-- get
  post
  put：更新
  patch：部分更新
  delete -->
    - get和post的区别? :heavy_check_mark:
    <!-- https://www.cnblogs.com/logsharing/p/8448446.html -->
    <!-- 本质上都是在TCP链路上发包，不过get请求是发1个TCP数据包，post请求是发2个TCP数据包
    对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）
    而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok
    另外在使用上的区别：
    1.参数上
    get请求的参数放在URL里，回退是安全的，并且对参数长度有限制
    post请求的参数放在request body里，回退后需要重新请求
    2.缓存上
    浏览器会主动给get请求添加cache，而post需要自己设置 -->
    - 使用post时，参数可以写在url里吗？
    <!-- 可以 -->
    <!-- https://www.zhihu.com/question/64312188 -->
  - 什么是RESTful规范？
  <!-- http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html -->
  <!-- Restful：
  表现层状态转化
  表现层就是资源呈现出来的形式，用户通过HTTP动词，在表现层上对服务端的资源进行操作
  规范：
  1.应该尽量将API部署在专用域名之下。如果确定API很简单，不会有进一步扩展，可以考虑放在主域名下
  2.应该将API的版本号放入URL
  3.对于资源的具体操作类型，由HTTP动词表示
  4.如果记录数量很多，服务器不可能都将它们返回给用户，API应该提供参数，过滤返回结果
  5.如果状态码是4xx，就应该向用户返回错误信息。一般来说，返回的信息中将error作为键名 -->
  - 什么是CSP？ :heavy_check_mark:
  <!-- 有道云 -->
  - HTTP2.0 相对于 HTTP 1.1的区别？ :heavy_check_mark:
  <!-- 1.头部压缩：使用报头压缩,减少包的大小跟数量
  2.二进制传输；HTTP/2采用二进制格式,之前是用纯文本传输
  3.请求优先级：给每个request设置优先级
  4.数据流：数据包不是按顺序发送，对数据包做标记。每个请求或回应的所有数据包成为一个数据流，
  5.多路复用：相同域名多个请求，共享同一个TCP连接，降低了延迟
    HTTP/1.1 中的管道（ pipeline）传输中如果有一个请求阻塞了，那么队列后请求也统统被阻塞住了
    HTTP/2 可以发送多个请求然后异步响应
    HTTP/3 把 HTTP 下层的 TCP 协议改成了 UDP
  6.服务端推送：可以主动向客户端发送消息。 -->
  - 多路复用是什么？ :heavy_check_mark:
  <!-- 有道云 -->
  <!-- 在一个HTTP的连接上，多路“HTTP消息”同时工作 -->
  - 多路复用的原理？ :heavy_check_mark:
  <!-- https://cloud.tencent.com/developer/article/1551667?from=article.detail.1573513 -->
  <!-- HTTP1采用的是纯文本传输，就得通过换行符来分割每个key-value，切完这个请求才能处理下一个
  而HTTP2是用二进制，分帧来传输，就可以通过帧的ID来区分属于哪一组，这样就不用等一个传递完再开始下一个的传递，根据ID就能区分，所以可以实现多路复用 -->
  - Service workers
    - Service workers是什么?与web worker的区别? :heavy_check_mark:
    <!-- https://www.lmcc.top/articles/73.html -->
    <!-- https://mp.weixin.qq.com/s/3Ep5pJULvP7WHJvVJNDV-g -->
    <!-- 就是在浏览器和服务器之间做个中间人，如果网站中注册了service worker那么它可以拦截当前网站所有的请求，进行判断（需要编写相应的判断程序），如果需要向服务器发起请求的就转给服务器，如果可以直接使用缓存的就直接返回缓存不再转给服务器。从而大大提高浏览体验
    与web worker的区别
    Service workers是基于web worker的,并且有缓存功能 -->
    - Service workers原理？ :heavy_check_mark:
    <!-- 有道云 -->
    - Service workers的缺点？:heavy_check_mark:
    <!-- 兼容性
    首屏时间会增加，总体加载时间会减少
    只能在localhost（即开发环境）和https下使用 -->
- HTTPS
  <!-- http://blog.haoji.me/https.html -->
  <!-- https://juejin.cn/post/6844904089495535624 -->
  <!-- HTTPS的原理记一下过程,HTTPS的优缺点背一下 -->
  - HTTP和HTTPS的区别？为什么不都用HTTPS？ :heavy_check_mark:
  <!-- https = http +ssl/tls(tls为ssl的升级版)
  HTTP是明文传输(敞篷车),HTTPS是加密传输(封闭集装箱车)
  HTTPS贵，而且要考虑兼容性问题 -->
  - ⭐HTTPS的优缺点? :heavy_check_mark:
  <!-- http://blog.haoji.me/https.html -->
  <!-- 优点:
    防止私密信息泄露，防止信息被篡改；
    有助于SEO，百度、谷歌均明确表示会优先收录、展示HTTPS站点的内容；
    完全杜绝运营商HTTP劫持问题；
    有效解决运营商DNS劫持问题，降低网站被劫持的风险;
    HTTPS的小绿锁表示可以提升用户对网站信任程度（当然不是说有小绿锁的都是安全的）;
    可以有效防止山寨、镜像网站等；
    为未来升级HTTP/2做准备，HTTP/2必须基于HTTPS部署；
  缺点: 性能和速度下降
    服务器性能下降，开启HTTPS会增加内存、CPU、网络带宽的开销，特别是非对称加密这一块；
    访问速度下降，HTTP连接的建立需要3次握手，HTTPS还需要加上ssl的几次握手（具体是几次没去考究，有说是9次），当然下降主要是在第一次建立连接的时候，后面正常通信速度一般没啥变化；
    除了握手部分外，所有信息传输之后浏览器和服务器都要进行加密解密，又是一笔额外的开销；
    申请证书需要一笔花费，当然现在免费证书也很容易申请到，这个不算明显缺点； -->
  - ⭐HTTPS怎么建立安全通道(即HTTPS的原理)？ :heavy_check_mark:
  <!-- http://blog.haoji.me/https.html -->
  <!-- https://juejin.cn/post/6844903682455109640#heading-82 -->
  <!-- https://blog.csdn.net/xiaoming100001/article/details/81109617?spm=1001.2014.3001.5501 -->
  <!-- 1.C：随机数1,客户端支持的协议和加密方式list
  2.S：随机数2,选择的协议和加密方式
  3.S：证书
  4.C：验证证书,用服务端选择的加密方式生成一个预主秘钥(pre-master secret),然后用证书的公钥加密（随机数1+随机数2+预主秘钥）得到对称密钥，发给服务端
  5.S：通过私钥解密得到其中的对称密钥,至此，Client和Server双方都持有了相同的对称密钥,之后所有的通信数据将由之前浏览器生成的随机密钥并利用对称加密算法进行加密
  我们可以发现，在 HTTPS 加密原理的过程中把对称加密和非对称加密都利用了起来。即利用了非对称加密安全性高的特点，又利用了对称加密速度快，效率高的好处 -->
  - 怎么验证CA证书？ :heavy_check_mark:
  <!-- https://www.cnblogs.com/zery/p/5164795.html -->
  <!-- 1.浏览器首先解析网站的数字证书，如果该证书的签发机构能够在可信任签发机构中找到，则为可信任证书，否则进行2
  2.从授权信息访问信息段中获得该签发机构的数字证书，并判断该授权机构的数字证书的签发机构是否能够在可信任签发机构中找到，若果找到则该授权机构是可信的，并从授权机构的数字证书中获得授权机构的公钥公钥，如果不在则重复2步骤。如果最终都没有找到可信机构，则为不可信证 -->
  - 如何禁用HTTP链接? :heavy_check_mark:
  <!-- http://blog.haoji.me/https.html#qi-ta -->
  <!-- 配置CSP:
  有两种配置方式
  1.在HTTP请求头中添加(CSP) Content-Security-Policy: block-all-mixed-content
  2.meta标签:<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content"> -->
  - HTTP迁移HTTPS对于一些大型网站来说工作量巨大，难免有疏漏的地方，此时可以让浏览器帮我们做http自动跳转https? :heavy_check_mark:
  <!-- http://blog.haoji.me/https.html#qi-ta -->
  <!-- <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> -->
- SSH
  - SSH和HTTPS的区别？
  <!-- 都是基于TCP的应用层协议，SSH通过公钥私钥来确保数据安全，HTTPS则通过CA -->
- 状态码
<!-- http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html -->
<!-- 1xx：相关信息
2xx：操作成功
3xx：重定向
4xx：客户端错误
5xx：服务器错误 -->
  - 101
  <!-- https://www.codercto.com/tutorial/http-code/101.html -->
  - 301和302的区别? :heavy_check_mark:
  <!-- 301即永久性重定向就是网页搬新家，原来的网址彻底不用了
  302即暂时性重定向，就是出差住酒店，24——48小时内用新网址，过两天还回到旧网址。 -->
  - 301和302对于客户端或者浏览器会造成什么样的影响与区别?  :heavy_check_mark:
  <!-- 对于用户，301，302对用户来说没有区别，他们看到效果只是一个跳转，浏览器中旧的URL变成了新的URL。页面跳到了这个新的url指向的地方。
  对于搜索引擎，302转向可能会有URL规范化及网址劫持的问题。可能被搜索引擎判为可疑转向，甚至认为是作弊。 -->
  - 304 :heavy_check_mark:
  <!-- 304就是命中协商缓存:304(未修改)自从上次请求后，请求的网页未修改过 -->
  - 401 :heavy_check_mark:
  <!-- Unauthorized，未认证 -->
  - 403 :heavy_check_mark:
  <!-- Forbidden，没权限 -->
  - 413 :heavy_check_mark:
  <!-- 请求实体太大了，比如上传的文件太大了
  解决方法：让后端配置大一点 -->
- 输入 ping IP 后敲回车，发包前会发生什么？
<!-- 首先根据目的IP和路由表决定走哪个网卡，再根据网卡的子网掩码地址判断目的IP是否在子网内。
如果在相同网段直接先查询arp缓存，如果找到目标ip的mac地址，直接发送出去。 如果缓存中查不到，则从相同网段的网卡发arp问目标ip的mac地址，拿到mac地址后发送出去。
如果不在主机的网段里，会查询默认网关ip，接着查询arp缓存，是否有网关的mac地址记录，如果有，填充该mac地址，发送出去， 如果没有，发arp问网关的mac地址，得到结果，发送出去。 -->
- traceroute, Ping 的原理是什么？
- 运营商劫持是什么？如何防范？
- 支付宝和微信的离线支付是怎么做的？ :heavy_check_mark:
<!-- https://www.zhihu.com/question/49811134 -->
<!-- 付款方可以离线，但是收款方必须在线
在线码是在服务端生成
离线码是在客户端生成，用户登录后，服务端给用户发一个种子数据（每个客户的种子数据唯一，换用户登录后销毁原种子，重新下载种子）存储在本地，当用户点击付款时，客户端会根据种子数据+时间戳+一套安全算法生成离线码，用户使用离线码支付后，服务端再通过一定的算法确认这个码的来源 -->
- 如果访问你的 APP 很慢，你自己无法重现。初步定位到网络问题，那么你怎么能具体定位到问题呢？
