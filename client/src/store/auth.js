import axios from '../api/axios'
import router from '../router'
import Vue from 'vue'

const actions = {
  login ({ commit }, payload) {
    localStorage.setItem('access_token', null)
    commit('setToken', null, { root: true })

    axios({
      method: 'POST',
      url: '/login',
      data: payload
    })
      .then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
        Vue.toasted.success('welcome', {
          action: {
            text: payload.email.split('@')[0],
            position: 'top-right'
          }
        })
        commit('setToken', data.access_token, { root: true })
        router.push('/')
      })
      .catch(error => {
        Vue.toasted.error(error.data.message, { icon: 'skull' })
        console.log(error.response.data)
      })
  }
}

export default { namespaced: true, actions }
