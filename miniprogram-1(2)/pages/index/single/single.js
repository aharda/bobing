// pages/single/single.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dices: [
    //  '../../../image/playDice.gif',
      '../../../image/dice1.png',
      '../../../image/dice2.png',
      '../../../image/dice3.png',
      '../../../image/dice4.png',
      '../../../image/dice5.png',
      '../../../image/dice6.png',
    ],
    
    dicenum: [1,2,3,4,5,6],
    dicecnum:[0,0,0,0,0,0],
    flag:1,
    result:'',
    msg:'摇一摇' ,
    pnumber: 1,
    i:0,
    result_sum:[''],
    hiddenmodalput:true
  },
  messageChang: function(e) {
  
    // 获取输入框当前value值
    let value = e.detail.value

    // 及时更新数据
    this.setData({
      pnumber: value
    })
  },

  enter:function(event){
    let obj = this;
    
    if(obj.data.flag==true){
       obj.data.timer = setInterval(function () {
      obj.data.dicenum[0] = Math.floor(Math.random() * 6);
      obj.data.dicenum[1] = Math.floor(Math.random() * 6);
      obj.data.dicenum[2] = Math.floor(Math.random() * 6);
      obj.data.dicenum[3] = Math.floor(Math.random() * 6);
      obj.data.dicenum[4] = Math.floor(Math.random() * 6);
      obj.data.dicenum[5] = Math.floor(Math.random() * 6);
      obj.setData({
          one_img: obj.data.dices[obj.data.dicenum[0]],
          two_img: obj.data.dices[obj.data.dicenum[1]],
          three_img: obj.data.dices[obj.data.dicenum[2]],
          four_img: obj.data.dices[obj.data.dicenum[3]],
          five_img: obj.data.dices[obj.data.dicenum[4]],
          six_img: obj.data.dices[obj.data.dicenum[5]],
          flag:false,
          msg:'停止',
          txt:'',
        })
      }, 100);
    }else{
      clearInterval(obj.data.timer);
      for(var num = 0; num <= 5; num++)
      {
        obj.data.dicecnum[obj.data.dicenum[num]] +=1;
      }
      if(obj.data.dicecnum[0]==1&&obj.data.dicecnum[3]==5)
      {
          obj.setData({
            result:"状元插金花"
          })
      }
      else if(obj.data.dicecnum[3]==6)
      {
          obj.setData({
            result:"六杯红"
          })
      }
      else if(obj.data.dicecnum[5]==6)
      {
          obj.setData({
            result:"六杯黑"
          })
      }
      else if(obj.data.dicecnum[3]==5)
      {
          obj.setData({
            result:"五王"
          })
      }
      else if(obj.data.dicecnum[2]==5&&obj.data.dicecnum[3]==1)
      {
          obj.setData({
            result:"五子带一秀"
          })
      }
      else if(obj.data.dicecnum[2]==5&&obj.data.dicecnum[3]==0)
      {
          obj.setData({
            result:"五子登科" 
          })
      }
      else if(obj.data.dicecnum[3]==4)
      {
          obj.setData({
            result:"状元"
          })
      }
      else if(obj.data.dicecnum[0]==1&&obj.data.dicecnum[1]==1&&obj.data.dicecnum[2]==1&&obj.data.dicecnum[3]==1&&obj.data.dicecnum[4]==1&&obj.data.dicecnum[5]==1)
      {
          obj.setData({
            result:"对堂"
          })
      }
      else if(obj.data.dicecnum[3]==3)
      {
          obj.setData({
            result:"三红"
          })
      }
      else if(obj.data.dicecnum[1]==4)
      {
          obj.setData({
            result:"四进"
          })
      }
      else if(obj.data.dicecnum[3]==2)
      {
          obj.setData({
            result:"二举"
          })
      }
      else if(obj.data.dicecnum[3]==1)
      {
          obj.setData({
            result:"一秀"
          })
      }
      else
      {
        obj.setData({
          result:"谢谢参与"
        })
      }
      this.data.i=this.data.i+1
      this.data.result_sum[this.data.i-1]='第'+ this.data.i+'位 :'+obj.data.result+"\n"
      
      obj.setData({ 
           result_sum:this.data.result_sum,
           dicecnum:[0,0,0,0,0,0],
           msg:'摇一摇',
           flag:true
      })
      if(this.data.i == this.data.pnumber)
      {
        
        this.buttonListener()
        this.setData({
          i:0,
          pnumber:1,
          result:'',
          result_sum:['']
        })
        
        
        
      }
      

      
      
    }
    
  },

  modalinput:function(){  
    this.setData({  
      hiddenmodalput: !this.data.hiddenmodalput  
      })  
    },  
      //取消按钮  
    cancel: function(){  
      this.setData({  
      hiddenmodalput: true  
      });  
      },  
      //确认  
    confirm: function(){  
      this.setData({  
      hiddenmodalput: true  
      })  
      },
  


      buttonListener:function(){
        wx.navigateTo({
          url: './result/result?a=' + this.data.result_sum +'&n=' + this.data.pnumber
        })
          },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})