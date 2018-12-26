
import { forEachMatch, treeMatch } from '@/libs/auth'
// 本测试不涉及store的使用，屏蔽对store模块的依赖
jest.mock('@/store', () => {})
// 使用 babel 插件解决 jest 不能解析 require.context 的问题
// require('babel-plugin-require-context-hook/register')()
// const { forEachMatch, treeMatch } = require('@/libs/auth')

const userPermissions = [
  '/login',
  '/demo/page1',
  '/demo/params/001',
  '/test/**',
  '/user/*/info/*'
]

describe('Auth 模块案例集', () => {
  it('forEachMatch 功能测试', () => {
    // true
    expect(forEachMatch(['/login'], userPermissions)).toBe(true)
    expect(forEachMatch(['/demo/page1', '/noCheck'], userPermissions)).toBe(true)
    // expect(forEachMatch(['/test/test'], userPermissions)).toBe(true)
    // expect(forEachMatch(['/test/test/test/test'], userPermissions)).toBe(true)
    // expect(forEachMatch(['/user/01/info/001'], userPermissions)).toBe(true)
    // false
    expect(forEachMatch(['/user/01/info'], userPermissions)).toBe(false)
  })

  it('treeMatch 功能测试', () => {
    // true
    expect(treeMatch(['/login'], userPermissions)).toBe(true)
    expect(treeMatch(['/demo/page1', '/noCheck'], userPermissions)).toBe(true)
    expect(treeMatch(['/test/test'], userPermissions)).toBe(true)
    expect(treeMatch(['/test/test/test/test'], userPermissions)).toBe(true)
    expect(treeMatch(['/user/01/info/001'], userPermissions)).toBe(true)
    // false
    expect(forEachMatch(['/user/01/info'], userPermissions)).toBe(false)
  })
})
