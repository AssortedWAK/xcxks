// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  /**
    wx.makePhoneCall({
  phoneNumber: '1340000' //仅为示例，并非真实的电话号码
})

4 微信小程序如何实现打开手机地图并显示固定的位置？
<view class="view">
   <map id="map" 
   longitude="{{longitude}}"  //经度
   latitude="{{latitude}}"    //纬度
   show-location="true" >     //是否显示当前定位
   </map>
</view>

 data: { 
   //自定义标记点数组
  	markers:[],
   //纬度
   latitude:'',
   //经度
   longitude:'',
 },
onLoad: function() { 
 var that = this; 
//  获取当前定位的经纬度信息
wx.getLocation({
  type: 'gcj02',//默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
  altitude:true,//高精度定位
  //定位成功，更新定位结果
  success: function (res) {
    var latitudee = res.latitude
    var longitudee = res.longitude
    that.setData({
      longitude:parseFloat(longitudee),
      latitude: parseFloat(latitudee),
    })
  }
})
},
   */
})
