import { mapMutations } from 'vuex'

export default {
  name: 'external',
  render: h => h(),
  data () {
    return {
      key: ''
    }
  },
  methods: {
    ...mapMutations('session', [
      'enterIframe',
      'leaveIframe',
      'closeIframe'
    ])
  },
  // 第一次进入或从其他组件对应路由进入时触发
  beforeRouteEnter (to, from, next) {
    const key = to.fullPath
    const src = to.query.src
    console.log('>>>>>', src, key)
    next(vm => {
      vm.key = key
      vm.enterIframe({ key, src })
    })
  },
  // 在同一组件对应的多个路由间切换时触发
  beforeRouteUpdate (to, from, next) {
    const key = to.fullPath
    const src = to.query.src
    this.enterIframe({ key, src })
    next()
  },
  // 导航离开该组件的对应路由时调用
  beforeRouteLeave (to, from, next) {
    this.leaveIframe()
    next()
  },
  beforeDestroy () {
    this.closeIframe(this.key)
  }
}
