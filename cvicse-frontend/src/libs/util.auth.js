import store from '@/store/index'

export function checkPermission (...permissions) {
  console.log({ a: store.state.d2admin.user.info.permissions, b: permissions })
  return true
}
