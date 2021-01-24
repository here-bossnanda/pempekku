import axios from '../api/axios'
import router from '../router'

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
        commit('setToken', data.access_token, { root: true })
        router.push('/')
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }
}

export default { namespaced: true, actions }
