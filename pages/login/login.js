// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    "user":"",
    "pwd":"",
    "mack_user":"admin",
    "mack_pwd":"123456"
  },
   //获取用户输入的用户名
  userNameInput: function (e) {
    this.setData({
      user: e.detail.value
    })
  },
   //获取用户输入的密码
  userPwdInput: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  //模拟本地数据进行登入，登入成功跳转到首页
  login: function (e){
    // console.log(this.data.user)
    // console.log(this.data.pwd)
    if (this.data.user === this.data.mack_user && this.data.pwd === this.data.mack_pwd){
      wx.switchTab({
        url: "../../pages/index/index"
      });
    }else{
      wx.showModal({
        title: '登录失败',
        content: '账号或密码错误！请重新输入',
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            console.log('用户点击确定')
          } else {//这里是点击了取消以后
            console.log('用户点击取消')
          }
        }
      })
    }
  }
})