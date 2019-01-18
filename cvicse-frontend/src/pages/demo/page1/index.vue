<template>
  <d2-container>
    <template slot="header">输入校验</template>
    <Form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
      <FormItem
        label="年龄"
        prop="age"
        required
        :rules="[valid_number(10,20)]">
        <Input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="submitForm('numberValidateForm')">提交</Button>
        <Button @click="resetForm('numberValidateForm')">重置</Button>
      </FormItem>
    </Form>
  </d2-container>
</template>

<script>
import { Form, Input, Button } from 'element-ui'
import FormItem from './form-item'

export default {
  name: 'demo-page1',
  components: {
    Form,
    FormItem,
    Input,
    Button
  },
  data () {
    return {
      numberValidateForm: {
        age: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    valid_number (min, max) {
      // console.log(this, arguments)
      return { type: 'number', message: `年龄范围错误（${min}~${max}）`, min, max }
    }
  }
}
</script>
