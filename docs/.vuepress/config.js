const path = require("path");

const {
  Markdown, 
  FE,
  Practice,
} = require('./introduction')

module.exports = {
  title: '前端小结',
  description: '个人总结',
  base: '/Blog/',
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    // 导航栏配置
    displayAllHeaders: true,//显示所有页面的标题链接
    lastUpdated: '上次更新时间', // string | boolean
    smoothScroll: true,
    nav: [
      { text: '主页', link: '/' },
      { 
        text: '教程', 
        items: [
            { text: '学习Markdown', link: '/markdown/' },
            { text: '前端基础', link: '/front-end/'},
            { text: '项目实战', link: '/practice/'},
        ]                
      },
      { text: 'Github', link: 'https://github.com/strugglexiang/docs.git' },
    ],
    sidebarDepth: 3, // 侧边栏显示3级
    sidebar: {
      '/markdown/': Markdown,
      '/front-end/': FE,
      '/practice/': Practice,
    }, 
    // sidebar: 'auto',
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@images": path.resolve(__dirname, './public/images')
      }
    }
  },
}