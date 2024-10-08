import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = { // 初始化状态值--一定要有该属性对象
  dataSource2: [{
    'name': '张三',
    'work_no': '1012',
    'birthday': '2019-10-02',
    'email': '123@qq.com',
    'gender': '男',
    'achievement': '98'
  }],
  appConut: 0,
  changeNum: 0,
  actionDes: '还没有发送请求'
}
const mutations = { // 自定义改变state初始值的方法--一定要有该属性对象
  ADD_COUNT: (state, n) => {
    state.appConut += n
  },
  DELETE_COUNT: (state, n) => {
    state.appConut -= n
  },
  RESET_APP_COUNT: (state, mes) => {
    console.log('执行了', mes)
    state.actionDes = mes
  }
}
const getters = { // 状态计算属性--该属性对象不是必须的
  watchAppConut: state => {
    return state.appConut + 100
  }
}
const actions = { // 异步操作状态--该属性对象不是必须的
  RESET_ACCTION_APP_COUNT: ({ commit }, mes) => {
    commit('RESET_APP_COUNT', mes)
  }
}
const modules = { // 状态模块--该属性对象不是必须的(可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理)

}
const store = new Vuex.Store({
  state,
  mutations,
  // 下面三个非必须
  getters,
  actions,
  modules
})

export default store
