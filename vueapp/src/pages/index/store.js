// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cityId:"",
    cityName:"武汉",
    list:[],
    time:"",
    days:[],
    weather:{}
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    },
    updateCityName:(state,result)=>{
        const obj = state
        obj.cityName = result;
    },
    updateCityId:(state,result)=>{
        const obj = state
        obj.cityId = result
    },
    updateList:(state,result)=>{
        const obj  = state
        obj.list = result.splice(1,4)
        // console.log(result[0].sj);
        var date = new Date(result[0].sj);
        // console.log(date.getHours())
        obj.time = date.getHours();
    },
    daysList:(state,result)=>{
        const obj = state
        obj.days = result
    },
    weather:(state,result)=>{
        const obj = state
        obj.weather = result
        // console.log(888);
        // console.log(result);
    }
  }
})

export default store