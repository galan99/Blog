# 基本内容
- ECMA 
  - 基本数据类型有哪些? :heavy_check_mark:
  <!-- https://q.shanyue.tech/fe/js/515.html -->
  <!-- null undefined string number boolean object(arr,function)
  symbol,bigint(这个常常会忽略，最新加入的) 记忆:SB -->
  - 如何进行类型判断？ :heavy_check_mark:
  <!-- 基本数据类型用typeof，typeof的问题在于object，arr，null都返回Object，其它都正常
  引用数据类型用instanceOf
  数组可以用：Array.isArray()
  万能：Object.prototype.toString.call() -->
  - typeof和instanceof的原理 :heavy_check_mark:
  <!-- typeof原理:
    计算机底层可以用0和1的组合来区分类型
    object为000，而null也是000，所以用typeof区分不了
  instanceOf就是利用原型链来寻找 -->
  - Object.prototype.toString的原理 :heavy_check_mark:
  <!-- https://juejin.cn/post/6991653255847772167#heading-3 -->
  <!-- Object.prototype里的toString方法,记录着所有数据类型的构造函数 -->
  - 区分arr和object的方法有哪些 :heavy_check_mark:
  <!-- Object.prototype.toString().call()
  instanceOf
  Array.isArray() -->
  - 类型转换
    - 如何进行字符串和数字的互相转换？ :heavy_check_mark:
    <!-- 字符串转数字:
      Number()
      parseInt()
      +'123'
    数字转字符串:
      toString
      123+"" -->

- DOM
  - DOM中Element和Node的区别? :heavy_check_mark:
  <!-- Node就是节点,DOM树的最小组成单位
  Element继承于Node,是Node中的一种,其它几种为Text(文本节点),Comment(注释节点) -->
  - clientHeight, offsetHeight, scrollHeight的区别?
  <!-- https://img-blog.csdnimg.cn/img_convert/48c26c4c0a858914337b755e3d5b85b3.png -->
  <!-- client是元素的宽高
  offset是相对父元素的偏移量
  a.scrollHeight					真实内容的height + padding-top
  a.scrollWidth					真实内容的width + padding-left
  a.scrollLeft					滚动条卷去的宽度
  a.scrollTop					滚动条卷去的高度
  注：
  ①scrollHeight和scrollWidth在同一浏览器中，会受overflow:hidden的影响，在不同浏览器中也不一样
  ②js获取这些box属性自动进行四舍五入 所以得到的值都是整数 -->
  - DOM事件中target和currentTarget的区别？ :heavy_check_mark:
  <!-- https://www.jianshu.com/p/4c684e456926 -->
  <!-- target: 鼠标点击的那个元素
  currentTarget: 绑定事件的那个元素，currentTarget == this -->
  - 浏览器的剪切板中如何监听复制事件? :heavy_check_mark:
  <!-- https://q.shanyue.tech/fe/dom/444.html -->
  - 如何禁止复制? :heavy_check_mark:
  <!-- https://q.shanyue.tech/fe/dom/454.html -->
  - 如何把 DOM 转化为图片?
  <!-- https://q.shanyue.tech/fe/dom/437.html -->
  - 如何找到当前页面出现次数最多的 HTML 标签?
  <!-- https://q.shanyue.tech/fe/dom/418.html -->

- BOM
  - 如何监听 localStorage？ :heavy_check_mark:
  <!-- window.onstorage -->
  - 浏览器中监听事件函数 addEventListener 第三个参数有哪些值？ :heavy_check_mark:
  <!-- https://q.shanyue.tech/fe/dom/689.html -->
  - 如何判断当前环境是移动端还是PC端? :heavy_check_mark:
  <!-- https://github.com/shfshanyue/Daily-Question/issues/211 -->
  <!-- 通过navigator.userAgent获取到用户设备信息,然后用正则去判断 -->

## 运行机制
- 描述一下JS的执行过程 :heavy_check_mark:
<!-- 1.创建作用域
2.变量提升
3.执行代码 -->
  - 变量提升
  ::: tip 提示
  基本数据类型，只提升声明；  
  引用数据类型，提升整块；
  :::

## 运算符
- ==和===
<!-- https://www.zhihu.com/question/31442029 -->
> 123 == '123' ?  
> [2,3] == [2,3] ?  
> null == undefined ?  
<!-- ==：先转换类型，再对比值
===：类型和值都要相等 -->
- +-*%
> "1" + 1  
<!-- "11" -->
> "20" % 5
## Number
- API
  - 1.2345想保留两位小数 :heavy_check_mark:
  <!-- toFixed() -->
  - 判断是否为NAN :heavy_check_mark:
  <!-- isNaN() -->
    - Number.isNaN 与 globalThis.isNaN 有何区别? :heavy_check_mark:
    <!-- https://q.shanyue.tech/fe/js/640.html -->
  - 判断是否为整数 :heavy_check_mark:
  <!-- isInteger() -->
  - 将1.23转化为整数 :heavy_check_mark:
  <!-- parseInt() -->
  - 将1转化为浮点数 :heavy_check_mark:
  <!-- parseFloat() -->
- JS浮点数运算为什么会溢出？如0.1+0.2的问题。怎么处理？ :heavy_check_mark:
<!-- 溢出原因：JS才用IEEE754标准来表示一个数字，IEEE754：符号位+指数位+尾号位，而IEEE754又有尾数位数限制，所以超出部分就会被截掉，所以造成了精度损失
处理方法：
1.Math.js库,big.js库
2.乘n除n，有几位小数n就是几
3.转字符串，转数组，计算后再转化 -->
  - 0.1+0.2和0.3如何做相等比较？ :heavy_check_mark:
  <!-- https://q.shanyue.tech/fe/js/583.html -->
## String
- API
  - 字符串大小写转换 :heavy_check_mark:
  <!-- toLowerCase(),toUpperCase() -->
  - 在'abc'中查找'b' :heavy_check_mark:
  <!-- indexOf() -->
  - 把'abc','def'两个字符串拼接成'abcdef' :heavy_check_mark:
  <!-- concat -->
  - 把'按消耗排序'变成'消耗' :heavy_check_mark:
  <!-- replace() -->
  - 把'abc '中的空格去除 :heavy_check_mark:
  <!-- trim() -->
  - 把'123.45'分割为'123' , '45' :heavy_check_mark:
  <!-- spilit('.') -->
  - 判断'abc'中是否包含'ab' :heavy_check_mark:
  <!-- includes() -->
  - 判断'abc'是否以'a'开头,或以'a'结尾 :heavy_check_mark:
  <!-- startWith(),endWith() -->
## Array
- API
  - 把数组 [ '1' , '2' , '3' ] 变为字符串'1:2:3' :heavy_check_mark:
  <!-- arr.join()   -->
  - 将[1,2,3]变为[3,2,1]   :heavy_check_mark:
  <!-- arr.reverse -->
  - 对[3,6,8,3,2,1,3,4]进行排序 :heavy_check_mark:
  <!-- arr.sort   -->
  - 删除[1,2,3,4]中的2和3   :heavy_check_mark:
  <!-- arr.splice -->
  - 给[1,2,3]一次性添加多个元素:4,5,6 :heavy_check_mark:
  <!-- arr.concat   -->
  - 获取[1,2,3]中的[2,3]   :heavy_check_mark:
  <!-- arr.slice -->
  - 用reduce写个求和   :heavy_check_mark:
  - 求[1,2,3,4,5]的最大值  :heavy_check_mark:
  <!-- Math.max.apply(null, [1,2,3,4,5]) -->
  - 把'a','b','c'变为数组 :heavy_check_mark:
  <!-- Array.of() -->
  - 在[1,2,3,4,5]中找3 :heavy_check_mark:
  <!-- arr.find -->
  - 在[a,b,c]中插入fff变为[a,b,f,f,f,c] :heavy_check_mark:
  <!-- arr.fill() -->
- every,some,filter,map,forEach的区别 :heavy_check_mark:
- splice和slice哪个快?为什么?
  <!-- slice更快 -->
- 数组中有那些方法可以改变自身，那些不可以？ :heavy_check_mark:
<!-- https://q.shanyue.tech/fe/js/553.html -->
<!-- 改变原数组：栈队列操作，sort,splice,reverse(ssr) -->
- flatMap是什么？ :heavy_check_mark:
<!-- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap -->
<!-- 类似map，只不过有个flat(1)的功能，也就是拉平一层 -->
- 什么是类数组对象？ :heavy_check_mark:
<!-- 有length属性的对象 -->
- 类数组对象和可遍历对象有哪些? :heavy_check_mark:
<!-- 函数的arguments
原生操作dom返回的nodelist
set -->  
  - 类数组对象和数组的区别？ :heavy_check_mark:
  <!-- 1.可以通过index去访问
  2.没有数组的API -->
  - 类数组对象怎么转变为数组？
  <!-- https://q.shanyue.tech/fe/js/169.html#%E7%A8%80%E7%96%8F%E6%95%B0%E7%BB%84-sparse-array -->
    <!-- Array.from()
    slice() -->
- Array.sort()有什么隐患？如何解决？
- Array.sort()用的是什么排序？时间复杂度是多少？
<!-- 数组长度 <= 22 时，采用插入排序；> 22 时，采用快速排序 -->
- indexOf()的时间复杂度是多少

## Object
- API
  - 让对象的某个属性变成不可变值   :heavy_check_mark:
  <!-- Object.freeze() -->
  - 合并两个对象 :heavy_check_mark:
  <!-- Object.assign() -->
  - 判断一个对象是否有被数据劫持 :heavy_check_mark:
  <!-- Object.isExtensible() -->
- 对象的属性有哪两种类型？区别是什么？ :heavy_check_mark:
<!-- 分为数据属性和访问器属性，各可以配置4项东西
直接obj.a就是数据属性
Object.defineProperty()去写get和set就是访问器属性 -->
<!-- https://q.shanyue.tech/fe/js/564.html#%E6%95%B0%E6%8D%AE%E6%8F%8F%E8%BF%B0%E7%AC%A6-data-descriptor -->
<!-- https://zhuanlan.zhihu.com/p/142614026 -->
- 遍历一个对象的方法有哪些？ :heavy_check_mark:
<!-- https://q.shanyue.tech/fe/js/704.html -->
<!-- for in
object.keys()
Object.getOwnPropertyNames()
object.entries() -->
  - 遍历一个数组的方法有哪些？ :heavy_check_mark:
  <!-- forEach,map等
  for of 
  for in -->
  - for-in和for-of的区别？ :heavy_check_mark:
  <!-- for-in用于可枚举对象，也就是enumerable=true，对象，数组，字符串等都可用
  for-of用于可迭代对象，如数组，map，set，字符串 -->
  - for-await-of是干嘛的？ :heavy_check_mark:
  <!-- 用来遍历promise的，打印每个promise的结果 -->
  - 用for-in，Object.keys， Object.getOwnPropertyNames() 遍历对象的区别? :heavy_check_mark:
  <!-- for-in 遍历自身和原型链上enumerable=true的属性
  Object.kyes 遍历自身enumerable=true的属性
  Object.getOwnPropertyNames遍历自身所有属性，包括enumerable=false的 -->
- Object.is()与原来的比较操作符“==”、“===”的区别？ :heavy_check_mark:
<!-- https://juejin.cn/post/6981781580683411463 -->
<!-- ==会进行类型转换
===直接比较，不转换
Object.is在===的基础上，让Object.is(NaN,NaN)为true，Object.is(+0,-0)为false -->
- 深拷贝和浅拷贝 :heavy_check_mark:

## Function
- API
  - 改变函数作用域 :heavy_check_mark:
  ```js
  window.a = 'window'
  const obj = {
    a: 'obj',
  }
  function getA() {
    console.log(this.a)
  }
  // getA()要拿到obj下的a应该怎么写?
  ```
  <!-- getA.call(obj) -->
  - 如何实现多态？ :heavy_check_mark:
  <!-- 利用arguments属性 -->
- 声明一个函数有几种方式? :heavy_check_mark:
<!-- 1.function fn() {}
2.let fn = function() {}
3.let fn = new Function('title','console.log(title)') -->
  - 1和2的区别? :heavy_check_mark:
  <!-- 1有变量提升,2没有,具体去看后盾人 -->
- 函数执行过程 :heavy_check_mark:
<!-- 1.形成私有作用域
2.给参数赋值
3.预解析 变量提升
4.从上到下执行代码 -->
- 什么是块级作用域，要让var正常怎么操作？
<!-- https://www.bilibili.com/video/BV1YJ411R7ap?p=7 -->
- 执行上下文和作用域的区别？ :heavy_check_mark:
<!-- 作用域是静态的，声明代码时已经确定
执行上下文是动态的，运行时才创建，里面保存有变量，this
作用域是墓地，执行上下文是墓碑 -->
- this的指向
<!-- 调用时才知道指向谁  
构造函数:指向实例对象  
立即执行函数:指向window
箭头函数:继承父级作用域的this -->
  - 箭头函数的this指向哪?有什么隐患?
  <!-- 继承父级作用域的this -->
  <!-- https://www.bilibili.com/video/BV14J41117Yu?p=17 -->
  - 如何改变this的指向?这几种方式有什么区别? :heavy_check_mark:
  <!-- bind,call,apply
  bind不立即执行,另外两个立即执行
  call参数一个个传,apply参数传数组 -->
  - 用call、apply、bind能改变箭头函数的this指向吗? :heavy_check_mark:
  <!-- 不可以，它的this就是从父级继承过来的 -->
  - 什么是纯函数? :heavy_check_mark:
  <!-- https://q.shanyue.tech/fe/js/607.html -->
  <!-- 1.输出仅由输入决定，每一个固定的输入总是返回相同的输出
  2.不产生副作用 -->
  - 判断以下输出结果
  <!-- https://www.bilibili.com/video/BV14J41117Yu?p=22 -->
  ```js
    fn2 = fn1
    console.log(fn2 === fn1)
    fn2 = fn1.bind()
    console.log(fn2 === fn1)
  ```
  - 看代码写输出
  ```js
  'use strict'
  var a = 1;
  var obj = {
    a: 2,
    print: function() {
      console.log(this.a);
    }
  }
  console.log(obj.print());
  var print = obj.print;
  print();
  ```

- 闭包
  - 什么是闭包？
  ```js
  function fn() {
    let a = 0;
    return () {
      let b = 1;
      console.log(a++)
      console.log(b++)
    }
  }
  let test = fn();
  fn()()
  fn()()
  test()
  test()
  ```
  - 他的作用是什么？
  <!-- 应用场景: 比如要实现一个计数器,可以把计数值作为全局变量,但是这样会污染全局作用域,所以这时候就可以利用闭包让计数值常驻内存 -->
  - 写实例

- 原型
  - 什么是原型？什么是原型链条？(画图) :heavy_check_mark:
  <!-- 有道云 -->
  - 他的作用是什么？ :heavy_check_mark:
  - 哪个API可以判断某个属性是自己的还是他爹的,哪个API可以用来找爹 :heavy_check_mark:
  <!-- hasOwnProperty
  instanceOf -->
  - js获取原型的方法有哪些？ :heavy_check_mark:
    <!-- p.__proto__
    p.constructor.prototype
    Object.getPrototypeOf(p) -->
  - 某个变量直接写和写在prototype里有什么区别？ :heavy_check_mark:
  <!-- 写在prototype里是共享的 -->
  - 看代码写输出 :heavy_check_mark:
  ```js
  const father = {
    name: 'Kyson'
  }
  const son = {}

  son.__proto__ = father
  console.log(father)
  console.log(son.name)
  console.log(son.__proto__ === father)
  console.log(father.__proto__)
  console.log(father.__proto__.__proto__)
  ```

  ```js
  const fn = function(){}
  let f = new fn()

  console.dir(fn)
  console.dir(f)
  console.log(f.__proto__ === fn.prototype)
  console.log(fn.prototype.constructor === fn)
  console.log(fn.__proto__)
  console.log(fn.prototype.__proto__ === fn.__proto__.__proto__)
  ```

- 立即执行函数 :heavy_check_mark:
- 柯里化函数
  - 什么是柯里化函数？柯里化函数的应用？ :heavy_check_mark:
  <!-- 正则表达式那个例子 -->
  - 说一下JS的API有哪些应用到了函数柯里化的实现？
  - 什么是反柯里化？
- 直接console.log(fn)或alert(fn)会输出什么？ :heavy_check_mark:
<!-- 会去调用函数的toString方法 -->
- 什么是高阶函数？
<!-- https://hejialianghe.gitee.io/jsadvanced/function.html#_2-5-%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0 -->
<!-- 参数为函数或return出来的是函数，例如map，reduce -->
- 继承
  - ES5继承和E6继承的区别？ :heavy_check_mark:
  <!-- 其实就是问寄生组合式继承和E6继承的区别 -->
  <!-- ES5是通过call(this)来拿父的this
    先创建子类的实例的this，然后再把父类的方法添加到this上
  ES6是通过super()来拿父的this
    先创建父类的实例的this（这就是为什么要先调用父类的super），然后再用子类的构造函数修改this -->
  - 如何理解ES6中的class只是一个语法糖？ :heavy_check_mark:
  <!-- https://www.jianshu.com/p/fc79756b1dc0 -->
  - ES6里，继承的时候为什么一定要在constructor里调用super？ :heavy_check_mark:
  <!-- https://www.jianshu.com/p/fc79756b1dc0 -->
- new操作符做了什么事情？ :heavy_check_mark:
<!-- 1.创建一个对象
2.__proto__
3.绑定this,并执行构造函数
4.return -->
- for和forEach的区别 :heavy_check_mark:
<!-- https://juejin.cn/post/7018097650687803422 -->
<!-- for更快
forEach每次都会创建一个函数来调用，所以有额外的开销 -->

## Math
- API
  - 最大值,最小值 :heavy_check_mark:
  <!-- Math.max Math.min -->
  - 9.6向上取整 :heavy_check_mark:
  <!-- Math.ceil -->
  - 9.6向下取整 :heavy_check_mark:
  <!-- Math.floor() -->
  - 9.6四舍五入 :heavy_check_mark:
  <!-- Math.round() -->
  - -8的绝对值 :heavy_check_mark:
  <!-- Math.abs() -->
  - 生成n到m之间的随机整数
  <!-- Math.floor(Math.random()*(m-n+1)+n) -->
  - 去除1.234的小数部分
  - 判断正负和0 :heavy_check_mark:
  <!-- Math.sign() -->

## Date
:::tip 提示
注意月份的参数范围为0~11
:::
## 事件
<!-- https://lucifer.ren/fe-interview/#/topics/browser/event?id=%e6%a1%86%e6%9e%b6%e4%b8%ad%e7%9a%84%e4%ba%8b%e4%bb%b6 -->
- 什么是事件模型？有什么区别？
<!-- 可以理解给给div绑定事件的方式
btn.onclick是DOM 0模型
缺点：只能绑定一个事件
比如
  btn.onclick = fn1
  btn.onclick = fn2
最后生效的只有fn2
btn.addEventListener是DOM 2模型，有事件流 -->
- 什么是事件流？
::: tip 提示
因为有事件流的存在,所以给子元素绑定事件时要注意阻止冒泡
:::
- 事件对象
- 什么是事件委托？
<!-- https://juejin.cn/post/6844903682455109640#heading-36 -->
<!-- 把一堆子元素的事件绑定在一个父元素上，如派宿舍长出去拿快递 -->
- 默认事件有哪些？
<!-- a标签：默认跳转
form表单的submit按钮：默认跳转
reset按钮：默认重置表单 -->

## ES6
- let const class
  - 三个大变化是什么? :heavy_check_mark:
  <!-- 1.变量提升
  2.不能重复声明
  3.有块级作用域 -->
  - 如何理解const的值是不变的? :heavy_check_mark:
<!-- 对于基本类型,你变了就报错
对于引用类型,只能保证指针指向的地址不变,里面的内容还是可以变的
如果里面的内容不想让他变就用Object.freeze() -->
- set map
- 箭头函数与普通函数的区别? :heavy_check_mark:
<!-- 1.写法不同
2.箭头函数的this从上级作用域继承
3.箭头函数没有arguments,用...替代
4.箭头函数没有prototype
5.不可以使用yield命令，因此箭头函数不能用作 Generator函数 -->
- 箭头函数为什么没有arguments? :heavy_check_mark:
<!-- https://segmentfault.com/q/1010000022457622?utm_source=tag-newest -->
- 什么时候不能用箭头函数？
<!-- 去看网盘里的慕课网面试题，主要跟this有关 -->
- 箭头函数的实现
- 什么时候需要用到Symbol？ :heavy_check_mark:
<!-- 有道云 -->
- 用ES6简写以下代码
  ```js
  let a = arr[0];
  let b = arr[1];
  let c = arr[3];
  ```
  <!-- let [a, b, c] = arr -->
  ```js
  let a = 'k'
  let b = 'y'
  let c = 's'
  let d = 'o'
  let e = 'n'
  ```
  <!-- let [a,b,c,d,e] = 'kyson' -->
  ```js
  let name = obj.name;
  let id = obj.id;
  ```
  <!-- let {name, id} = obj -->
  ```js
  fn(arr[0], arr[1])
  let arr_copy = [arr[0], arr[1]]
  ```
  <!-- fn(...arr)
  let arr_copy = [...arr] -->

## ES7
<!-- https://juejin.cn/post/7012412166254886942 -->
- ES7增加了什么内容？ :heavy_check_mark:
<!-- 两个
1.数组增加了includes API
arr.includes('xxx')
2.指数操作符
2 ** 10 // 输出1024，与Math.pow(2，10)效果相同 -->
- includes和indexOf的区别 :heavy_check_mark:
<!-- let arr = [NaN]
arr.indexOf(NaN) 输出-1,找不到
arr.includes(NaN) 输出true,可以找到 -->

## ES8
- ES8增加了什么内容？ :heavy_check_mark:
<!-- async/await
Object.values(),Object.entries(),Object.getOwnPropertyDescriptors()
String.prototype.padStart,String.prototype.padEnd
函数参数列表结尾允许逗号 -->

## ES9
<!-- https://juejin.cn/post/6844903811622912014#heading-25 -->

## ES10

## 异步
- 回调
- promise
  - promise.all()和promise.race()是干嘛的？ :heavy_check_mark:
  - Promise.allSettled()是干嘛的？ :heavy_check_mark:
  <!-- https://q.shanyue.tech/fe/js/247.html -->
  <!-- 返回每个promise的结果,成功和失败的都有 -->
  - promise抛出异常有几种方式？
  <!-- https://www.bilibili.com/video/BV15J411G7FG?p=15 -->
  - 用promise写一个缓存
  <!-- https://www.bilibili.com/video/BV15J411G7FG?p=22 -->
- async/await
  - 为什么要把promise链式调用转换成async await，有什么好处？
  - 缺点是什么？
  <!-- 缺点在于滥用 await 可能会导致性能问题，因为 await 会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码失去了并发性。 -->
## 前端模块化
<!-- https://juejin.cn/post/6881241853258104839 -->
- 为什么要进行模块化？ :heavy_check_mark:
<!-- 隔离变量，防止污染 -->
- 模块化的原理是啥？ :heavy_check_mark:
<!-- https://www.jianshu.com/p/33d53cce8237 -->
<!-- 包装在一个自执行函数里 -->
- 模块化规范有哪些？有什么区别？ :heavy_check_mark:
<!-- 有道云 -->
- require与import的区别 :heavy_check_mark:
<!-- 有道云 -->
<!-- import 的ES6 标准模块； 
require 是 AMD规范引入方式；
import是编译时调用，静态的，所以必须放在文件开头;是解构过程
require是运行时调用，动态的，所以require理论上可以运用在代码的任何地方;是赋值过程。其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量 -->

## 其他

- axios
  - ajax fetch axios的区别？ :heavy_check_mark:
  <!-- ajax是一种技术统称
  fetch是浏览器提供的一个实现ajax的api
  axios是一个ajax库 -->
  - axios如何取消请求、原理 :heavy_check_mark:
  <!-- https://juejin.cn/post/7044532592640524324#heading-16 -->
  <!-- 使用：
  1.调用CancelToken构造函数创建cancelToken实例对象，并创建一个 cancel函数
  2.调用cancel函数，取消请求
  原理：
  创建一个promise对象，当调用cancel方法后，改变promise的状态，触发then
  在里面调用XMLHttpRequest 的abort方法取消请求，然后调用reject让外层的promise改为failed状态 -->
  - 哪些场景需要取消重复请求？ :heavy_check_mark:
  <!-- 1.疯狂切换表格分页器的页码，这样就需要取消上一个请求
  2.A组件跳到B组件，而有可能A组件的请求还没得到响应，这些请求已经不需要的了就可以取消掉了 -->
  - 如何设计取消重复请求的方案？ :heavy_check_mark:
  <!-- 方案一：防抖
  方案二：结果返回前，禁用按钮
  方案三：
  https://juejin.cn/post/6865909895913766926
  一个arr来存储请求的url和method
  每次请求，如果arr里有相同的请求，就取消，没有就正常请求，然后加入arr里 -->
- 什么时候用try-catch？ :heavy_check_mark:
<!-- 有可能出错的对方，如
1.await 一个promise
2.JSON.parse -->
- 拖拽原生实现方式
- 如何把 json 数据转化为 demo.json 并下载文件？
<!-- https://q.shanyue.tech/fe/html/352.html -->
- base64
<!-- https://juejin.cn/post/6844903698045370376 -->
  - 什么是 base64 编码？
  <!-- base64用64个可打印字符来表示二进制
  什么是可打印字符呢？就是ASCII编码里除控制字符和通信字符的其它字符，如LF换行，DEL删除 -->
  - 有什么用？
  <!-- 有些网络传送渠道并不支持所有字符，比如传统的邮件只支持可打印字符，图片二进制流有的也不是可打印字符，所有可以把这些转为base64来传送
  一句话:让图片等文件能在各个传输渠道正常传输
  应用场景：
  https://juejin.cn/post/6989391487200919566#heading-2
  1.小图片转base64，减少http请求
  在 Web 项目开发过程中，为了减少 HTTP 请求的数量，对应一些较小的图标，我们通常会考虑使用 Data URL 的形式内嵌到 HTML 或 CSS 文件中。
  2.前端本地上传图片后进行预览 -->
  - base64的缺点是什么?
  <!-- 1.图片转为base64,体积会增大3倍以上,所以如果图片较大，图片的色彩层次比较丰富，则不适合使用这种方式，因为该图片经过 base64 编码后的字符串非常大，会明显增大 HTML 页面的大小，从而影响加载速度。
  2.编码和解码需要额外工作量 -->
  - js中如何转base64？
  <!-- btoa: 字符串 -> base64
  atob：base64 -> 字符串
  var str = 'javascript';
  window.btoa(str)
  //转码结果 "amF2YXNjcmlwdA=="
  window.atob("amF2YXNjcmlwdA==")
  //解码结果 "javascript" -->
  - 什么是 Data URL？
  <!-- https://q.shanyue.tech/fe/html/478.html -->
  <!-- 把图片转换为base64地址
  Data URL的格式：data:[<mediatype>][;base64],<data> -->
- blob
  - 什么是blob?
  <!-- 一个可以当作文件用的二进制数据 -->
  <!-- File对象是Blob对象的一种 -->
  - 什么是Object URL？
  <!-- 把图片转为blob地址 -->
- js 代码压缩 minify 的原理是什么?
<!-- https://q.shanyue.tech/fe/js/138.html#title-%E3%80%90q137%E3%80%91js-%E4%BB%A3%E7%A0%81%E5%8E%8B%E7%BC%A9-minify-%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88-js-%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%AB%98%E9%A2%91%E9%9D%A2%E8%AF%95%E9%A2%98-description-%E3%80%90q137%E3%80%91js-%E4%BB%A3%E7%A0%81%E5%8E%8B%E7%BC%A9-minify-%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88-%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8%E9%9D%A2%E8%AF%95%E9%A2%98%E3%80%81%E9%98%BF%E9%87%8C%E8%85%BE%E8%AE%AF%E9%9D%A2%E8%AF%95%E9%A2%98%E3%80%81%E7%BE%8E%E5%9B%A2%E5%B0%8F%E7%B1%B3%E9%9D%A2%E8%AF%95%E9%A2%98%E3%80%82 -->
<!-- 转化成ast，然后根据优化策略来压缩，如去除多余空格，缩短变量名 -->
- 如何在url中传递数组参数？
<!-- https://q.shanyue.tech/fe/js/178.html -->
- 什么是JSBridge？原理是什么？ :heavy_check_mark:
<!-- 有道云 -->
- js的严格模式有什么特点？
<!-- 网盘 -->
<!-- 记忆口诀：参重名 声 this with eval
函数参数不能重名
全局变量必须要有声明，不能直接n=10
禁止this指向window
禁止使用with
可以通过eval创建作用域 -->
- requestIdleCallback和requestAnimationFrame的区别？ :heavy_check_mark:
<!-- requestAnimationFrame是每次渲染完执行
requestIdleCallback是空闲时才执行 -->
- SDK和API的区别？
<!-- https://www.zhihu.com/question/21691705 -->
<!-- SDK是一杯密封的饮料，API是饮料上的吸管 -->

## 看代码写输出
- 数组
```js
let arr = [];
arr[0]=0;
arr[1]=1;
arr.foo='a';
console.log(arr.length)
```
<!-- 数组的本质也是一个对象，此处length和foo为arr的两个属性 -->
```js
['1','2','3'].map(parseInt)
```
<!-- 相当于parseInt('1',0),parseInt('2',1),parseInt('3',2)
所以输出结果为[1,NaN,NaN] -->
- this
```js
var color = 'green';
var test = {
  color:'blue',
  getColor:function(){
    var color = 'red';
    console.log(this.color); 
  }
}
var getColor = test.getColor;
getColor();							
test.getColor();							
```
- 作用域
- 原型
- 闭包
- 异步
```js
console.log(1)
setTimeout(function() {
    console.log(2)
    
    new Promise(function(resolve) {
        console.log(3)
        resolve(4)
    }).then(function(num) {
        console.log(num)
    })
}, 300)
new Promise(function(resolve) {
    console.log(5)
    resolve(6)
}).then(function(num) {
    console.log(num)
})
setTimeout(function() {
    console.log(7)
}, 400)
```
```js
async function async1() {
    console.log( '1' )
    await async2()
    console.log( '2' )
}

async function async2() {
    console.log( '3' )
}

console.log( '4' )

setTimeout( function () {
    console.log( '5' )
}, 0 )

async1();

new Promise( function ( resolve ) {
    console.log( '6' )
    resolve();
} ).then( function () {
    console.log( '7' )
} )

console.log( '8' )
```

<!-- https://juejin.cn/post/6844903682455109640#heading-11 -->
```js
var a = 0
var b = async () => {
  a = a + await 10
  console.log('2', a) // -> '2' 10
  a = (await 10) + a
  console.log('3', a) // -> '3' 20
}
b()
a++
console.log('1', a) // -> '1' 1
```
```js
Promise.resolve(console.log(0))
  .then(() => {
    console.log(1);
    Promise.resolve(console.log(5))
      .then(() => console.log(3))
      .then(() => console.log(4))
      .then(() => console.log(6));
  })
  .then(() => console.log(2))
  .then(() => console.log(7));
console.log(77)
```
```js
Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
```
<!-- 0，然后4被加入队列
1，
然后4执行，但是没有打印
2，然后console.log(4)加入队列
3
4
5
6 -->
- JSON
<!-- https://q.shanyue.tech/fe/js/149.html -->
```js
const obj = {
  a: 3,
  b: 4,
  c: null,
  d: undefined,
  get e() {},
};

console.log(JSON.stringify(obj));
```
- ==
<!-- https://q.shanyue.tech/fe/js/586.html -->
```js
[] == "";
[3] == 3;
[] == false;
42 == true;
```