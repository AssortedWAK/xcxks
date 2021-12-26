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
1、简述微信小程序用户登录的流程。
（1）、小程序获取 code
（2）、小程序将 code 发送给开发者服务器。
（3）、开发者服务器通过微信接口服务检验登录凭证。
（4）、开发者服务器自定义登录态。

2、简述什么是微信小程序。
  微信小程序 ，是一种不需要下载安装即可使用的应用,用户扫一扫或
搜一搜即可打开应用，无需安装或卸载。微信小程序运行于微信之上，
它的交互类似与手机原生应用，但是每个应用的体积非常小，具有无
需安装、触手可及、用完即走、无需卸载的特点。

3、简单介绍微信小程序、原生 APP 和 Web APP 之间的区别。
  微信小程序：是继原生 APP、Web APP 之后出现的一种新的 APP 形态。
适合开发一些业务逻辑简单、低频次使用、对性能要求不高的应用。
原生 APP：由于 Android 和 IOS 两个平台的不兼容，需要开发两个版
本，开发成本高。
Web APP：基于 HTML5 开发，解决了跨平台的问题，但是性能和用户
体验不佳。

4、简述微信小程序开发具体步骤及所需的文件结构。
  打开安装好的微信开发者工具,选择小程序项目;
填写小程序项目信息,利用普通快速启动模板创建目录结构;
打开目录结构主要包括项目配置文件 project.config.json、应用程
序配置文件 app.json、公共样式文件 app.wxss、页面结构目录 pages、
app.js 应用程序的逻辑代码等。
5、微信小程序中页面渲染的方式有哪些？简单说明。
  wx:for 列 表 渲 染 ; 举 例 : 通 过 循 环 数 组 实 现 , 语
句:wx:for=”{{[…]}}”
wx:if 条 件 渲 染 ; 举 例 : 通 过 给 定 布 尔 值 实 现 , 语 句
wx:if=”{{true/false}}”

6、简单介绍在小程序中实现背景音乐播放有哪些方式？
  可以使用 wx.createInnerAudioContext（）接口播放音频；
小 程 序 中 还 有 一 种 专 门 用 于 播 放 背 景 音 频 的
wx.getBackgroundAudioManager（）接口，其特点在于小程序切入后
台时，如果音频处于播放状态可以继续播放。

7、简述 wx.navigateTo、wx.redirectTo 和 wx.switchTab 跳转方式
的区别。
  wx.navigateTo() 跳转到应用内的某个页面,且保留当前页面
wx.redirectTo() 跳转到应用内的某个页面,且关闭当前页面
wx.switchTab() 跳转页面,且只能跳转到 tabBar 页面,并关闭其他
所有非 tabBar 页面

8、简述微信小程序的 wxcss 和 css 有哪些不同之处
  wxss 具有 css 大部分特性,wxss 对 css 进行了扩充和修改,使之更适
合开发微信小程序。
wxss 扩展的特性有:
尺寸单位:rpx:
可以根据屏幕宽度进行自适应
样式导入:@import 语句可以导入外联样式表,@import 后跟需要导入
的外联样式表的相对路径,用;表示语句结束

9、打开一个微信小程序可以通过哪些方式实现？
  若要打开一个微信小程序，可以通过搜索关键词、扫描二维码、群分
享、好友分享等途径来实现。

10、小程序的生命周期函数包含哪些？他们分别在什么时候触发？
  (1)onLoad 页面加载时触发
(2)onReady 页面初次渲染完成时触发
(3)onShow 页面显示时触发
(4)onHide 页面隐藏时触发
(5)onUnload 页面卸载时触发

11、简述小程序有哪些优点。
  (1)无需下载
(2)无需升级
(3)开发周期短
(4)开发成本低
(5)体积小
(6)跨平台

12、简要介绍 WeUi、mpvue 和 WePY。
  (1)WeUi 是微信官方设计团队为微信 Web 开发打造的一个基础样式库，
可以使得小程序的各种组件的设计风格与微信极为相似，给用户更加
一致的体验。
(2)mpvue 是从整个 Vue.js 核 心代码上经过二次开发形成的一个框
架，相当于在 Vue.js 的基础上增加了开发微信小程序的能力。
(3)WePY 在开发过程中参考了 Vue.js 等现有框架的一些语法风格和
功能特性，对原生小程序的开发模式的再次封装，更贴近与 MVVM 模
式。
   */
})
