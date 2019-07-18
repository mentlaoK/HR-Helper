//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数据
    lunboImgs: [
      '../../images/hr01.jpg',
      '../../images/hr02.jpg',
      '../../images/hr03.jpg',
      '../../images/hr04.jpg'
    ],
    //九宫格数据
    routers: [
      {
        name: '薪酬',
        icon: '../../images/xinchou.png',
        code: 'xinchou'
      },
      {
        name: '绩效',
        icon: '../../images/jixiao.png',
        code: 'jixiao'
      },
      {
        name: '考勤',
        icon: '../../images/kaoqin.png',
        code: 'kaoqin'
      },
      {
        name: '招聘',
        icon: '../../images/zhaopin.png',
        code: 'zhaopin'
      },
      {
        name: '企业文化',
        icon: '../../images/qiyewenhua.png',
        code: 'qiyewenhua'
      },
      {
        name: '更多',
        icon: '../../images/gengduo.png',
        code: 'gengduo'
      }
    ],
    currentData: 0 ,//选项卡初始数据
    aheight: "",//选项卡高度
    //劳动法数据
    laodongfa:[
      {
        ldf_id: 1,
        imgs: '../../images/laodonghetong.png',
        title: '劳动合同'
      },
      {
        ldf_id: 2,
        imgs: '../../images/cituijiegu.png',
        title: '辞退解雇'
      },
      {
        ldf_id: 3,
        imgs: '../../images/yuangongquanyi.png',
        title: '员工权益'
      },
      {
        ldf_id: 4,
        imgs: '../../images/laodongbaoxian.png',
        title: '劳动保险'
      },
      {
        ldf_id: 5,
        imgs: '../../images/gongshangshigu.png',
        title: '工伤事故'
      }
    ],
    //数据报表数据
    shujubaobiao: [
      {
        ldf_id: 1,
        imgs: '../../images/renyuandongtai.png',
        title: '人员动态'
      },
      {
        ldf_id: 2,
        imgs: '../../images/renyuangongxu.png',
        title: '人员供需'
      },
      {
        ldf_id: 3,
        imgs: '../../images/renyuanjiegou.png',
        title: '人员结构'
      },
      {
        ldf_id: 4,
        imgs: '../../images/renyuanchengben.png',
        title: '人工成本'
      },
      {
        ldf_id: 5,
        imgs: '../../images/renyuanchanchu.png',
        title: '人均产出'
      }
    ],
    tuijian: [ 
      {
        ldf_id: 1,
        imgs: '../../images/tieba1.png',
        title: '同事吧'
      },
      {
        ldf_id: 2,
        imgs: '../../images/tieba2.png',
        title: '热议吧'
      },
      {
        ldf_id: 3,
        imgs: '../../images/tieba1.png',
        title: '运动吧'
      },
      {
        ldf_id: 4,
        imgs: '../../images/tieba2.png',
        title: '生活吧'
      },
      {
        ldf_id: 5,
        imgs: '../../images/tieba1.png',
        title: '学习吧'
      }
    ]
  },
  /**
  选项卡方法
  */
  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;
    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    /* 选项卡动态计算高度 */
    var line = Math.ceil(this.data.tuijian.length);//获得数据的长度
    this.setData({
      aheight:80*line + 140 * line //高度边距高+内容高
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: "HR-小助手",
      desc: "一款提升HR专业技能的微信小程序",
      path: "pages/index/index"
    }
  }
})