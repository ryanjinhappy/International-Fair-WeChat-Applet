var app = getApp()

// pages/settings/settings.js
Page({

  /**
   * Page initial data
   */
  data: {
    ticket_choices: [2,5,10,20,50,100,"Unlimited"],
    avatarUrl: '/images/user_unlogin.png',
    userInfo: {},
    logged: false,
    boothUser: app.globalData.boothUser
  },
  
  toLanguage: function(){
    wx.navigateTo({
      url: 'language/language',
    })
  },

  toFeedback: function () {
    wx.navigateTo({
      url: 'feedback/feedback',
    })
  },

  toSponsors: function(){
    wx.navigateTo({
      url: 'sponsors/sponsors',
    })
  },

  toQRcode: function(){
    wx.navigateTo({
      url: 'QRcode/QRcode'
    })
  },
  boothLogin: function(){
    console.log("Booth User")
    console.log(app.globalData.boothUser)
    if(app.globalData.boothUser == ""){
      app.globalData.boothHidden = false
      wx.navigateTo({
        url: 'login/login'
      })
    }else{
      wx.navigateTo({
        url: '/pages/bottom_nav2/Club_info/Club_info'
      })
    }
  },
  changeMax: function(e) {
    console.log(e.detail.value)
    app.globalData.max_transaction = this.data.ticket_choices[e.detail.value]
    console.log(app.globalData.max_transaction)
  },

  toCredits: function(){
    wx.navigateTo({
      url: 'credits/credits',
    })
  },

  toTutorial: function () {
    app.globalData.show_tutorial = true
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },

  toHistory: function() {
    wx.navigateTo({
      url: '/pages/UserHistory/UserHistory',
    })
  },

  changeBGC: function(){
    app.globalData.dark_mode = true;
    // app.globalData.bgc = "#444444"
    // app.globalData.nav_bgc = "#999999"
    // app.globalData.one = '#999999',
    // app.globalData.two = '#999999',
    // app.globalData.three = 'C94731',
    // app.globalData.four = '#999999',
    // app.globalData.five = '#999999',

    // wx.reLaunch({
    //   url: '/pages/index/index',
    // })
  },
  switchChange: function(){
    if(app.globalData.easter_egg){
      app.globalData.easter_egg = false
    }
    else{
      app.globalData.easter_egg = true
    }

    console.log(app.globalData.easter_egg)
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
              console.log(this.data.userInfo)
            }
          })
        }
      }
    })
  },
  onGetUserInfo: function (e) {
    console.log('user info gotten')
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
    console.log(this.data)
  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

})