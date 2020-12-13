import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import BGPng from '@/assets/images/bg.jpg'
import BtnPng from '@/assets/images/btn.png'
import Btn2Png from '@/assets/images/btn-2.png'
import Server from '@/server'
import './index.less'

export default class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {
      code: ''
    }
  }

  componentWillMount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  getCode = () => {
    Server('getCode').then(res => {
      this.setState({
        code: res.code
      })
    })
  }

  render () {
    const { code } = this.state;
    
    return (
      <View className='home-index'>
        <Image src={BGPng} className='bg' />
        <View className='main'>
          {
            code ? <>
                <Image src={Btn2Png} className='btn' />
                <Text className='code'>{ code }</Text>
              </>
              : <>
                <Image src={BtnPng} onClick={this.getCode} className='btn shake' />
                <Text className='tip'>限时免费</Text>
              </>
          }
        </View>
      </View>
    )
  }
}
