import { cloneDeep } from 'lodash'

export default {
  methods: {
    _switchData (key) {
      if (this._page_datas === undefined) {
        // 初始化内部数据对象
        this._page_datas = {}
        this._page_data = cloneDeep(this.$data)
      }
      let data = this._page_datas[key]
      if (data === undefined) {
        data = cloneDeep(this._page_data)
        this._page_datas[key] = data
      }
      // this.$data = data
      for (let i in data) {
        this.$data[i] = data[i]
      }
    }
  },
  // 第一次进入或从其他组件对应路由进入时触发
  beforeRouteEnter (to, from, next) {
    const key = to.fullPath
    if (key) {
      next(vm => {
        vm._switchData(key)
      })
    }
  },
  // 在同一组件对应的多个路由间切换时触发
  beforeRouteUpdate (to, from, next) {
    const key = to.fullPath
    if (key) {
      this._switchData(key)
      next()
    }
  }
}
