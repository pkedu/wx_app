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



