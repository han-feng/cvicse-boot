/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default {
  namespaced: true,
  modules,
  state: {
    uuid: '',
    token: ''
  },
  getters: {
    isLogin (state) {
      return state.token !== ''
    }
  },
  mutations: {
    /**
     * @description 设置 uuid
     * @param {Object} state vuex state
     * @param {String} uuid uuid
     */
    setUuid (state, uuid) {
      state.uuid = uuid
    },
    /**
     * @description 设置 token
     * @param {Object} state vuex state
     * @param {String} token token
     */
    setToken (state, token) {
      state.token = token
    },
    /**
     * @description 清除登录信息
     * @param {Object} state vuex state
     */
    clean (state) {
      state.uuid = ''
      state.token = ''
    }
  }
}
