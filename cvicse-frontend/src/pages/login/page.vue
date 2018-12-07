<template>
  <div class="login-page">
    <div class="layer bg" id="login"></div>
    <div class="layer flex-center">
      <!-- logo部分 -->
      <div class="logo-group">
        <h2>请登录</h2>
      </div>
      <!-- 表单部分 -->
      <div class="form-group">
        <Card>
          <Form ref="loginForm" label-position="top" :rules="rules" :model="formLogin" size="default">
            <FormItem  prop="username">
              <Input type="text" v-model="formLogin.username" placeholder="用户名">
                <i slot="prepend" class="fa fa-user-circle-o"></i>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formLogin.password" placeholder="密码">
                <i slot="prepend" class="fa fa-keyboard-o"></i>
              </Input>
            </FormItem>
            <FormItem prop="code" v-if="requiredInputCode">
              <Input type="text" v-model="formLogin.code" placeholder="- - - -">
                <template slot="prepend">验证码</template>
                <template slot="append">
                  <img class="login-code" src="./image/login-code.png">
                </template>
              </Input>
            </FormItem>
            <Button size="default" @click="submit" type="primary" class="button-login">登录</Button>
          </Form>
        </Card>
      </div>
      <!-- 快速登录按钮 -->
      <Button size="default" type="info" class="button-help" @click="dialogVisible = true">
        快速选择用户（测试功能）
      </Button>
    </div>
    <Dialog
      title="快速选择用户"
      :visible.sync="dialogVisible"
      width="400px">
      <Row :gutter="10" style="margin: -20px 0px -10px 0px;">
        <Col v-for="(user, index) in users" :key="index" :span="8">
          <div class="user-btn" @click="handleUserBtnClick(user)">
            <d2-icon name="user-circle-o"/>
            <span>{{user.name}}</span>
          </div>
        </Col>
      </Row>
    </Dialog>
  </div>
</template>

<script>
import { Card, Form, FormItem, Input, Button, Dialog, Row, Col } from 'element-ui'
import config from './config/nasa'
import { mapActions } from 'vuex'

require('particles.js')

export default {
  components: {
    Card,
    Form,
    FormItem,
    Input,
    Button,
    Dialog,
    Row,
    Col
  },
  data () {
    return {
      // 快速选择用户
      dialogVisible: false,
      // 是否需要输入验证码
      requiredInputCode: false,
      users: [
        {
          name: '管理员',
          username: 'admin',
          password: 'admin'
        },
        {
          name: '编辑',
          username: 'editor',
          password: 'editor'
        },
        {
          name: '用户1',
          username: 'user1',
          password: 'user1'
        }
      ],
      // 表单
      formLogin: {
        username: 'admin',
        password: 'admin',
        code: 'v9am'
      },
      // 校验
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    // 初始化例子插件
    window.particlesJS('login', config)
  },
  beforeDestroy () {
    // 销毁 particlesJS
    // thanks https://github.com/d2-projects/d2-admin/issues/65
    // ref https://github.com/VincentGarreau/particles.js/issues/63
    if (window['pJSDom'] && window['pJSDom'].length) {
      let len = window['pJSDom'].length
      for (let i = 0; i < len; i++) {
        window['pJSDom'][i].pJS.fn.vendors.destroypJS()
      }
      window['pJSDom'] = []
    }
  },
  methods: {
    ...mapActions('d2admin/account', [
      'login'
    ]),
    /**
     * @description 接收选择一个用户快速登录的事件
     * @param {Object} user 用户信息
     */
    handleUserBtnClick (user) {
      this.formLogin.username = user.username
      this.formLogin.password = user.password
      this.submit()
    },
    /**
     * @description 提交表单
     */
    // 提交登录信息
    submit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 登录
          // 注意 这里的演示没有传验证码
          // 具体需要传递的数据请自行修改代码
          this.login({
            vm: this,
            username: this.formLogin.username,
            password: this.formLogin.password
          })
            .then(() => {
              // 重定向对象不存在则返回顶层路径
              this.$router.replace(this.$route.query.redirect || '/')
            })
        } else {
          // 登录表单校验失败
          this.$message.error('表单校验失败')
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
