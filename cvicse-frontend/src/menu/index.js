// 菜单数据
export default [
  {
    title: '演示',
    icon: 'flask',
    children: [
      // { path: '/index', title: '首页', icon: 'home' },
      { path: '/demo/auth', title: '权限演示', icon: 'universal-access' },
      {
        title: '参数路由',
        icon: 'sitemap',
        children: [
          { path: '/demo/params/1', title: '编号 1', icon: 'hashtag' },
          { path: '/demo/params/2', title: '编号 2', icon: 'hashtag' },
          { path: '/demo/params/3', title: '编号 3', icon: 'hashtag' }
        ]
      }
    ]
  },
  {
    title: '设置',
    icon: 'gear',
    children: [
      { path: '/demo/page1', title: '页面 1' },
      { path: '/demo/page2', title: '页面 2' },
      { path: '/demo/page3', title: '页面 3' }
    ]
  }
]
