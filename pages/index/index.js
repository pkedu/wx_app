const fetch = require('../../utils/fetch')
var app = getApp()

Page({
  data: {
    slides: [],
    categories: []
  },

  markers: [{
    id: 0,
    iconPath: "https://pk.whjy.net/mypic/wxapp/map.png",
    longitude: 114.244739,
    latitude: 30.653738,
    width: 30,
    height: 30
  }
  ],

  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('map')
  },

  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },

  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },

  onLoad(options) {
    fetch('/categories')
      .then(res => {
        this.setData({ categories: res.data })
      })
  
    // 获取定位，并把位置标示出来
    app.getLocationInfo(function (locationInfo) {
      console.log('map', locationInfo);
      this.setData({
        longitude: locationInfo.longitude, 
        latitude: locationInfo.latitude, 
        markers: [{
            id: 0, 
            iconPath: "https://pk.whjy.net/mypic/wxapp/map.png", 
            longitude: locationInfo.longitude, 
            latitude: locationInfo.latitude, 
            width: 30, 
            height: 30
          }
        ]
      })
    })
  
  },
  

  searchHandle () {
    // console.log(this.data.searchText)
    this.setData({ shops: [], pageIndex: 0, hasMore: true })
    this.loadMore()
  },

  showSearchHandle() {
    this.setData({ searchShowed: true })
  },
  hideSearchHandle() {
    this.setData({ searchText: '', searchShowed: false })
  },
  clearSearchHandle() {
    this.setData({ searchText: '' })
  },
  searchChangeHandle(e) {
    this.setData({ searchText: e.detail.value })
  }
})



