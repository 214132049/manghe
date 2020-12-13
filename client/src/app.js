import React, { Component } from 'react'
import Taro from '@tarojs/taro'

import './app.less'

class App extends Component {

  componentDidMount () {
    console.log(CLOUD_ENV)
    if (process.env.TARO_ENV === 'weapp') {
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
