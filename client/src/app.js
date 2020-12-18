import React, { Component } from 'react'
import Taro from '@tarojs/taro'

import './app.less'

class App extends Component {

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      const { miniProgram: { envVersion } } = Taro.getAccountInfoSync()
      let CLOUD_ENV = 'dev-4gfjzx0v3e4ac91a'
      if (envVersion === 'release') {
        CLOUD_ENV = 'prod-1gm8qrluf9fdc8bb'
      }
      Taro.cloud.init({
        env: CLOUD_ENV,
        traceUser: true
      })
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
