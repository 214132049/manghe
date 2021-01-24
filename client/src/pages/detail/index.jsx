import React, { Component } from 'react'
import { View, Image, Text, Checkbox, Label } from '@tarojs/components'
import Taro from '@tarojs/taro'
import BGPng from '@/assets/images/bg.jpg'
import BtnPng from '@/assets/images/btn.png'
import ResBg from '@/assets/images/res-bg.png'
import Server from '@/server'
import './index.scss'

export default class DetailIndex extends Component {
  constructor (props) {
    super(props);
    this.state = {
      res: null,
      checked: false
    }
  }

  componentWillMount () { }

  componentDidShow () { }

  componentDidHide () {
    this.setState({
      res: null
    })
  }
  
  onShareAppMessage () {
    return {
      title: '快来获取股票代码吧！',
      path: '/pages/detail/detail'
    }
  }

  getCode = () => {
    if (!this.state.checked) {
      Taro.showToast({
        title: '请阅读并同意《隐私条款》',
        icon: 'none'
      })
      return
    }
    const top = Taro.getCurrentInstance().router.params.top
    Server('getCode', {
      top: top || -1
    }).then(res => {
      this.setState({
        res: res
      })
    })
  }
  
  viewLaw = () => {
    Taro.navigateTo({
      url: '/pages/law/detail'
    })
  }
  
  setChecked = () => {
    this.setState({
      checked: true
    })
  }

  render () {
    const { res, checked } = this.state;
    
    return (
      <View className='home-index'>
        <Image src={BGPng} className='bg' />
        <View className='main'>
          {
            res ? <View className='result'>
                <Image src={ResBg} className='res-bg' />
                <Text className='code'>代号 { res.code }</Text>
                <Text className='name'>{ res.name }</Text>
                <Text className='tip'>仅供娱乐参考, 不代表任何观点</Text>
              </View>
              : <View className='btn-box'>
                <Text className='tip'>股市有风险，入市须谨慎</Text>
                <Image src={BtnPng} onClick={this.getCode} className='btn shake' />
                <Text className='tip'>限时免费</Text>
              </View>
          }
        </View>
        <View className='bottom'>
          <View className='law-box'>
            <Label onClick={this.setChecked}>
              <Checkbox className='checkbox' value={checked} />
              我已认真阅读，理解并同意
            </Label>
            <Text onClick={this.viewLaw} className='law'>《隐私条款》</Text>
          </View>
          <View className='company'>淘数科技</View>
        </View>
      </View>
    )
  }
}
