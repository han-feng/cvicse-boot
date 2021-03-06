import { store } from 'modular-vue'
import util from '@/libs/util'
import setting from '@/setting'

export default {
  install (Vue, options) {
    Vue.config.errorHandler = function (err, instance, info) {
      Vue.nextTick(() => {
        // 添加 log
        store.dispatch('d2admin/log/add', {
          type: 'error',
          err,
          instance,
          info
        })
        // 只在开发模式下打印 log
        if (process.env.NODE_ENV === 'development') {
          util.log.capsule(`${setting.releases.name}`, 'ErrorHandler', 'danger')
          util.log.danger('>>>>>> 错误信息 >>>>>>')
          console.log(info)
          util.log.danger('>>>>>> Vue 实例 >>>>>>')
          console.log(instance)
          util.log.danger('>>>>>> Error >>>>>>')
          console.log(err)
        }
      })
    }
  }
}
