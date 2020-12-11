const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

exports.main = async (event, context) => {
  try {
    const { list } = await db.collection('stock_tickers')
      .aggregate()
      .sample({
        size: 1
      })
      .end()
    if (list.length === 0) {
      throw new Error('获取为空')
    }
    return {
      code: 1,
      data: list[0],
      message: ''
    }
  } catch (e) {
    return {
      code: -1,
      data: null,
      message: '获取失败'
    }
  }
}

