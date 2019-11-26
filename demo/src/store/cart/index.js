import api from '@/api'
export default {
  namespaced: true,
  state: {
    cartlist: [],
    commodity: []
  },
  mutations: {
    getcart (state, res) {
      state.cartlist = res
    },
    getcommodity (state, data) {
      state.commodity = data
    }
  },
  actions: {
    getcart ({commit}) {
      api.shop.getshop().then(res => {
        commit('getcart', res.data)
      })
    },
    getcommodity ({commit}) {
      api.shop.commodity().then(res => {
        commit('getcommodity', res.data)
      })
    }
  }
}
