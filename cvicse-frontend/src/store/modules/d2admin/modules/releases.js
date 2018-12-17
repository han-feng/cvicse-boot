import util from '@/libs/util.js'

export default {
  namespaced: true,
  state: {
    name: process.env.VUE_APP_NAME,
    version: process.env.VUE_APP_VERSION,
    buildTime: process.env.VUE_APP_BUILD_TIME
  },
  mutations: {
    /**
     * @description 显示版本信息
     * @param {Object} state vuex state
     */
    versionShow (state) {
      util.log.capsule(state.name, `v${state.version}`)
      if (process.env.NODE_ENV === 'development') {
        console.log(process.env)
      }
    }
  }
}
