//index.js
const app = getApp()
// 获取应用实例
Page({
  /**
   * 页面初始数据
   */
  data:{
    num1:0,
    num2:0,
    result:""
  },

   /**
   * 事件处理函数
   */
  numValue:function(e){
  	this[e.currentTarget.id] = Number(e.detail.value)
  },
  compare:function(e){
    var str = '两数相等'
    if(this.num1 > this.num2){
    	str = '第一个数大'
  	}
  	else if(this.num1 < this.num2){
  		str = '第二个数大'
	}
	this.setData({
		result:str
	})
	}
})