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
   
  1.请简述什么是微信小程序。
答：微信小程序是一种不需要安装即可使用的应用，用户只要“扫一扫”或“搜一搜”既可以打开应用，无需安装或卸载。微信小程序运行与微信之上，它的交互类似于手机原生应用，但是每个应用体积非常小，上限为2048KB。

2.请简述微信开发者工具如何使用？
答：Console：控制台面板，用于输出调试信息，也可以直接编写代码执行。
Sources：源代码面板，可以查看或编辑源代码，并支持代码调试。
Network：网络面板，用于记录网络请求信息，根据它可进行网络性能优化。
Security：安全面板，用于调试页面的安全和认证等信息，如HTTPS。
AppData：App数据面板，可以查看或编辑当前小程序运行时的数据。
Audits：审计面板，用于对小程序进行体验评分。
Sensor：传感器面板，用于模拟地理位置、重力感应。
Storage：存储面板，用于查看和管理本地数据缓存。
Trace：跟踪面板，用于真机调试时跟踪调试信息。
Wxml：Wxml面板，用于查看和调试wxml和wxss。

3.请简单介绍微信小程序、原生App和WebApp之间的区别。
答：微信小程序是继原生APP、Web APP之后出现的一种新的APP形态。适合开发一些业务逻辑简单、低频次使用、对性能要求不高的应用。
原生APP由于Android和IOS两个平台的不兼容，需要开发两个版本，开发成本高。
基于HTML5开发的Web APP解决了跨平台的问题，但是性能和用户体验不佳。

1.请举例说明什么是事件，什么是事件处理函数。
答：事件是视图层到逻辑层的通讯方式，可将用户的行为通过bindtap反馈到逻辑层进行处理，即把点击事件绑定到组件，当触摸组件时触发事件处理函数。
事件处理函数：事件触发后执行的回调函数，其中事件对象是e。

2.简单介绍flex布局及其兼容性。
答：flex布局即弹性盒子布局；设置父元素的display属性值为flex；设置子元素的相关属性调整布局，如flex、flex-direction等；目前已得到所有浏览器的支持。

3.简述微信小程序开发具体步骤及所需要的文件结构。
①打开安装好的微信开发者工具，选择小程序项目；
②填写小程序项目信息，利用普通快速启动模板创建目录结构；
③打开目录结构主要包括项目配置文件project.config.json、应用程序配置文件app.json、公共样式文件app.wxss、页面结构目录pages、app.js应用程序的逻辑代码等。

1.微信小程序开发过程中页面渲染的方式有哪些？简单举例说明。
答：wx:for列表渲染；
举例：通过循环数组实现，语句：wx:for=”{{[…]}}”；
wx:if条件渲染;
举例：通过给定布尔值实现，语句wx:if=”{{true/false}}”

2.请分别介绍swiper、scroll-view、image组件的典型应用。
答：swiper组件用来实现轮播图和多页面结构；
scroll-view组件用于实现可滚动视图区域，当内容超出当前组件的高度时，自动出现滚动条；
image组件用于定义图片，类似于HTML中的<img>标签，通过属性控制图片的显示模式，它有4种缩放模式；9种裁剪模式；

1.简述如何使用scroll-view实现内容横向滚动。
答：设置scroll-view组件的scroll-x 属性为true

3.简述input组件中哪个属性可以设置输入文本的最大输入长度。
答：input组件中使用maxlength属性控制最大输入长度，默认是140，,设置为-1时，则不限制最大长度。

1.	简述微信小程序中如何禁止下拉。
答：设置"enablePullDownRefresh"属性为false

2.简述 header头部请求的两种请求方式。
答：
"Content-Type": "application/x-www-form-urlencoded"
'Content-Type'：'application/json'

3.简述wx. navigateTo wx.redirectTo 和wx.switchTab跳转方式的区别。
答：
wx.navigateTo() 跳转到应用内的某个页面，且保留当前页面
wx.redirectTo（) 跳转到应用内的某个页面，且关闭当前页面
wx.switchTab() 跳转页面，且只能跳转到tabBar页面，并关闭其他所有非tabBar页面
或（wx.navigateTo只能用于跳转到非标签页，且保留当前页面，跳转页面后单击左上角可以返回到上一个页面。
wx.redirectTo只能用于跳转到非标签页，且关闭当前页面，不能返回到上一个页面。
wx.switchTab只能用于跳转到标签页，且关闭其他所有非标签页。）

1.简述使用flex如何实现容器内元素的垂直居中对齐？
答：设置display为flex，
flex-flow:column //垂直排列
Justify-context:space-between //两端对齐
或（display:flex; justify-context:center; align-item:center）

2.简述小程序的WXSS和CSS有哪些不同之处？
答：wxss是一套样式语言，用于描述wxml的组件样式；wxss具有css的大部分特性，并在css基础上做了一些扩充和修改。
wxss扩展的特性有：
尺寸单位：rpx: 可以根据屏幕宽度进行自适应
样式导入：@import语句可以导入外联样式表，@import后跟需要导入的外联样式表的相对路径，用;表示语句结束2.简述使用flex如何

1.简述什么是微信小程序框架。
答：微信小程序框架可以用来快速构建微信小程序项目；
主要包括：mpvue、WeUI、WePY、小程序原生框架；

2.请简述WeUI的特点和功能？
答：WeUI 是一套同微信原生视觉体验一致的基础样式库，为微信 Web 开发量身设计的UI库，可以令用户的使用感知更加统一。包含button、cell、dialog、toast、article、icon等各式元素。

3.简要介绍WeUi、mpvue和WePY。
答：WeUi是微信官方设计团队为微信Web开发打造的一个基础样式库，可以使得小程序的各种组件的设计风格与微信极为相似，给用户更加一致的体验。
mpvue是从整个Vue.js核 心代码上经过二次开发形成的一个框架，相当于在Vue.js的基础上增加了开发微信小程序的能力。
WePY在开发过程中参考了Vue.js等现有框架的一些语法风格和功能特性，对原生小程序的开发模式的再次封装，更贴近与MVVM模式。

1.简述POST请求方式与GET请求方式的区别？
答：wx.request发起HTTPS网络请求，比较常用的就是GET/POST，默认是GET，两者的区别在于：
①method不同：一个method为“POST”，一个method为“GET”；
②当method为GET时，header为默认值{“content-Type”:’application/json’}，即当传入的data数据不是String类型就会对数据进行JSON序列化；当method为POST时，header为{“content-Type”:’application/x-www-form-urlencoded’}，即当传入的data数据不是String类型就则将数据转化为query String。

2.简述小程序中数据缓存的实现方法？
答：微信小程序可以通过wx.setStorage（wx.setStorageSync）、wx.getStorage（wx.getStorageSync）、wx.clearStorage（wx.clearStorageSync）对本地缓存进行设置、获取和清理。本地缓存最大为10MB。
wx.setStorage(OBJECT)：将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
wx.setStorageSync(KEY,DATA)：将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
wx.getStorageInfo(OBJECT)：异步获取当前storage的相关信息
wx.getStorageInfoSync：同步获取当前storage的相关信息
wx.removeStorage(OBJECT)：从本地缓存中异步移除指定 key 。
wx.removeStorageSync(KEY)：从本地缓存中同步移除指定 key 。
wx.clearStorage()：清理本地数据缓存。
wx.clearStorageSync()：同步清理本地数据缓存。

3.简述如何封装微信小程序的数据请求？
1、将所有的接口放在统一的js文件中并导出
2、在app.js中创建封装请求数据的方法
3、在子页面中调用封装的请求数据

1.使用wx:if和组件设置hidden属性都可以实现元素的隐藏与显示，二者有什么区别？
答：区别：
①wx:if 是值为 true 显；hidden 是值为 false 显示。
②wx:if是惰性的，在隐藏的时候不渲染；而 hidden 在隐藏时仍然渲染，只是不呈现。(即wx:if 有更高的切换消耗； hidden 有更高的初始渲染消耗。)
③故若频繁切换，使用 wx:if 将会消耗更多资源（呈现就渲染，隐藏就销毁），推荐使用hidden。
若切换不频繁，推荐使用wx:if，因为会避免初始就一下渲染那么多。

   */
})
