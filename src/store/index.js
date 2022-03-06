import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
  },
  state: {

  },
  mutations: {
    changeLogin (state, user) {
      state.token = user.token;
      localStorage.setItem('token', user.token);
    }
  },
  actions: {
  },
  modules: {
  }
})
