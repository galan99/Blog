# Vue 3.0

- 为什么要用Proxy代替defineProperty？ :heavy_check_mark:
<!-- 1.definePropertty无法监听新增或删除的属性，而Proxy可以监听整个对象
2.Proxy可以按需响应式
一个对象的属性如果是深层嵌套的，defineProperty需要执行递归去给每个属性创建getter，setter
而Proxy是需要访问到深层属性的时候才用getter去递归，优化性能 -->
- Proxy的缺点 :heavy_check_mark:
<!-- 存在浏览器兼容问题 -->
- vue2 vue3 React三者diff算法的区别? :heavy_check_mark:
<!-- 有道云 -->
- 为什么vue3选择了hooks？
<!-- https://juejin.cn/post/7066951709678895141 -->