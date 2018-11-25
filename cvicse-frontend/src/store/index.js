import Vue from 'vue'
import Vuex from 'vuex'
import vuexAlong from 'vuex-along'

import d2admin from './modules/d2admin'
import setting from '@/setting.js'

Vue.use(Vuex)

vuexAlong.setKey(`${setting.releases.name}-${setting.releases.version}`)
vuexAlong.onlySession(true)
// vuexAlong.watch(['d2admin'], true)
// vuexAlong.watchSession(['session'], true)

export default new Vuex.Store({
  modules: {
    d2admin
  },
  plugins: [vuexAlong]
})
