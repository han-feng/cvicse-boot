<template>
  <Button class="d2-mr btn-text can-hover" type="text" @click="handleClick">
    <d2-icon name="search" style="font-size: 18px;"/>
  </Button>
</template>

<script>
import { Button } from 'element-ui'

export default {
  components: {
    Button
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>
