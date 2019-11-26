import api from '@/api'
import storage from '@/utils/storage'
export default {
  namespaced: true,
  state: {
    List: ''
  },
  mutations: {
    memeda (state, res) {
      state.List = res
    }
  },
  actions: {
    getAddress ({commit}) {
      api.address.getaddress(storage.getItem('info').data.id).then(res => {
        commit('memeda', res.data)
      })
    }
  }
}
