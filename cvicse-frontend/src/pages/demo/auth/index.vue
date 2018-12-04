<template>
  <d2-container>
    <h1 class="d2-mt-0">权限测试</h1>
    <Row :gutter="10">
      <ElCol :span="8">
        <Card shadow="hover">
          <div slot="header" class="clearfix">
            <span>已授权</span>
            <Button style="float: right; padding: 3px 0" type="text">{{name}}</Button>
          </div>
          <div class="d2-m-5" v-for="p in permissions" :key="p">
            <Tag>{{p}}</Tag>
          </div>
        </Card>
      </ElCol>
      <ElCol :span="8">
        <Card shadow="hover">
          <div slot="header" class="clearfix">
            <span>有权访问内容</span>
          </div>
          <div class="d2-m-5" v-for="p in pages" :key="p">
            <Button type="success" @click="$router.push(p)" v-if="checkPermission(p)">{{p}}</Button>
          </div>
          <div class="d2-m-5" v-for="i in items" :key="i">
            <Tag type="success" v-if="checkPermission(i)">{{i}}</Tag>
          </div>
        </Card>
      </ElCol>
      <ElCol :span="8">
        <Card shadow="hover">
          <div slot="header" class="clearfix">
            <span>无权访问内容</span>
          </div>
          <div class="d2-m-5" v-for="p in pages" :key="p">
            <Button type="danger" @click="$router.push(p)" v-if="!checkPermission(p)">{{p}}</Button>
          </div>
          <div class="d2-m-5" v-for="i in items" :key="i">
            <Tag type="danger" v-if="!checkPermission(i)">{{i}}</Tag>
          </div>
        </Card>
      </ElCol>
    </Row>
  </d2-container>
</template>

<script>
import { Button, Card, Row, Col, Tag } from 'element-ui'
import { mapState } from 'vuex'

export default {
  name: 'demo-auth',
  components: {
    Button,
    Card,
    Row,
    Tag,
    'ElCol': Col
  },
  data () {
    return {
      pages: ['/demo/page1', '/demo/page2', '/demo/page3', '/demo/notfound'],
      items: ['/demo/test1', '/demo/test2', '/demo/test3', '/demo/test4']
    }
  },
  computed: {
    ...mapState('session/user', [
      'name',
      'permissions'
    ])
  }
}
</script>
