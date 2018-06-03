const fetch = require('../../utils/fetch')
var app = getApp()

Page({
  data: {
    slides: [],
    categories: [],

    markers: [{
      iconPath: "https://pk.whjy.net/mypic/wxapp/map.png",
      id: 0,
      latitude: 30.653738,
      longitude: 114.244739,
      width: 50,
      height: 50
    }],

    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/assets/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/assets/location.png'
    }],

    polyline: [{
      points: [{
        longitude: 114.244888,
        latitude: 30.653888
      }, {
        longitude: 114.244000,
        latitude: 30.653000
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],

    controls: [{
      id: 100,
      iconPath: '/assets/control.png',
      position: {
        left: 0,
        top: 0,
        width: 15,
        height: 15
      },
      clickable: true
    }]
  },

  onReady: function (e) {
    this.mapCtx = wx.createMapContext('MapForSchool');
    this.mapCtx.moveToLocation()
  },

  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },

  ShowSchool: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 30.653738,
        longitude: 114.244739,
      }, {
        latitude: 30.053738,
        longitude: 114.244739,
      }]
    })
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
  
  },
  
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
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



