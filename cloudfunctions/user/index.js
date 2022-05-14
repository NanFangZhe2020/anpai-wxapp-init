// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const t_user = db.collection("t_user")
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  switch (event.action) {
    case 'add': { // 增
    }
    case 'delete': { // 删
    }
    case 'update': { // 改
      
    }
    case 'get': { // 查
      const user = await t_user.where({
        _openid: wxContext.OPENID,
      }).get()
      return {
        user: user.data
      }
    }
    default: {
      return {
        message: 'action错误！'
      }
    }
  }
}