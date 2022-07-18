# Vue

- MVVM是什么? :heavy_check_mark:
<!-- https://juejin.cn/post/6984210440276410399#heading-5 -->
<!-- 分为3层:Model,View,ViewModel
和MVC没有本质区别，只是代码的位置变动而已 -->
- MVVM 的缺点? :heavy_check_mark:
<!-- https://zhuanlan.zhihu.com/p/33241595 -->
<!-- 数据绑定问题:
1.bug不好排查,出现一个bug有可能是view层也有可能是model层
2.不利于代码复用,view和model绑定了,view能复用,model不一定能复用
3.model中数据很多的话,数据绑定会占用很多内存 -->
- Vue是不是MVVM框架？ :heavy_check_mark:
<!-- Vue是MVVM框架，但是不是严格符合MVVM，因为MVVM规定Model和View不能直接通信，而Vue的ref可以做到这点 -->
- 为什么说Vue是一个渐进式框架？ :heavy_check_mark:
<!-- 渐进式：通俗点讲就是，你想用啥你就用啥，咱也不强求你。你想用component就用，不用也行，你想用vuex就用，不用也可以 -->
- 说说你对 SPA 单页面的理解，它的优缺点分别是什么？ :heavy_check_mark:
  <!-- https://juejin.cn/post/6844903918753808398#heading-1 -->
  <!-- 缺点：不利于SEO，首屏加载时间长，不支持IE8以下 -->
- ⭐Vue跟React的相同点和不同点？ :heavy_check_mark:
<!-- https://juejin.cn/post/6984210440276410399#heading-4 -->
<!-- https://juejin.cn/post/6991724298197008421?from=main_page#heading-27 -->
<!-- https://www.jianshu.com/p/b7cd52868e95?from=groupmessage -->
<!-- 相同点:
1.虚拟DOM
2.组件化开发
3.单向数据流
4.都支持SSR
不同点:
1.react的思路是all in js，通过js来生成html，所以设计了jsx，还有通过js来操作css，社区的styled-component、jss等，
vue是把html，css，js组合到一起，有各自的处理方式，vue有单文件组件，可以把html、css、js写到一个文件中，html提供了模板引擎来处理。
2.Vue封装好了一些v-if，v-for，React什么都是自己实现，自由度更高
3.react的性能优化需要手动去做，而vue的性能优化是自动的
4.react单向绑定,Vue双向绑定,当state特别多的时候，Watcher也会很多，会导致卡顿，所以大型应用（状态特别多的）一般用react，更加可控。 -->

## Vue 生命周期

- 各周期做什么操作？ :heavy_check_mark:
  <!-- created：拿数据
  mounted：DOM操作
  beforeDestroyed：事件销毁，解绑 -->
- 异步请求在 created 里写还是 mounted 里写？ :heavy_check_mark:
  <!-- 理论上都可以，但是建议在created里写
  好处:
  1.更早拿到数据
  2.ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性 -->
- ⭐父子周期调用顺序 :heavy_check_mark:
  <!-- https://juejin.cn/post/6844903918753808398#heading-8 -->
  <!-- 创建：
  更新：
  销毁： -->
- 父组件可以监听子组件的生命周期吗？ :heavy_check_mark:
  <!-- https://juejin.cn/post/6844903918753808398#heading-11 -->
  <!-- 可以,有两种方式
  1.子组件emit
  2.父组件@hook:mounted="xxx" -->

## Vue 组件通信
<!-- https://juejin.cn/post/6984210440276410399#heading-12 -->
- 父子组件 :heavy_check_mark:
  - props
  - $attrs 和 $listeners
- 跨级组件 :heavy_check_mark:
  - vuex
  - eventBus
    <!-- 注意销毁 -->
  - provide/inject
  - flexibleEmit
    <!-- vuex和provide/inject比较：vuex可追溯状态变更，可以知道在哪里改变了共享变量
    所以只是要简单使用全局变量就用provide，如果业务复杂要记录状态就用vuex -->

## Vue 原理
- 虚拟DOM :heavy_check_mark:
  - 虚拟 DOM 的优势是什么？:heavy_check_mark:
  <!-- https://juejin.cn/post/6844903918753808398#heading-25 -->
  <!-- https://juejin.cn/post/6981781580683411463#heading-1 -->
  <!-- 1.性能优化
  浏览器只有一个主线程,当JS代码调用DOM API时就会挂起JS引擎,引擎间切换的代价比较高
  虚拟DOM不会立马进行排版与重绘操作,会先跟真实DOM进行对比,只更新有变更的部分
  2.不用手动去更改DOM(双向绑定),提高开发效率
  3.可以跨平台,如服务端渲染,weex开发等 -->
  - 虚拟 DOM 怎么实现? :heavy_check_mark:
  <!-- 实现:本质上是一个对象,记录三个东西:tag 属性 children就好了 -->
  - 怎么判断两个虚拟DOM是否相等? :heavy_check_mark:
  <!-- 就是问你diff算法的原理 -->
  - vue 遍历虚拟 DOM 是深度优先还是广度优先？为什么? :heavy_check_mark:
    <!-- 深度优先
    因为父子组件有很多需要联动的场景，比如组件更新是从父到子，再从子到父 -->
  - v-for 中 key 的作用是什么？ :heavy_check_mark:
  <!-- diff算法的第三个策略是对比每个结点,如果一棵树只是节点位置发生变化,内容没有发生变化,其实就不需要重新去渲染,所以可以绑定上key优化性能 -->
  - 为什么不建议用index做key，为什么不建议用随机数做key？ :heavy_check_mark:
  <!-- https://juejin.cn/post/6984210440276410399#heading-28 -->
  <!-- 比如你的数据本来是0，1，2
  现在在列表的第一项插入一条数据变成0，1，2，3
  diff如果按照key来对比，会认为这三条数据都变了，然后实际上只变动了一个数据
  随机数也是一样的代理，无法保证与某个数据的唯一绑定关系 -->
- 响应式
  - v-model 是哪两个语法的缩写？ :heavy_check_mark:
  <!-- https://juejin.cn/post/6844903918753808398#heading-14 -->
  <!-- v:bind和v:on -->
  - v-model 的原理？ :heavy_check_mark:
  <!-- 有道云 -->
  <!-- https://juejin.cn/post/6950826293923414047#heading-20 -->
  <!-- vue2.0:
  响应式的数据分为两种:
  1.对象
  循环遍历所有属性,给每个属性设置getter和setter
    访问数据时,收集依赖,在dep中存储相关的watcher
    设置数据时,由dep通知相关的watcher去更新
  2.数组
  增强数组的那7个可以改变自身的原型方法,然后拦截对这些方法的操作
  增删数据时,进行响应式处理,由dep通知相关的watcher去更新
  当创建 Vue 实例时,vue 会遍历 data 选项的属性,利用 Object.defineProperty 为属性添加 getter 和 setter 对数据的读取进行劫持（getter 用来依赖收集,setter 用来派发更新）,并且在内部追踪依赖,在属性被访问和修改时通知变化。
  每个组件实例会有相应的 watcher 实例,会在组件渲染的过程中记录依赖的所有数据属性（进行依赖收集,还有 computed watcher,user watcher 实例）,之后依赖项被改动时,setter 方法会通知依赖与此 data 的 watcher 实例重新计算（派发更新）,从而使它关联的组件重新渲染。
  一句话总结:
  vue.js 采用数据劫持结合发布-订阅模式,通过 Object.defineproperty 来劫持各个属性的 setter,getter,在数据变动时发布消息给订阅者,触发响应的监听回调
  vue3.0:使用proxy -->
  - 为什么只对对象劫持，而要对数组进行方法重写？ :heavy_check_mark:
  <!-- 因为对象最多也就几十个属性，拦截起来数量不多，但是数组可能会有几百几千项，拦截起来非常耗性能，所以直接重写数组原型上的方法，是比较节省性能的方案 -->
  - 直接给一个数组或对象赋值，Vue 能检测到变化吗？ :heavy_check_mark:
  <!-- 对于数组:
  直接arr[1] = 'xxx' 监听不到
  直接修改arr.length = xxx 监听不到
  对于对象:新增或删除属性 监听不到
  要通过this.$set()就监听得到  -->
  - 数组调用 push,pop,shift,unshift,splice,sort,reverse 能监听到吗？ :heavy_check_mark:
    <!-- 可以，因为vue对这些方法进行了重写
    vue在这些方法里先获取到Observer对象，如果有新值就用notify去通知 render watcher,执行 update -->
  - this.$set 的原理 :heavy_check_mark:
    <!-- https://juejin.cn/post/6844903918753808398#heading-24 -->
    <!-- https://vue-js.com/learn-vue/instanceMethods/data.html#_2-vm-set -->
    <!-- 1.如果目标是数组
      直接使用数组的splice方法触发相应式，因为splice方法已经被vue重写过来，直接调用它可以把新加的数据也变为响应式
    2.如果目标是对象
    先判断属性是否存在
      如果已经存在说明是一个原来就有的属性，那么直接修改属性值即可
      接下来再判断目标对象是否是响应式，即看一下改对象有没有_ob_属性
        如果不是响应式属性，直接给目标对象加上 这个属性即可，不用进行响应式处理
        如果是响应式对象，就要对新增的属性调用一下defineReactive处理为响应式 -->
  - 不需要响应式的数据应该怎么处理？ :heavy_check_mark:
  <!-- 1.写在data的return上面
  2.写在created()里
  3.Object.freeze() -->
  - computed 依赖的数据一发生变化就会去更新么?
    <!-- 不会，原理是这样的：
    判断有没有地方引用到，有的话再去计算
    判断计算结果有没有变更，有的话再去重新渲染 -->
  - provide和inject是响应式的吗？
  <!-- https://juejin.cn/post/6984210440276410399#heading-48 -->
  <!-- 不是，但是通过某种写法可以变成响应式 -->
- Vue渲染过程
  - 说说vue的渲染过程 :heavy_check_mark:
  <!-- 有道云 -->
  <!-- https://juejin.cn/post/6844903973502058504 -->
  <!-- template -> parse函数得到ast -> optimize函数(标记静态内容，也就是和数据没关系，不需要更新的内容，方便后面diff直接跳过)得到优化后的ast -> generate函数生成render函数,render函数得到VNode  -> patch函数得到真实DOM -->
  - ast是啥? :heavy_check_mark:
  <!-- https://juejin.cn/post/6844903941721980936 -->
  <!-- 抽象语法树,把代码变成树结构 -->
  <!-- 如V8引擎拿到代码后会进行编译，形成一个AST，然后解析器会对这棵树进行解析，翻译成机器代码 -->
  - Vue的el属性和$mount优先级？ :heavy_check_mark:
  <!-- https://juejin.cn/post/6984210440276410399#heading-49 -->
  <!-- el优先级 大于 $mount -->
- v-if 和 v-show 的区别? :heavy_check_mark:
  <!-- v-if决定要不要渲染
  v-show只隐藏 -->
- v-if 和 v-for 为什么不能放在同一个标签里？ :heavy_check_mark:
  <!-- vue2.0中v-for的优先级比v-if高 -->
- 为什么 vue2.0 中的组件模板要求只能有一个根元素？ :heavy_check_mark:
<!-- https://blog.csdn.net/weixin_43392489/article/details/114175220 -->
<!-- https://zhuanlan.zhihu.com/p/75230429 -->
  <!-- 一棵树只有一个根节点 -->
- vue 组件中的 data 为什么要求是个函数？为什么 vue 根实例没有这个要求？ :heavy_check_mark:
  <!-- 防止不同组件之间的变量污染
  根实例的数据在全局 -->
- $nextTick 的原理 :heavy_check_mark:
<!-- 有道云 -->
<!-- 把要处理的function装进一个数组里，然后通过一个settimeout来按顺序执行 -->
- keep-alive 的原理 :heavy_check_mark:
<!-- https://www.jianshu.com/p/9523bb439950 -->
<!-- 源码位置:src/core/components/keep-alive.js
keep-alive可以配置三个东西:include(需要缓存),exclude(不需要缓存),max(最大缓存数)
主要流程:需要缓存的VNode节点保存在this.cache中,在render时去this.cache中取缓存进行渲染
this.cache存Vnode
this.keys存Vnode的key
首先拿到keep-alive下的第一个Vnode，然后拿到他的key去匹配
exclude的组件直接跳过
include的组件
  先判断是否在缓存中:根据组件的ID+tag生成key来判断
    如果在缓存里就直接取
    如果不在缓存里就加入到this.cache中
    如果this.cache中的数据量超过max,则用LRU算法进行替换(最近最久未使用) -->
- keep-alive的缺点 :heavy_check_mark:
<!-- 占用内存
不好debug -->
- scoped原理 :heavy_check_mark:
<!-- https://segmentfault.com/a/1190000017508285 -->
<!-- 给div加上data-v-xxx 属性
给css加上element[data-v-xxx] -->
- Vue 项目可以进行哪些优化？ :heavy_check_mark:
  <!-- https://juejin.cn/post/6844903918753808398#heading-28 -->
  <!-- v-if和v-show
  v-for使用key
  computed有缓存
  keep-alive
  异步加载，vue3.0
  路由懒加载
  SSR -->
- Vue使用
  - vue 自定义指令
  <!-- v-permission v-loading-line -->
  - Vue中常用的修饰符有哪些？
  <!-- https://juejin.cn/post/7048496699907506207 -->
  <!-- 注意这篇文章里写的number修饰符的bug -->
  - props怎么自定义验证?
  <!-- https://juejin.cn/post/6984210440276410399#heading-42 -->
  - watch监听一个对象时，如何排除某些属性的监听?
  <!-- https://juejin.cn/post/6984210440276410399#heading-44 -->
  - computed如何实现传参？
  <!-- https://juejin.cn/post/6984210440276410399#heading-46 -->
  - vue的hook如何用？
  <!-- https://juejin.cn/post/6984210440276410399#heading-47 -->
  - 如果子组件改变props里的数据会发生什么
  <!-- https://juejin.cn/post/6984210440276410399#heading-41 -->
  - 动态指令 动态参数怎么用？
  <!-- https://juejin.cn/post/6984210440276410399#heading-50 -->
  - 相同的路由组件如何重新渲染？
  <!-- https://juejin.cn/post/6984210440276410399#heading-51 -->
  - 如何改变v-model的触发事件？
  <!-- https://juejin.cn/post/6984210440276410399#heading-52 -->
  - 如何统一监听vue组件报错？
  <!-- 原生js可以用window.onerror
  vue可以用errorCaptured钩子监听子组件报错，return false阻止向上传播或errorHandler进行全局监听
  注异步报错只有window.onerror监听得到
  一般errorCaptured用来监听一些重要，有风险组件的错误
  window.onerror和errorHandler候补全局监听 -->