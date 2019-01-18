const fs = require('fs')
const webpackVersion = require('webpack/package.json').version
const src = 'node_modules/element-ui/packages/form/src/form-item.vue'
const target = 'src/pages/demo/page1/form-item.vue'
const exp = /<template>[\d\D]*<\/template>/

function getCompilerHook (compiler, options) {
  return function (compilation) {
    // 扩展 ElementUI FormItem 组件，需要拷贝 template 代码，并进行修改
    // 读取源码
    fs.readFile(src, 'utf8', function (err, data) {
      if (err) {
        return console.err(err)
      }
      const result = data.match(exp)
      if (!result || !result[0]) {
        return console.err('读取 form-item 的 template 代码失败')
      }
      let template = result[0]
      // 修改
      template = template.replace(/\bvalidateMessage\b/g, 'validateMessageDisplay').replace(/\s$/mg, '')
      // 写入目标
      fs.readFile(target, 'utf8', function (err, data) {
        if (err) {
          return console.log(err)
        }
        const result = data.replace(exp, template)
        fs.writeFile(target, result, 'utf8', function (err) {
          if (err) return console.log(err)
        })
      })
    })
  }
}

class FilterWebpackPlugin {
  constructor (options) {
    this.options = options
  }

  apply (compiler) {
    const compilerHook = getCompilerHook(compiler, this.options)
    if (webpackVersion < '4') {
      compiler.plugin('afterResolvers', compilerHook)
    } else {
      compiler.hooks.afterResolvers.tap('FilterWebpackPlugin', compilerHook)
    }
  }
}

module.exports = FilterWebpackPlugin
