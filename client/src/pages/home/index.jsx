import React, { useState, useEffect }  from 'react'
import Taro from '@tarojs/taro'
import {Image, Text, View} from '@tarojs/components'
import { AtTabs, AtTabsPane, AtGrid } from 'taro-ui'

import LogoPng from '@/assets/images/股票盲盒@2x.png'
import BgPng from '@/assets/images/编组5@2x.png'
import BtnPng from '@/assets/images/编组3@2x.png'
import Picon1 from '@/assets/images/p-icon1.png'
import Server from '@/server'

import './index.scss'

export default function HomeIndex() {
	const [series, setSeries] = useState([]);
	const [tabList, setTabList] = useState([]);
	const [current, setCurrent] = useState(0);
	
	useEffect(() => {
		Server('getProducts').then(res => {
			setData(res)
		})
	}, [])
	
	const setData = data => {
		const obj = {}
		data.forEach(v => {
			const {seriesId, seriesName} = v
			if (obj[seriesId]) {
				obj[seriesId].products.push(v)
			} else {
				obj[seriesId] = {
					name: seriesName,
					products: [v]
				}
			}
		})
		setSeries(obj)
		const _tabList = Object.values(obj).map(({ name }) => ({title: name}))
		setTabList(_tabList)
	}
	
	const formatProducts = (products) => {
		return products.map(v => {
			return {
				value: v.productName,
				id: v.productId,
				image: Picon1
			}
		})
	}
	
	const handleClick = (index) => {
		setCurrent(index)
	}
	
	const gridItemClick = () => {
		jumpPage()
	}
	
	const jumpPage = () => {
		Taro.navigateTo({
			url: '/pages/detail/index'
		})
	}
	
	return <View className='home-page'>
		<View className='header'>
			<View className='header-main'>
				<Image className='logo' src={LogoPng} />
				<View className='des'>
					<Text>本产品通过AI智能、大数据、舆情动态、专家模型、股市规律 等近百种算法，进行筛选，短期有效（五日）</Text>
				</View>
				<View className='bg'>
					<Image className='img' src={BgPng} />
					<Image className='btn' src={BtnPng} onClick={jumpPage} />
				</View>
			</View>
		</View>
		<View className='home-page-main'>
			<AtTabs
				scroll
				current={current}
				height='100%'
				tabDirection='vertical'
				tabList={tabList}
				onClick={handleClick}
			>
				{
					Object.values(series).map((s, i) => {
						return (<AtTabsPane
							tabDirection='vertical'
							current={current}
							index={i}
							key={s.seriesId}
						>
							<AtGrid
								columnNum={2}
								hasBorder={false}
								data={formatProducts(s.products)}
								onClick={gridItemClick}
							/>
						</AtTabsPane>)
					})
				}
			</AtTabs>
		</View>
		<View className='tips'>
			股市有风险，入市请谨慎。《网络隐私条款》声明
		</View>
	</View>
}
