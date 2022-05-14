// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    appList: [{
      title: "微笑考试",
      text: "来点试卷？考试考试",
      imgUrl: "/images/user.png",
      appId: "wx042547bcd5c85ffb",
    }, {
      title: "工具宝盒",
      text: "这里面有身材计算、看字说颜色、汽车模拟等小工具。",
      appId: "wx277c3b3fc09411ee",
      imgUrl: "/images/avatar.png",
    }, {
      title: "阿怼科普",
      text: "想知道冷知识、小知识的点这里~",
      imgUrl: "/images/user.png",
      appId: "wx6599ce4348df2444",
    }, {
      title: "凉快夏日",
      text: "这个小程序里有个空调。",
      appId: "wx29bd4fcb03c806ef",
      imgUrl: "/images/avatar.png",
    }, {
      title: "阿怼翻译",
      text: "我能翻译翻译...",
      imgUrl: "/images/user.png",
      appId: "wxc3e0848affc3795b",
    },],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  goAbout() {
    wx.navigateTo({
      url: '../about/about',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})