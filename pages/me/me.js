Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  logOut:function(){
    wx.redirectTo({
      url: "../../pages/login/login"
    })
  }
})