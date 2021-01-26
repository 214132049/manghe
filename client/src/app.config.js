export default {
  pages: [
    'pages/home/index',
    'pages/list/index',
    'pages/group/index',
    'pages/detail/index',
    'pages/law/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '淘数',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    selectedColor: '#ff9d00',
    color: '#999999',
    borderStyle: 'white',
    list: [
      {
        text: '盲盒商城',
        pagePath: 'pages/home/index',
        iconPath: './assets/images/首页@2x.png',
        selectedIconPath: './assets/images/首页-选中@2x.png'
      },
      // {
      //   text: '龙虎榜',
      //   pagePath: 'pages/list/index',
      //   iconPath: './assets/images/订单-灰@2x.png',
      //   selectedIconPath: './assets/images/订单-点击@2x.png'
      // },
      {
        text: '交流群',
        pagePath: 'pages/group/index',
        iconPath: './assets/images/我的@2x.png',
        selectedIconPath: './assets/images/我的-选中@2x.png'
      }
    ]
  },
  cloud: true
}
