export default {
  state: {
    catindr: {
      kittens: [],
      matches: [],
    },
  },
  mutations: {
    addKittens(state, kittens) {
      state.catindr.kittens = [...state.catindr.kittens, ...kittens]
    },
    match(state, kitten) {
      state.catindr.kittens = state.catindr.kittens.filter(k => k !== kitten)
      state.catindr.matches = [...state.catindr.matches, kitten]
    },
    unmatch(state, kitten) {
      state.catindr.kittens = state.catindr.kittens.filter(k => k !== kitten)
    },
  },
  actions: {
    addKittens({ commit }, kittens) {
      commit('addKittens', kittens)
    },
    match({ commit }, kitten) {
      commit('match', kitten)
    },
    unmatch({ commit }, kitten) {
      commit('unmatch', kitten)
    },
  }
}