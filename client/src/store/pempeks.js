import axios from '../api/axios'
import router from '../router'
import Vue from 'vue'

const state = {
  listPempek: []
}

const mutations = {
  updatePempek (state, payload) {
    state.listPempek = payload
  }
}

const actions = {
  getPempeks ({ commit }, payload) {
    axios({
      method: 'GET',
      url: '/pempeks',
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then(({ data }) => {
        commit('updatePempek', data)
      })
      .catch(error => {
        console.log(error.response.data)
      })
  },
  getOnePempek ({ commit }, payload) {
    console.log(payload, '>>> ini payload')
    return axios({
      method: 'GET',
      url: '/pempeks/' + payload,
      headers: {
        access_token: localStorage.access_token
      }
    })
  },
  addPempek ({ dispatch }, payload) {
    axios({
      method: 'POST',
      url: '/pempeks/',
      data: payload,
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then((data) => {
        return dispatch('getPempeks')
      })
      .then((data) => {
        Vue.toasted.success('added!')
        router.push('/')
      })
      .catch(error => console.log(error.response.data))
  },
  updatePempek ({ dispatch }, payload) {
    console.log(payload, '<<< payload id')
    axios({
      method: 'PUT',
      url: '/pempeks/' + payload.id,
      data: payload,
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then((data) => {
        return dispatch('getPempeks')
      })
      .then((data) => {
        Vue.toasted.success('Updated!')
        router.push('/')
      })
      .catch(error => console.log(error.response.data))
  },
  deletePempek ({ dispatch }, payload) {
    axios({
      method: 'DELETE',
      url: '/pempeks/' + payload,
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then((data) => {
        dispatch('getPempeks')
      })
      .catch(error => console.log(error.response.data))
  }
}

export default { namespaced: true, actions, state, mutations }
