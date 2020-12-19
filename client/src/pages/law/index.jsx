import React  from 'react'
import { View } from '@tarojs/components'
import './index.less'

export default function lawIndex () {
  return (
    <View className='law-index'>
      <View className='title'>《隐私条款》</View>
      <View>本隐私政策适用于通过本小程序收集或使用的用户及消费者（“您”）的个人信息。我们关心您的个人信息和隐私安全。我们的隐私政策旨在以方便您浏览、阅读和理解的形式，让您了解我们收集、使用信息的规则。</View>
      <View>请注意，本隐私政策所描述的信息收集、使用的规则仅适用于我们通过本网站收集的信息，我们对于自其它网站、其它途径（包括线下途径）收集到的信息的收集、使用的实践不一定与本隐私政策相同。</View>
      <View>我们收集哪些信息</View>
      <View>我们收集您提供给我们的信息，以及当您访问本网站时系统自动收集的信息。</View>
      <View>1. 您提供的信息</View>
      <View>当您通过电子邮件、在线沟通工具或其他方式联系我们时，如您主动向我们提供您的个人信息，包括但不限于您的姓名、城市、性别、电子邮件地址等，我们将收集并保存该等信息。</View>
      <View>2. 自动收集的信息</View>
      <View> 当您浏览本网站时，我们将自动收集和存储某些匿名信息。例如，我们将收集您的IP地址、浏览器信息及每次您跳转至本网站前的网站域名等。我们也收集用户的浏览路径模型和网站使用习惯等。这些信息将被用于分析和改进本网站，以便向您提供更好的服务。</View>
      <View>我们使用您的个人信息的目的</View>
      <View>我们会将个人信息用于数据分析和研究等内部目的，以改进服务、内容、本网站和广告宣传，以及用于我们与用户之间的沟通。</View>
      <View className='copyright'>All rights reserved 版权所有</View>
    </View>
  )
}
