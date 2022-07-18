# Webpack

- 为什么要进行打包和构建？ :heavy_check_mark:
<!-- 代码层面：
体积更小，如压缩
兼容低版本，如babel，sass
兼容性和错误提示，如eslint，polyfill
项目层面：
统一开发环境，规范 -->
- webpack和脚手架的区别？ :heavy_check_mark:
<!-- 脚手架，比如vue-cli，它是一整套的架构方案
webpack只是vue-cli中的一个工具 -->
- gulp和webpack的区别? :heavy_check_mark:
<!-- gulp是自动化工具，写好task然后让它去跑
webpack是打包工具，有现成的解决方案，配置好webpack.config.js即可 -->
- webpack和rollup的区别？
<!-- webpack生成代码有很多不是我们所写的逻辑代码, 比如一些他自有的模块加载功能
如果你要开发js库，那webpack的繁琐和打包后的文件体积就不太适用了。有需求就有工具，所以rollup的产生就是针对开发js库的
webpack对于代码分割和静态资源导入有着“先天优势”，并且支持热模块替换(HMR)，而rollup并不支持
所以当开发应用时可以优先选择webpack，若你项目只需要打包出一个简单的bundle包，并是基于ES6模块开发的，可以考虑使用rollup -->
- webpack有哪四个模块？ :heavy_check_mark:
<!-- entry output loader plugin -->
- mode设为production有什么区别？ :heavy_check_mark:
<!-- 会进行两个过程：
1.tree shaking(去除无用代码)
2.uglifyjs(代码压缩 混淆) -->
- loader和plugin的区别？ :heavy_check_mark:
<!-- loader：转换代码，如Sass -> CSS
plugin：在webpack打包的过程中提供一些钩子，执行操作 -->
- 常用loader有哪些？ :heavy_check_mark:
<!-- css-loader：把css转化为wepack能识别的格式
style-loader：把style标签插入到页面中
postcss-loader：自动添加 CSS3 部分属性的浏览器前缀
less-loader
sass-loader、node-sass
babel-loader
注：配置的loader是从右向左执行的，所以要这样写：['style-loader','css-loader','postcss-loader'] -->
- 常用plugin有哪些？ :heavy_check_mark:
<!-- html-webpack-plugin：将js自动引入到html中
clean-webpack-plugin：每次打包清空上次的dist
mini-css-extract-plugin：分离样式文件 -->
- 打包之后的map文件是什么？怎么去除？ :heavy_check_mark:
<!-- 项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错
有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
productionSourceMap:false -->
- ⭐webpack的构建流程？ :heavy_check_mark:
<!-- https://juejin.cn/post/6943468761575849992#heading-2 -->
<!-- https://juejin.cn/post/7002839760792190989#heading-1 -->
<!-- 1.读取webpack配置参数，创建Compiler对象开始解析项目
2.从入口文件（entry）开始解析，并找到依赖模块，递归构建出一个依赖关系树
3.采用对应的loader对文件进行编译，最终转化为js文件
4.在这个过程中，webpack采用发布订阅的模式，向外抛出一些hooks，plugin监听到自己对应的hooks就可以去插入执行任务 -->
  - module，chunk，bundle是什么？ :heavy_check_mark:
  <!-- 有道云 -->
- 如何提高webpack的构建速度?
<!-- 有道云 -->
<!-- https://juejin.cn/post/6844904031240863758#heading-23 -->
- 静态资源缓存如何实现？
<!-- https://juejin.cn/post/7002839760792190989#heading-4 -->
- 长期缓存如何实现？
<!-- 长期缓存，long term cache, 就是比如浏览器命中了强制缓存
如果文件发生变更，那浏览器怎么拿到最新的呢？
webpack可以给文件名加上hash值，这样内容变更，文件名就会变更 -->
- 如何分包？
<!-- https://www.jianshu.com/p/d26d7d46b759 -->
- 什么是Tree-shaking？如何配置？原理？ :heavy_check_mark:
<!-- 去除一些没用到的代码
mode：production即可 -->
- ⭐热更新原理? :heavy_check_mark:
<!-- https://www.cnblogs.com/frank-link/p/14838760.html -->
<!-- 自己去开了一个express应用，监听wepack的编译
当发生变化时对比生成文件的hash值，根据变化内容生成两个补丁文件：mainfest（包含新的hash值+变动的模块）和chunk.js模块
然后通过websocket把这两个文件发给浏览器，浏览器根据 manifest 文件获取模块变化的内容，从而触发 render 流程，实现局部模块更新 -->
- ⭐文件监听原理？ :heavy_check_mark:
<!-- 轮询判断文件的最后编辑时间是否发生变化，
发现不一致的时候不会立即告诉监听者，而是把文件修改缓存起来，等待一段时间，等待期间内如果有其他发生变化，会把变化列表一起构建，并生成到bundle文件夹 -->
- webpack引用外部cdn, 如何进行版本管理?
- Babel
  - Babel是什么？ :heavy_check_mark:
  <!-- 把ES6等高级语法翻译为ES5，兼容低版本浏览器 -->
  - babel/preset-env :heavy_check_mark:
  <!-- bable的plugin如果一个个去配，比如箭头函数转xx，async转xx就很麻烦
  babel/preset-env相当于一个集合，直接引入就可以了 -->
  - Babel-polyfill是什么？ :heavy_check_mark:
  <!-- 包含两个东西core.js和regenerator
  就是打补丁，比如判断一下浏览器支不支持Array.index这个方法，如果不支持就给他补上实现代码
  core.js包含了大部分常用的补丁
  regenerator就是那个yield，next语法的补丁 -->
  - Babel-runtime是什么？ :heavy_check_mark:
  <!-- 比如上面的Babel-polyfill，它打补丁的时候做法就是给全局对象挂一些东西
  window.promise
  Array.prototype.index
  这样就会污染全局作用域，Babel-runtime可以帮你装到一个独立的作用域里面，比如_babel_window.promise -->
  - Babel原理 :heavy_check_mark:
  <!-- https://juejin.cn/post/6844903682455109640#heading-55 -->
  <!-- 当代码转为字符串生成 AST，对 AST 进行转变最后再生成新的代码 -->
  - Babel 是怎么将 ES6 转换为 ES5 的？
  <!-- https://github.com/habc0807/fe-interview/issues/17 -->