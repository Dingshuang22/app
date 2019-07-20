<template class = "template">
  <div class = "wrap">
    <img class = "addimg" src="../../images/address.png" alt="">
    <span class = "adress">{{cityName}}</span>
    <div class = "box">
      <div class = "fengxiangwrap">
        <div class = "fengxiang">
          <span>质量 {{list&&list.sd}}</span>
         
        </div>
    </div>
    <div class = "searchWrap">
      <div class = "search">
          <span> <a href="../counter/main">搜索</a></span>
        </div>
    </div>
    </div>

    <nowweather></nowweather>
    <detail></detail>

  </div>
 
</template>

<script>
import nowweather from '@/components/nowweather'
import detail from '@/components/detail'
// Use Vuex
import store from './store';
// const state = store.state;
// console.log(state.cityName);
export default {
  components: {
    nowweather,
    detail
  },
  computed:{
    cityName() {
      return store.state.cityName;
    },
    cityId(){
      return store.state.cityId;
    },
    list(){
      return store.state.list[1]
    }

  },
  mounted(){
    mpvue.showModal({
      title: '警告',
      content: '小程序将获取你的地理位置',
      cancelText:"拒绝",
      cancelColor:"#000",
      confirmText:"确定",
      confirmColor:"#576B95",
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
          mpvue.showToast({
            title: '玩命加载中',
            icon: 'success',
            duration: 500
          });
          mpvue.getLocation({
          type: 'wgs84',
          success :(res)=> {
            const latitude = res.latitude
            const longitude = res.longitude
            const speed = res.speed
            const accuracy = res.accuracy
            console.log(latitude,longitude)
            // 经纬度查询天气
            mpvue.request({
              url: `http://api.yytianqi.com/weatherhours?city=${latitude},${longitude}`+'&key=wb5g8h6ld2wbivh4', //仅为示例，并非真实的接口地址
              header: {
                'content-type': 'application/json' // 默认值
              },
              success :(res)=> {
                console.log("天气接口")
                console.log(res.data.data);
                // this.data.cityId = res.data.data.cityId;
                // this.data.cityName = res.data.data.cityName;
                // this.data.list = res.data.data.list;
                store.commit("updateCityName",res.data.data.cityName)
                store.commit("updateCityId",res.data.data.cityId)
                store.commit("updateList",res.data.data.list)
              }
            })

             // 经纬度查询天气
            mpvue.request({
                url: `http://api.yytianqi.com/forecast7d?city=${latitude},${longitude}`+'&key=wb5g8h6ld2wbivh4', //仅为示例，并非真实的接口地址
                header: {
                'content-type': 'application/json' // 默认值
                },
                success :(res)=> {
                console.log("七天接口")
                console.log(res.data.data);
                // this.data.cityId = res.data.data.cityId;
                // this.data.cityName = res.data.data.cityName;
                // this.data.list = res.data.data.list;
                // store.commit("updateCityName",res.data.data.cityName)
                // store.commit("updateCityId",res.data.data.cityId)
                store.commit("daysList",res.data.data.list)
                }
            })
            mpvue.request({
                url: `http://api.yytianqi.com/air?city=${latitude},${longitude}`+'&key=wb5g8h6ld2wbivh4', //仅为示例，并非真实的接口地址
                header: {
                'content-type': 'application/json' // 默认值
                },
                success :(res)=> {
                console.log("weather")
                console.log(res.data.data);
                // this.data.cityId = res.data.data.cityId;
                // this.data.cityName = res.data.data.cityName;
                // this.data.list = res.data.data.list;
                // store.commit("updateCityName",res.data.data.cityName)
                // store.commit("updateCityId",res.data.data.cityId)
                store.commit("weather",res.data.data)
                }
            })
          }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

    
  },
  
  methods:{
  
  }
  
}
</script>

<style>
  .wrap{
    background:rgb(3, 101, 139);

  }
  .addimg{
    width:60rpx;
    height:60rpx;
  }
  .adress{
    font-size:42rpx;
    color:#fff;
  }
  .box{
    position:relative;
  }
  .fengxiangwrap{
    width:100%;
    height:100rpx;
    background:rgb(3, 101, 139);
    margin-top:20rpx;
  }
  .search{
    width:30%;
    height:100%;
    background:rgb(1, 31, 43);
    border-Top-Left-radius:10%;
    border-Bottom-Left-radius:10%;
    text-align:center;
    position:absolute;
    right:0;
    top:0;
  }
  .search>span{
    font-size:36rpx;
    line-height:100rpx;
    color:#fff;
  }
  .fengxiang{
    width:30%;
    height:100%;
    background:rgb(1, 31, 43);
    border-Top-Right-radius:10%;
    border-Bottom-Right-radius:10%;
    text-align:center;
    
  }
  .fengxiang>span{
    font-size:36rpx;
    line-height:100rpx;
    color:#fff;
  }
  .nowwrap{
    width:100%;
    height:400rpx;
    /* border:1px solid #f00; */
  }
  

  
</style>
