import React  from 'react'
import {AtGrid} from 'taro-ui'

import Picon1 from '@/assets/images/p-icon1.png'
import './index.scss'

export default function GroupIndex() {
	const data = [
		{
			image: Picon1,
			value: '二维码'
		},
		{
			image: Picon1,
			value: '二维码'
		}
	]
	
	return <AtGrid
		columnNum={1}
		hasBorder={false}
		data={data}
	/>
}
