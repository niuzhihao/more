import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/index'
import storage from '@/utils/storage'
import cart from '@/store/cart'
import addresss from './addresss'

import user from './user/index'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    cart,
    addresss,
    user
  },

  state: {
    info: '',
    address: '',
    path: ''
  },

  mutations: {
    getinfos (state, res) {
      if (res.code === 1) {
        storage.setItem('info', res)
      } else {
        localStorage.removeItem('info')
      }
      state.info = res
    },
    setaddress (state, data) {
      state.address = data
    },
    setcallbackpath (state, data) {
      state.path = data
    }
  },

  actions: {
    getinfo ({
      commit
    }) {
      api.user.getinfo().then(res => {
        commit('getinfos', res)
      })
    },
    address ({commit}, data) {
      commit('setaddress', data)
    }
  }
})
