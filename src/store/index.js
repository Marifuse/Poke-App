import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const pokemonURL = 'https://pokeapi.co/api/v2'

export default new Vuex.Store({
  state: {
    currentUser: null,
    results: []
  },
  mutations: {
    // Mutación del usuario
    SET_CURRENT_USER(state, user) { state.currentUser = user },
    GET_POKEMON(state, results) { state.results = results}
  },
  actions: {
    // Usser
    setCurrentUser({commit}, user) { commit('SET_CURRENT_USER', user) },
    getPokemon({commit}) {
      axios
        .get(`${pokemonURL}/pokemon?limit=100&offset=200`)
        .then((response) => {
          commit('GET_POKEMON', response.data)
      })
    }
  },
  modules: {
  }
})
