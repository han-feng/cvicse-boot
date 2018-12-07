<template>
  <d2-container :filename="filename" type="card">
    <template slot="header">这个页面会被 keep-alive</template>
    <h2 class="d2-mt-0">编号：{{id}}</h2>
    <p class="d2-mt-0">在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存</p>
    <Input v-model="data.value" placeholder="input here" />
  </d2-container>
</template>

<script>
import { Input } from 'element-ui'
import BasePage from '@/mixins/BasePage'

/**
 * 带参路由多组参数使用同一个组件实例，需要在组件内部对多个参数的情况进行统一处理
 * 这里简单演示如何根据 id 管理多组数据对象
 */
export default {
  mixins: [ BasePage ],
  name: 'demo-params',
  components: {
    Input
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      data: { value: '' }
    }
  }
}
</script>
