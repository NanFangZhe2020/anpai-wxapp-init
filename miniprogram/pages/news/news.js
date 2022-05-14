// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newList: [{
      avatar: "/images/avatar.png", // 头像
      nickname: "南方者", // 昵称
      time: "刚刚", // 发布时间
      img: "/images/nfz-1.png",
      content: "南方者，一个热爱计算机更热爱祖国的南方人。", // 内容
      likeSum: 520, // 喜欢数量
      commentSum: 10, // 评论数量
      isStar: false, // 是否已关注
    }, {
      avatar: "/images/avatar.png", // 头像
      nickname: "小南", // 昵称
      time: "2022.5.14", // 发布时间
      img: "/images/nfz-2.png",
      content: "有人在摸鱼哦！", // 内容
      likeSum: 520, // 喜欢数量
      commentSum: 10, // 评论数量
      isStar: true, // 是否已关注
    }, {
      avatar: "/images/avatar.png", // 头像
      nickname: "老南", // 昵称
      time: "2022.5.13", // 发布时间
      img: "/images/nfz-3.png",
      content: "相信明天更好！", // 内容
      likeSum: 10, // 喜欢数量
      commentSum: 20, // 评论数量
      isStar: false, // 是否已关注
    }, {
      avatar: "/images/avatar.png", // 头像
      nickname: "阿南", // 昵称
      time: "2021.5.22", // 发布时间
      img: "/images/nfz-3.png",
      content: "相识一场，爱你一生", // 内容
      likeSum: 1314, // 喜欢数量
      commentSum: 2020, // 评论数量
      isStar: true, // 是否已关注
    }, {
      avatar: "/images/avatar.png", // 头像
      nickname: "南方者", // 昵称
      time: "很久之前", // 发布时间
      img: "/images/nfz-3.png",
      content: "明月松间照，清泉石上流！", // 内容
      likeSum: 1314, // 喜欢数量
      commentSum: 2020, // 评论数量
      isStar: true, // 是否已关注
    },
    ]
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