App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
   
  },

  //get locationInfo
  getLocationInfo: function (cb) {
    var that = this;
    if (this.globalData.locationInfo) {
      cb(this.globalData.locationInfo)
    } else {
      wx.getLocation({
        type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
        success: function (res) {
          that.globalData.locationInfo = res;
          cb(that.globalData.location9nfo)
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    locationInfo: null
  },

  config: {
    //apiBase: 'https://locally.uieee.com',
    apiBase: 'https://so.whjy.net/json',
    apiImg: 'https://so.whjy.net/assets/'
  }

})