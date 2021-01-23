const cloud = require('wx-server-sdk')

// 初始化 cloudFunctions
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
const MAX_LIMIT = 1
const START_HOUR = 8 // 开始时间
const END_HOUR = 17 // 结束时间
exports.main = async (event, context) => {
  try {
    const countResult = await db.collection('stock_tickers').count()
    const total = countResult.total
    let offset = 0 // 第0条开始取
    const currentHour = new Date(db.serverDate()).getHours()
    if (currentHour <= START_HOUR) {
      offset = 0 // START_HOUR前（含） 取第一个
    } else if (currentHour > END_HOUR) {
      offset = total - 1 // END_HOUR后取最后一个
    } else {
      offset = currentHour - START_HOUR // 每过1小时 获取下一个
    }
    const { data } = await db.collection('stock_tickers')
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
    return {
      code: -1,
      data: null,
      message: '获取失败'
    }
  }
}

