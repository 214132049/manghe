import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import RedPacketPng from '@/assets/images/redpacket.png'
import './index.less'

export default class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {
      packetList: [], //红包队列
      packetNum: 200, //总共红包的数量
    }
  }

  componentWillMount () {
    //建立临时红包列表
    const packetList = [];
    //生成初始化红包
    for (let i = 0; i < this.state.packetNum; i++) {
      // 建立临时单个红包
      const packet = {
        left: `${Math.floor(Math.random() * 95)}%`,
        'animation-delay': `${Math.floor(Math.random() * 5)}s`
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

  render () {
    const { packetList } = this.state;
    
    return (
      <View className='home-index'>
        <View className='redPacket-box'>
          {
            packetList.length > 0 && packetList.map((style, index) => {
              return <Image
                className='red-packet'
                key={index}
                src={RedPacketPng}
                style={style}
              />
            })
          }
        </View>
      </View>
    )
  }
}
