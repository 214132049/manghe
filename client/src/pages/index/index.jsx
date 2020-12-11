import React, { Component } from 'react'
import { View, Image, Button, Text } from '@tarojs/components'
import RedPacketPng from '@/assets/images/redpacket.png'
import Server from '@/server'
import './index.less'

export default class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {
      packetList: [], //红包队列
      packetNum: 50, //总共红包的数量
      animationed: false,
      code: ''
    }
  }

  componentWillMount () {
    //建立临时红包列表
    const packetList = [];
    //生成初始化红包
    for (let i = 0; i < this.state.packetNum; i++) {
      // 建立临时单个红包
      const packet = {
        left: `${Math.floor(100 / 6 * (i % 6))}%`,
        animationDelay: `${Math.floor(Math.random() * 50 * i)}ms`
      }
      packetList.push(packet);
      // 将生成的临时红包列表更新至页面数据，页面内进行渲染
      this.setState({
        packetList: packetList
      })
    }
  }

  componentDidShow () { }

  componentDidHide () { }
  
  onAnimationend () {
    console.log(1)
  }
  
  getCode () {
    console.log(123)
    Server('getCode').then(res => {
      this.setState({
        code: res.code
      })
    })
  }

  render () {
    const { packetList, code, animationed } = this.state;
    
    return (
      <View className='home-index'>
        {
          !animationed && <View className='redPacket-box'>
            {
              packetList.length > 0 && packetList.map((style, index) => {
                return <Image
                  className='red-packet'
                  key={index}
                  src={RedPacketPng}
                  style={style}
                  onAnimationend={this.onAnimationend}
                />
              })
            }
          </View>
        }
        <Text>{ code }</Text>
        <View>
          <Button onClick={this.getCode}>开宝盒<Text>(限时免费)</Text></Button>
        </View>
      </View>
    )
  }
}
