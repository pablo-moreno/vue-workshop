export default {
  state: {
    auth: {
      user: undefined,
      isAuthenticated: false,
    }
  },
  mutations: {
    login(state, user) {
      state.auth.user = user
      state.auth.isAuthenticated = true
    },
    logout(state) {
      state.auth.user = undefined
      state.auth.isAuthenticated = false
    },
  },
  actions: {
    login({ commit }, user) {
      commit('login', user)
    },
    logout({ commit }) {
      commit('logout')
    }
  }
}
