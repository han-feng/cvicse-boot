// eslint-disable-next-line no-unused-vars
var menuConfig = {
  applications: [
    { path: '/index', title: '首页', icon: 'home' },
    {
      title: '演示',
      icon: 'flask',
      children: [
        { path: '/demo/validator', title: '输入校验', icon: 'edit' },
        {
          title: '外链测试',
          menus: [
            { path: '/external?title=新浪新闻&src=http://news.sina.com.cn', title: '新浪新闻' }
          ]
        },
        {
          title: '权限演示',
          icon: 'universal-access',
          menus: [ // menus 属性标识的子菜单在左侧显示
            { path: '/demo/auth', title: '查看权限', icon: 'street-view' },
            { path: '/demo/page1', title: '页面 1' },
            { path: '/demo/page2', title: '页面 2' },
            { // 二级菜单
              title: '子菜单',
              children: [
                { path: '/demo/page3', title: '页面 3' }
              ]
            }
          ]
        },
        {
          title: '参数路由',
          icon: 'map-signs',
          menus: [
            { path: '/demo/params/1', title: '编号 1', icon: 'map-marker' },
            { path: '/demo/params/2', title: '编号 2', icon: 'map-marker' },
            { path: '/demo/params/1?name=hello', title: 'query 测试', icon: 'map-marker' }
          ]
        },
        {
          title: 'mxGraph',
          icon: 'sitemap',
          menus: [
            { path: '/demo/graph', title: 'Hello, World!', icon: 'braille' },
            { path: '/demo/graph/editor', title: 'Graph 编辑器', icon: 'object-group' }
          ]
        }
      ]
    },
    {
      title: '设置',
      icon: 'gear',
      menus: [
        { path: '/demo/page1', title: '页面 1' },
        { path: '/demo/page2', title: '页面 2' },
        { path: '/demo/page3', title: '页面 3' }
      ]
    }
  ]
}
