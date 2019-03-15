/**
 * modular-vue 模块
 */
import activator from './activator'

export default {
  name: 'vue',
  extensionPoints: {
    'vue.app': {
    },
    'vue.plugin': {
    },
    'vue.options': {
    },
    'vue.router.addRoutes': {
    },
    'vue.router.event': {
    },
    'vuex.module': {
    }
  },
  activator
}
