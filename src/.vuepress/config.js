const { description } = require('../../package')
const path = require('path')
let dynamicRoutes = []
module.exports = {
  extendPageData ($page) {
    //contains list of pages data
    const routes = $page._context.pages
    routes.map ((urlPath) => {
      let addPath = urlPath.path.replace(".html", "")
      let filePath = urlPath.path.replace(".html", ".md")
      dynamicRoutes.push({
        path: addPath,
        filePath: path.resolve(__dirname, '../' + filePath)
      })
    })
  },
  additionalPages: [
    dynamicRoutes.map((data) => {
      return data
    })
  ],
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
   themeConfig: {
     repo: '',
     editLinks: false,
     docsDir: '',
     editLinkText: '',
     lastUpdated: false
   },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
