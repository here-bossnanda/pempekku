import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import pempeks from './pempeks'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token')
  },
  getters: {
    isAuth: (state) => {
      return state.token !== null // kalau berisi true, kalau kosong false
    }
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
    }
  },
  modules: {
    auth, pempeks
  }
})

export default store
