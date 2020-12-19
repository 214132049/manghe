import Taro from '@tarojs/taro'

/**
 * 统一的接口请求
 * @param cloudFunctionName
 * @param params
 * @return {Promise<void>}
 */
export default async function server (cloudFunctionName, params = {}) {
  try {
    Taro.showLoading({
      title: '数据获取中...'
    })
    const { result } = await Taro.cloud.callFunction({
      name: cloudFunctionName,
      data: params
    })
    const { code, data, message } = result
    if (code !== 1) {
      throw new Error(message)
    }
    return data
  } catch (e) {
    await Taro.showToast({
      title: e.message || '获取数据失败！',
      icon: 'none'
    })
    return Promise.reject(e)
  } finally {
    Taro.hideLoading()
  }
}
