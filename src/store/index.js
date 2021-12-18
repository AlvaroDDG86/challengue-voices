import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/data/voices.json'
Vue.use(Vuex)

function sortDesc (a, b) {
  if (a.name > b.name) {
    return -1
  }
  if (a.name < b.name) {
    return 1
  }
  return 0
}

function sortAsc (a, b) {
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
}

export default new Vuex.Store({
  state: {
    voices: data,
    favs: [],
    active: null,
    filters: {
      text: '',
      tags: 'All',
      order: 'asc'
    }
  },
  mutations: {
    SET_FAVOURITE: (state, payload) => {
      const index = state.favs.findIndex(voice => voice.id === payload.id)
      if (index === -1) state.favs.unshift(payload)
      else state.favs.splice(index, 1)
    },
    SET_ACTIVE: (state, payload) => {
      state.active = payload
    },
    SET_FILTER_TAG: (state, tag) => {
      Vue.set(state.filters, 'tags', tag)
    },
    SET_ORDER: (state, order) => {
      Vue.set(state.filters, 'order', order)
    }
  },
  actions: {
    setFavourite ({ commit }, payload) {
      commit('SET_FAVOURITE', payload)
    },
    setActive ({ commit }, payload) {
      commit('SET_ACTIVE', payload)
    },
    setActiveRandom ({ commit, state }) {
      const random = state.voices[Math.floor((Math.random() * state.voices.length - 1) + 1)]
      commit('SET_ACTIVE', random)
    },
    setFilterTag ({ commit }, tag) {
      commit('SET_FILTER_TAG', tag)
    },
    setOrder ({ commit }, order) {
      commit('SET_ORDER', order)
    }
  },
  modules: {
  },
  getters: {
    // voices: (state) => state.voices,
    voices: (state) => {
      return state.voices.filter(voice => {
        return (
          voice.name.toLowerCase().includes(state.filters.text.toLowerCase()) &&
          voice.tags.some(tag => (state.filters.tags === 'All' ||
              state.filters.tags.includes(tag)))
        )
      }).sort(state.filters.order === 'asc' ? sortAsc : sortDesc).map(voice => {
        return {
          ...voice,
          fav: state.favs.findIndex(fav => fav.id === voice.id) !== -1,
          active: state.active && voice.id === state.active.id
        }
      })
    },
    favs: (state) => state.favs.map(voice => {
      return {
        ...voice,
        fav: true,
        active: state.active && voice.id === state.active.id
      }
    }),
    active: (state) => state.active,
    tagOptions: (state) => {
      return [
        'All',
        ...state.voices.reduce((prev, current) => {
          current.tags.forEach(tag => {
            if (prev.indexOf(tag) === -1) prev.push(tag)
          })
          return prev
        }, []).map(tag => tag)
      ]
    },
    filters: (state) => state.filters
  }
})
