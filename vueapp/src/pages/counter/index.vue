<template>
  <div class="word">
    <div class="box">
        <h2 style="color:#fff;margin-left:10px" @click="goback">取消</h2>
        <h2 class="sun">选择位置</h2>
        <h2 style="color:#fff;margin-right:10px" @click="goIndex"><a href="../index/index.vue"></a>确认</h2>
    </div>
    <div class="search">
      <input type="text" placeholder="搜索地点"  v-model="keyword">
    </div>
    <div v-if="flag">
        <map id="map" :longitude="longitude"  :latitude="latitude" :scale="14" :bindcontroltap="controltap" :controls="controls"  :markers="markers"  :bindmarkertap="markertap"  :bindregionchange="regionchange" show-location style="width: 100%; height: 300px;"></map>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import { mapState, mapActions } from "vuex"
export default {
  data(){
     return{
       latitude:"",
       longitude:"",
       flag:false,
    //     markers: [{
    //     iconPath: "../../static/tabs/1.png",
    //       id: 1,
    //     latitude:"",
    //     longitude:"",
    //     width: 50,
    //     height: 50
    // }],
    //     controls: [{
    //   id: 1,
    //   iconPath: '../../static/tabs/home.png',
    //   position: {
    //     left: 0,
    //     top: 300 - 50,
    //     width: 50,
    //     height: 50
    //   },
    //   clickable: true
    // }]
     }
  },
  computed: {
     keyword: {
        get() {
              return store.state.keyword;
          },
        set(val) {
              console.log(val);
              store.commit("getKeyword", val);
            }
        },
     
    },
  mounted(){     
  },
  watch:{
     keyword(newVal){
       console.log(newVal)
        mpvue.request({
       url: 'http://api.map.baidu.com/geocoder?address='+newVal+'&output=json&key=37492c0ee6f924cb5e934fa08c6b1676&city=%E6%AD%A6%E6%B1%89', 
       header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res)=> {
      
        this.flag=true
        this.longitude=res.data.result.location.lng
        this.latitude=res.data.result.location.lat
        mpvue.setStorageSync('longitude',res.data.result.location.lng)
        mpvue.setStorageSync('latitude',res.data.result.location.lat)
      }
    })
     },

  }, 
   regionchange(e) {
          console.log(e.type)
        },
      markertap(e) {
        console.log(e.markerId)
      },
      controltap(e) {
        console.log(e)
      },
  methods: {
    goback(){
      history.go(-1)
    },
    goIndex(){
      this.$router.push({name:"index"})
    }

      //   regionchange(e) {
      //     console.log(e.type)
      //   },
      // markertap(e) {
      //   console.log(e.markerId)
      // },
      // controltap(e) {
      //   console.log(e)
      // }
  }
}
</script>
<style scoped>
  .word{
    width: 100vw;
    height:100vh;
    display: flex;
    flex-direction: column;
  }
  .word .box{
    color:#fff;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    display: flex;
    background-color:black;
  }
  .box .sun{
    flex:1;
    text-align: center;
  }
  .word .search{
    text-align: center;
  }
  .search input{
    width: 96%;
    height:30px;
    margin-top:10px;
    margin-left:8px;
    background-color: #ececec;
  }
   #map{
     width: 100%;
     height:400px;
     margin-top:20px;
 }
</style>

