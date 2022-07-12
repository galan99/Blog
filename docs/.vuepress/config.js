const path = require("path");
module.exports = {
  title: 'My Blog',
  description: 'This is a blog',
  base: '/Blog/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@images": path.resolve(__dirname, './public/images')
      }
    }
  },
}