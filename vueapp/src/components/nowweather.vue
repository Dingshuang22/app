<template>
    <div class = "nowweather">
        <div class = "nowwrap">
            <div class ="tem">
                <span> {{list&&list.qw}}℃</span>
            </div>

            <div class="weather">
                <span>{{list&&list.tq}}</span>
            </div>
            <!-- 空气质量详情 -->
            <div class="wrap">
                <div class="center">
                    <p>空气等级:{{weather&&weather.level}}</p>
                    <p>pm10:{{weather&&weather.pm10}}</p>
                    <p>{{weather&&weather.measure}}</p>
                </div>
               
            </div>
            <!-- 循环 -->

            <div class="time">
                <div class = "subTime" v-for="(item,i) in lists" :key ="i">
                    <p>{{time.sj+i>24?item.sj+i-24:item.sj+i}}</p>
                    <p>{{item.tq}}</p>
                    <p>{{item.qw}}℃</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import store from '../pages/index/store';
export default {
    computed:{
    list(){
      return store.state.list[1]
    },
    lists(){
        return store.state.list
    },
    time(){
        return store.state.time
    },
    weather(){
        return store.state.weather
    }
  },
}
</script>
 <style scoped>
    .tem{
        width:100%;
        height:80rpx;
        /* border:1px solid #000; */
        line-height:80rpx;
        text-align:center;
        color:#fff;
    }
    .tem>span{
        font-size:52rpx;
    }
    .weather{
        text-align:center;
        color:#fff;
    }
    .wrap{
        margin-top:20rpx;
        display:flex;
        font-size:36rpx;
        color:#fff;
        /* border:1px solid #f00; */
    }
    .left,.center,.right{
        flex:1;
        height:180rpx;
        text-align:center;
    }
    .time{
        margin-top:20rpx;
        width:100%;
        color:#fff;
        background:rgb(2, 52, 71);
        display:flex;
    }
    .subTime{
        flex:1;
        text-align:center;
    }
    .subTime>p{
        margin-top:20rpx;
        margin-left:20rpx;
    }
 </style>
 