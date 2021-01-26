const cloud = require('wx-server-sdk')

// 初始化 cloudFunctions
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

const MAX_LIMIT = 1
const START_HOUR = 8 // 开始时间
const END_HOUR = 17 // 结束时间
exports.main = async (event, context) => {
  try {
    // 只从top中获取
    const {top, productId} = event
    console.log(top, productId)
    const queryCondition = {}
    if (top) {
      queryCondition.top = _.lte(top || 10)
    }
    if (!productId) {
      throw new Error('参数错误')
    }
    queryCondition.productId = _.eq(productId)
    const filterColl = db.collection('stock_tickers').where(queryCondition)
    // 过滤的总个数
    const countResult = await filterColl.count()
    const total = countResult.total
    const averageCopies = ~~(10 / total)
    let offset = 0 // 第0条开始取
    const currentHour = new Date().getHours()
    if (currentHour <= START_HOUR) {
      offset = 0 // START_HOUR前（含） 取第一个
    } else if (currentHour > END_HOUR) {
      offset = total - 1 // END_HOUR后取最后一个
    } else {
      const diff = currentHour - START_HOUR
      offset = ~~(diff / averageCopies) // 向下取整
    }
    
    const { data } = await filterColl
      .skip(offset * MAX_LIMIT)
      .limit(MAX_LIMIT)
      .get()
    if (data.length === 0) {
      throw new Error('获取为空')
    }
    return {
      code: 1,
      data: data[0],
      message: '获取成功'
    }
  } catch (e) {
    const message = e.message.indexOf('errCode') > -1 ? '服务器错误' : e.message
    return {
      code: -1,
      data: null,
      message
    }
  }
}

