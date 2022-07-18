//------------------------------- Markdown
const Markdown = [
  {
      title: '学习Markdown',
      collapsable: false, 
      children: [
          '',
          '教程',
      ],
  }
]

//------------------------------ 前端基础
const FE = [
  {
      title: 'HTML',
      collapsable: true, 
      children: [
          '',
      ],
  },
  {
    title: 'CSS',
    collapsable: true, 
    children: [
        'css-1',
        'css-2',
        'css-3',
    ],
  },
  {
    title: 'JavaScript',
    collapsable: true, 
    children: [
        'js',
    ],
  },
  {
      title: 'Vue',
      collapsable: true, 
      children: [
          'vue',
          'vue-router',
          'vuex',
          'vue3',
      ],
  },
  {
    title: 'Webpack',
    collapsable: true, 
    children: [
      'webpack',
    ],
  },
  {
    title: 'Git',
    collapsable: true, 
    children: [
      'git',
    ],
  },
  {
    title: 'TypeScript',
    collapsable: true, 
    children: [
        'typescript',
    ],
  },
  {
    title: '计算机网络',
    collapsable: true, 
    children: [
        'network',
    ],
  },
  {
    title: '浏览器',
    collapsable: true, 
    children: [
        'browser',
    ],
  },
  {
    title: '数据结构与算法',
    collapsable: true, 
    children: [
        'algorithm',
    ],
  },
  {
    title: '操作系统',
    collapsable: true, 
    children: [
        'os',
    ],
  },
  {
    title: 'Web安全',
    collapsable: true, 
    children: [
        'security',
    ],
  },
  {
    title: '设计模式',
    collapsable: true, 
    children: [
        'design-mode',
    ],
  },
  {
    title: '智力题',
    collapsable: true, 
    children: [
        'iq',
    ],
  },
  {
    title: '高级前端开发',
    collapsable: true, 
    children: [
        'senior',
    ],
  },
]

//------------------------------ 项目实战
const Practice = [
  {
    title: '常用代码',
    collapsable: false, 
    children: [
      '',
      'css',
    ],
  },
  {
    title: '踩坑记录',
    collapsable: true, 
    children: [
      'fxxk',
    ],
  },
]

//--------------------------------- export
module.exports= {
  Markdown, 
  FE,
  Practice,
}