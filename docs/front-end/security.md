# Web安全
<!-- https://github.com/CyC2018/CS-Notes/blob/master/notes/%E6%94%BB%E5%87%BB%E6%8A%80%E6%9C%AF.md -->

## XSS
- 什么是XSS？ :heavy_check_mark:
<!-- XSS就是把恶意代码写在页面里（反射型）或者服务端（存储型）里，让用户去执行 -->
- 如何防范？ :heavy_check_mark:
<!-- https://github.com/webVueBlog/Leetcode/blob/master/%E9%98%B6%E6%AE%B5%E4%B8%80/xss%E6%80%BB%E7%BB%93.md -->
<!-- 防范：
1.转义
2.在设置 cookie 时，加上 httpOnly 参数
3.在输出 html 时，加上 content security policy 的 http header (可以防止 xss 被攻击时，嵌入第三方脚本) -->
- 富文本的存储与渲染中, 如何防止富文本中的编写的代码导致的XSS攻击? :heavy_check_mark:
<!-- 1.限制输入标签，设置白名单，只允许用户输入特定的标签
2.转义
实际开发中可以用XSS库 -->
## CSRF
- 什么是CSRF？ :heavy_check_mark:
<!-- 冒充客户
CSRF就是窃取用户的登录状态去获取数据，比如token被偷了 -->
- 如何防范？ :heavy_check_mark:
<!-- https://github.com/webVueBlog/Leetcode/blob/master/%E9%98%B6%E6%AE%B5%E4%B8%80/csrf.md -->
<!-- 防范：
给Cookie设置samesite
服务端验证来源：Referer -->

## SQL注入

## DDoS
- 如何防范？
<!-- 软件层面不好做，一般通过硬件来解决，如阿里云WAF -->

## 点击劫持
- 什么是点击劫持？
<!-- 就是在页面里嵌入一个隐藏的iframe骗你去点击 -->
- 如何预防？
<!-- 添加个判断
if(top.location.hostname != self.location.hostname) {
  alert("您正在访问不安全的页面，即将跳转到安全页面！")
  top.location.hostname = self.location.hostname
} -->