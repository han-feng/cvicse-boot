/**
 * 模块描述文件
 */
import vueOptions from './vue.options'

import vuePlugin from './vue.plugin'
import d2AdminVuePlugin from './plugin/d2admin'

import routes from './routes'
import vueRouterEvent from './vue.router.event'

import session from './store/session'
import d2AdminVuexModule from './store/d2admin'

session.storage = 'session'

export default {
  name: 'frame',
  dependencies: [
    'vue'
  ],
  extensions: {
    'vue.plugin': {
      frame: vuePlugin,
      d2admin: d2AdminVuePlugin
    },
    'vue.options': {
      frame: vueOptions
    },
    'vue.router.addRoutes': {
      frame: {
        parent: 'root',
        routes
      }
    },
    'vue.router.event': {
      frame: vueRouterEvent
    },
    'vuex.module': {
      session,
      d2admin: d2AdminVuexModule
    }
  },
  extensionPoints: {
    menu: {
    }
  }
}
