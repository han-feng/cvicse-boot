/**
 * 模块描述文件
 */
import routes from './routes'

export default {
  name: 'demo',
  dependencies: [
    'frame'
  ],
  extensions: {
    'vue.router.addRoutes': {
      demo: {
        parent: 'frame',
        routes
      }
    }
  }
}
