<template>
<!-- 循环 -->
    <div class="wrap">
        <div class = "item" v-for="(item,i) in days" :key="i">
            <p>{{item.date}}</p>
            <p>{{item.tq1}}-{{item.tq2}}</p>
            <p>{{item.qw2}}/{{item.qw1}}</p>
            <p>{{item.fl1}}</p>
            <p>{{item.fx1}}</p>
        </div>
         <!-- <div class = "item">
            <p>今天</p>
            <p>3月21</p>
            <p>晴</p>
            <p>温度</p>
            <p>数据</p>
            <p>数据</p>
        </div>
        <div class = "item">
            <p>今天</p>
            <p>3月21</p>
            <p>晴</p>
            <p>温度</p>
            <p>数据</p>
            <p>数据</p>
        </div> -->
    </div>
</template>

<script>
import store from '../pages/index/store';

export default {
    computed:{
        days(){
            return store.state.days
        }
    }
}
</script>

<style scoped>
    .wrap{
        width:100%;
        height:374rpx;
        padding-top:20rpx;
        color:#fff;
        border:1px solid #000;
        position:absolute;
        left:0;
        top:804rpx;
        background:rgb(3, 103, 143);
        display:flex;
    }
    .item{
        flex:1;
        text-align:center;
    }
</style>
