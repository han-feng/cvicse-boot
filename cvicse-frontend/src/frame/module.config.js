/**
 * 模块描述文件
 */
import d2AdminVuePlugin from '@/plugin/d2admin'
import d2AdminVuexModule from '@/store/modules/d2admin'

import vueOptions from './vue.options'
import vuePlugin from './vue.plugin'
import vueRouterEvent from './vue.router.event'
import routes from './routes'
import session from '@/store/modules/session'

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
