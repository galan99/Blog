# 数据结构与算法
- 时间复杂度如何计算？
- 写完一个算法之后怎样判断哪个更快？
<!-- 增大数据量或者增大执行次数，然后对比console.time()和console.timeEnd()的结果 -->
## 树
- 如何存储一颗树？
- 先序 中序 后序
- 哈夫曼树是什么？
<!-- 用最小的成本到达目的地 -->
- 为什么二叉树这么重要？而不是三叉树 四叉树？
<!-- 可以二分，比如二叉搜索树，提高查询效率 -->
- 数组，链表，二叉树的特点
<!-- 数组：查询快，增删慢
链表：查询慢，增删快
二叉树：查询快，增删快 -->
- 什么是红黑树？
<!-- 一棵树要保持平衡有很多种方法，而红黑树是其中成本较低的一种 -->
## 图
- 如何存储一个图？
- 广度优先和深度优先
- 最小生成树是什么？
- 最短路径是什么？
<!-- 用最小的成本连通是所有节点 -->
- 关键路径是什么？

## 排序
- 冒泡排序
- 快速排序
- 折半排序
## 查找
- 二分查找

## 算法题
- 字符串
  - 反转一个字符串
  <!-- https://q.shanyue.tech/fe/js/470.html -->
  - js 如何全部替代一个子串为另一个子串?
  <!-- https://q.shanyue.tech/fe/js/361.html#%E6%80%BB%E7%BB%93-%E5%8F%8A%E7%9B%B4%E6%8E%A5%E7%AD%94%E6%A1%88 -->
- 数组
  - 创建一个数组大小为 100，每个值都为 0 的数组 :heavy_check_mark:
  <!-- https://q.shanyue.tech/fe/js/520.html -->
  <!-- const arr = new Array(100).fill(0) -->
  - 数组拉平 :heavy_check_mark:
  - 数组去重 :heavy_check_mark:
  <!-- https://q.shanyue.tech/fe/js/453.html -->
  - 旋转数组
  <!-- https://www.geekxh.com/1.0.%E6%95%B0%E7%BB%84%E7%B3%BB%E5%88%97/004.html#_02%E3%80%81%E9%A2%98%E7%9B%AE%E5%9B%BE%E8%A7%A3 -->
  - 实现一个数组洗牌函数 shuffle
  <!-- https://q.shanyue.tech/fe/js/455.html -->
- function
  - 柯里化 :heavy_check_mark:
    - 定参，add(1)(2)(3)或add(1,2)(3) :heavy_check_mark:
    - 不定参，无限累加 :heavy_check_mark:
    <!-- https://q.shanyue.tech/fe/js/428.html -->
  - 实现一个new :heavy_check_mark:
  - 实现instanceof
  - 写一个bind :heavy_check_mark:
  - 写一个sortbind
  <!-- https://q.shanyue.tech/fe/js/33.html -->
  - 写一个call :heavy_check_mark:
  - 写一个flatMap
  <!-- https://q.shanyue.tech/fe/js/229.html -->
  - 用ES5实现继承 :heavy_check_mark:
  <!-- 有道云 -->
  <!-- 会写寄生组合式继承就行 -->
- lodash
  - 深拷贝和浅拷贝 :heavy_check_mark:
    - 用JSON.parse(JSON.stringify())有什么弊端？ :heavy_check_mark:
    <!-- https://www.jianshu.com/p/52db1d0c1780 -->
  - 节流和防抖函数 :heavy_check_mark:
  <!-- 节流：上锁
  防抖：timer -->
  - 实现一个 once 函数，记忆返回结果只执行一次 :heavy_check_mark:
  :::tip 描述
  ```js
  const f = (x) => x;

  const onceF = once(f);

  //=> 3
  onceF(3);

  //=> 3
  onceF(4);
  ```
  :::
  <!-- https://q.shanyue.tech/fe/js/406.html -->
  - 实现一个merge
  <!-- https://q.shanyue.tech/fe/js/498.html -->
- promise
  - 实现一个简化的promise
  - 实现promise.race :heavy_check_mark:
  <!-- https://juejin.cn/post/7069805387490263047#heading-9 -->
  - 实现promise.all :heavy_check_mark:
  <!-- https://juejin.cn/post/7069805387490263047#heading-9 -->
  - 实现promise.any
  <!-- https://q.shanyue.tech/fe/js/499.html -->
- 类型判断
- 类型转换
  - number与string  
  - string与Array
- 括号匹配
- 随机数？优化？
  - 写出区间[n,m]的随机数
- 生成一个随机字符串
<!-- https://q.shanyue.tech/fe/js/637.html -->
- 给定一个数字，返回$开头并且带千分位符号的字符串
> 123456 -> $123,456  
> 12345678.21 -> $12,345,678.21
- 实现大数相加
- 二维矩阵，90度旋转
- 实现一个函数，返回一个n,m的随机数
- 实现一个 async/await
<!-- https://q.shanyue.tech/fe/js/241.html -->
- 用JS写一个发布订阅器 模拟vue中event的实现
- 实现isEqual
<!-- https://q.shanyue.tech/fe/js/614.html -->
- 实现isEmpty
- 实现一个JSONP
- 实现set
<!-- https://www.cnblogs.com/hui-fly/p/9459152.html -->
- reduce
  - 用reduce实现map,输入:myMap(arr,cb)
- 实现一个compose函数
- 实现一个函数 isPlainObject 判断是否为纯对象?
<!-- https://q.shanyue.tech/fe/js/409.html -->
- JS 如何实现一个同步的 sleep 函数?
<!-- https://q.shanyue.tech/fe/js/429.html -->
- JS 如何实现一个 sleep/delay 函数?
<!-- https://q.shanyue.tech/fe/js/442.html -->
- 实现一个函数用来解析 URL 的 querystring
<!-- https://q.shanyue.tech/fe/js/436.html -->
- 如何实现一个 sample 函数，从数组中随机取一个元素?
<!-- https://q.shanyue.tech/fe/js/443.html -->
- 如何过滤数组中的 falsy value？
<!-- https://q.shanyue.tech/fe/js/503.html -->
- 实现二进制与十进制的互相转化的两个函数
<!-- https://q.shanyue.tech/fe/js/684.html -->
- 实现扁平数据结构转Tree
<!-- https://juejin.cn/post/6983904373508145189 -->
<!-- https://juejin.cn/post/6983904373508145189 -->
## leetcode
- 数组
<!-- 总结：
排序
双指针
Map
画图
 -->
  - 两个数组的交集
  > https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
  - 有两个升序数组，arr1 = [1,2,4,8]和arr2 = [1,2,4,5,6,8]，判断arr1的元素是否都存在arr2
  - 合并两个有序数组 :heavy_check_mark:
  > https://leetcode-cn.com/problems/merge-sorted-array/
  - 股票的最大利润
  - 两数之和
  > https://leetcode-cn.com/problems/two-sum/
  - 三数之和
  - 移动0
  > https://leetcode-cn.com/problems/move-zeroes/
  - 最大子数组和
  > https://leetcode-cn.com/problems/maximum-subarray/
  - 移除元素
  > https://leetcode-cn.com/problems/remove-element/
  - 找到所有数组中消失的数字 :heavy_check_mark:
  > https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/
  - 搜索插入位置 :heavy_check_mark:
  > https://leetcode-cn.com/problems/search-insert-position/
- 字符串
<!-- 总结：
Map
 -->
  - 连续字符
  > https://leetcode-cn.com/problems/consecutive-characters/
  - 字符串相加
  > https://leetcode-cn.com/problems/add-strings/
  <!-- https://leetcode-cn.com/problems/add-strings/solution/zi-fu-chuan-xiang-jia-by-leetcode-solution/ -->
  - 切换大小写，字符串里大写变小写，小写变大写
  - 实现toLowerCase
  > https://leetcode-cn.com/problems/to-lower-case/
  <!-- https://q.shanyue.tech/fe/js/656.html -->
  - 旋转字符串
  > https://leetcode-cn.com/problems/rotate-string/submissions/
  - 最后一个单词的长度
  > https://leetcode-cn.com/problems/length-of-last-word/submissions/
  - 无重复字符的最长子串 :heavy_check_mark:
  > https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
  - 比较版本号 :heavy_check_mark:
  > https://leetcode-cn.com/problems/compare-version-numbers/
  - 字母异位词分组 :heavy_check_mark:
  > https://leetcode-cn.com/problems/group-anagrams/
  - 回文数
  > https://leetcode-cn.com/problems/palindrome-number/
  - 最长回文子串 :heavy_check_mark:
  > https://leetcode.cn/problems/longest-palindromic-substring/solution/zui-chang-hui-wen-chuan-shi-yong-shuang-cc725/
- 链表
<!-- 总结：三指针 -->
<!-- https://leetcode-cn.com/problems/linked-list-cycle/solution/yi-wen-gao-ding-chang-jian-de-lian-biao-wen-ti-h-2/ -->
  - 反转链表 :heavy_check_mark:
  > https://leetcode.cn/problems/reverse-linked-list/solution/fan-zhuan-lian-biao-by-leetcode-solution-d1k2/
  - 删除链表倒数第N个节点 :heavy_check_mark:
  > https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/dong-hua-yan-shi-kuai-man-zhi-zhen-19-sh-n9ih/
  - 合并两个有序链表 :heavy_check_mark:
  > https://leetcode-cn.com/problems/merge-two-sorted-lists/
  - 环型链表 :heavy_check_mark:
  > https://leetcode-cn.com/problems/linked-list-cycle/solution/yi-wen-gao-ding-chang-jian-de-lian-biao-wen-ti-h-2/
- 树
<!-- 总结：递归 -->
  - DFS :heavy_check_mark:
  > https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/hua-jie-suan-fa-104-er-cha-shu-de-zui-da-shen-du-b/
  - BFS :heavy_check_mark:
  > https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/er-cha-shu-de-ceng-xu-bian-li-by-leetcode-solution/
  - 求一棵二叉搜索树第k小的值
  > https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
  - 验证一棵树是否为二叉搜索树
  > https://leetcode-cn.com/problems/validate-binary-search-tree/
  <!-- https://www.geekxh.com/1.4.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%B3%BB%E5%88%97/403.html#_03%E3%80%81%E9%80%92%E5%BD%92%E6%B1%82%E8%A7%A3 -->
  - 二叉搜索树中的搜索
  > https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
  - 二叉树剪枝
  > https://leetcode-cn.com/problems/binary-tree-pruning/solution/er-cha-shu-jian-zhi-by-leetcode/
  <!-- https://www.geekxh.com/1.4.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%B3%BB%E5%88%97/408.html#_03%E3%80%81%E9%80%92%E5%BD%92%E6%B1%82%E8%A7%A3 -->
  - 路径总和 :heavy_check_mark:
  > https://leetcode-cn.com/problems/path-sum/
  - 求根节点到叶节点数字之和 :heavy_check_mark:
  > https://leetcode.cn/problems/sum-root-to-leaf-numbers/solution/qiu-gen-dao-xie-zi-jie-dian-shu-zi-zhi-he-by-leetc/
  - 最长同值路径
  > https://leetcode-cn.com/problems/longest-univalue-path/
  - n叉树的最大高度
- 排序
  - 冒泡排序
  - 快速排序
- 递归
  - 实现一个fibonacci函数，输入数字n，输出fibonacci数列的第n项数字，并给该函数加入缓存功能
  <!-- https://www.cnblogs.com/superlizhao/p/11603158.html -->
  <!-- https://www.nowcoder.com/discuss/379813?order=0&page=1&pos=82&type=0 -->
  - 全排列 :heavy_check_mark:
  > https://leetcode.cn/problems/permutations/solution/chou-xiang-cheng-jue-ce-shu-yi-ge-pai-lie-jiu-xian/
  - 岛屿数量 :heavy_check_mark:
  > https://leetcode.cn/problems/number-of-islands/solution/js-dao-yu-shu-liang-by-bertil-n1m3/
- 动态规划
  - 爬楼梯
  > https://leetcode-cn.com/problems/climbing-stairs/
  <!-- https://leetcode-cn.com/problems/climbing-stairs/solution/hua-jie-suan-fa-70-pa-lou-ti-by-guanpengchn/ -->
  - 最长上升序列
  > https://leetcode-cn.com/problems/longest-increasing-subsequence/
  <!-- https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-dong-tai-gui-hua-2/ -->
- 其它
  - top k问题
  <!-- https://zhuanlan.zhihu.com/p/76734219 -->
  - 输出100以内的质数
  - 找出数组中比左边大比右边的小的元素
    <!-- https://blog.csdn.net/qq_36328915/article/details/104902594 -->
  - 构造字典序尽可能小的字符串
  <!-- https://blog.csdn.net/qq_43504141/article/details/102677613 -->
  - 如何实现高效的英文单词前缀匹配（只讲思路，不用写代码）
  <!-- 看慕课网视频
  把单词库拆成对象结构（树结构），然后比如要查询kyson，就是arr.k.y.s.o.n -->
  - 实现一个LRU (最近最少使用) 缓存机制
  > https://leetcode-cn.com/problems/lru-cache/
  <!-- https://leetcode-cn.com/problems/lru-cache/solution/mapjie-fa-jian-dan-yi-dong-by-bella0929-8lpn/ -->
