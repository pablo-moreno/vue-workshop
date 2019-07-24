import Vue from 'vue'
import Vuex from 'vuex'

import AuthStore from './auth.store'
import CatindrStore from './catindr.store'

Vue.use(Vuex)

// Vuex: https://vuex.vuejs.org/guide/
export default new Vuex.Store({
  state: { 
    ...AuthStore.state, 
    ...CatindrStore.state, 
  },
  mutations: { 
    ...AuthStore.mutations, 
    ...CatindrStore.mutations, 
  },
  actions: { 
    ...AuthStore.actions, 
    ...CatindrStore.actions, 
  }
})
