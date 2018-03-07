const fetch = require('../../utils/fetch')

Page({
  data: {
    slides: [],
    categories: []
  },

  onLoad(options) {
    fetch('/categories')
      .then(res => {
        this.setData({ categories: res.data })
      })
  }
})



