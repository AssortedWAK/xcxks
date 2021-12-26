Page({
  data: {
    picker: {
    arr: ['1', '2', '3', '4', '5', '6'],
    index: 0
    }
  
  },
  pickerChange: function(e) {
    this.setData({
      'picker.index': e.detail.value
    })
  },
  formSubmit: function(e) {
    var name =e.detail.value
    var phone = e.detail.value
    if(name&&phone.length==13){
      wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 1500
    })
    }
    else{
      wx.showToast({
      title: '信息错误',
      icon: 'error',
      duration: 1500
  
    })
    }
  }
  })