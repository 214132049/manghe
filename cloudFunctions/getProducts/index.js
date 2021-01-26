const cloud = require('wx-server-sdk')

// 初始化 cloudFunctions
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

exports.main = async (event, context) => {
  try {
    const {data} = await db.collection('products').get()
    
    return {
      code: 1,
      data,
      message: '获取成功'
    }
  } catch (e) {
    console.log(e)
    return {
      code: -1,
      data: null,
      message: '获取失败'
    }
  }
}

