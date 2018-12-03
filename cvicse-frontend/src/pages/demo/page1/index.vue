<template>
  <d2-container>
    <h1 class="d2-mt-0">权限测试</h1>
    <Row class="d2-mb" v-if="checkPermission('/demo/test1')">
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="warning" v-if="checkPermission('/demo/test2')">警告按钮</Button>
      <Button type="danger" v-if="checkPermission('/demo/test3')">危险按钮</Button>
    </Row>
    <Row class="d2-mb"  v-if="checkPermission('/demo/test2')">
      <Button plain>朴素按钮</Button>
      <Button type="primary" plain>主要按钮</Button>
      <Button type="success" plain>成功按钮</Button>
      <Button type="info" plain>信息按钮</Button>
      <Button type="warning" plain>警告按钮</Button>
      <Button type="danger" plain v-if="checkPermission('/demo/test3')">危险按钮</Button>
    </Row>
    <Row class="d2-mb" v-if="checkPermission('/demo/test3')">
      <Button round>圆角按钮</Button>
      <Button type="primary" round>主要按钮</Button>
      <Button type="success" round>成功按钮</Button>
      <Button type="info" round>信息按钮</Button>
      <Button type="warning" round>警告按钮</Button>
      <Button type="danger" round>危险按钮</Button>
    </Row>
  </d2-container>
</template>

<script>
// import { Tag, Tabs, TabPane, Autocomplete, Table, TableColumn, Submenu, Dropdown, DropdownMenu, DropdownItem, Menu, MenuItem, Tooltip, Badge, Card, Form, FormItem, Input, Button, Dialog, Row, Col } from 'element-ui'
import { Button, Row } from 'element-ui'

export default {
  name: 'page1',
  components: {
    Button,
    Row
  }
}
</script>
