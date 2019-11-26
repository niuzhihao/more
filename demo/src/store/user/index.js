import api from '@/api/index'
const user = {
  namespaced: true,

  state: {
    info: ''
  },

  mutations: {
    getinfos (state, res) {
      state.info = res
    }
  },

  actions: {
    getinfo ({commit}) {
      api.user.getinfo().then(res => {
        commit('getinfos', res)
      })
    }
  }
}

export default user
