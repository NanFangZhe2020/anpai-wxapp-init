// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导图配置
    imgUrls: [{
      src: '/images/nfz-1.png',
      url: '../about/about'
    }, {
      src: '/images/nfz-2.png',
      url: '../about/about'
    }, {
      src: '/images/nfz-3.png',
      url: '../about/about'
    }],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 5000, //自动切换时间间隔
    duration: 1500, //滑动动画时长
    circular: false, //是否采用衔接滑动
    vertical: false, //滑动方向是否为纵向
    current: 0, //当前所在滑块的 index   
    newsList: [{
      src: '/images/wx-code.jpg',
      title: '联系作者',
      text: '南方者，一个热爱计算机更热爱祖国的南方人。\n（wx：NanFangZhe404）'
    }, {
      src: '/images/souther-code.jpg',
      title: '程序员南方者',
      text: '微信公众号，微信搜索程序员南方者；更多源码、更多资讯、更新好玩，尽在程序员南方者~'
    },],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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