import * as firebase from 'firebase'
import * as axios from 'axios'

const state = {
  apikey: null,
  apikeyStatus: null
}

const mutations = {
  setApikey(state, { value, status }) {
    if (value !== undefined) state.apikey = value
    if (status !== undefined) state.apikeyStatus = status
  },
  reset(state) {
      state.apikey = null,
      state.apikeyStatus = null
  },
  resetApikey(state) {
    state.apikey = null
    state.apikeyStatus = null
  }
}

const actions = {
  submitApikey({ commit }, { value }) {
    commit('setApikey', {status: null})

    let path = "https://api.guildwars2.com/v2/tokeninfo?access_token=" + value
        
    axios.get(path).then( (response) => {
      let userid = firebase.auth().currentUser.uid
      let path = '/users/' + userid + '/apikey'
      firebase.database().ref(path).set(value)
      commit('setApikey', { value, status: 'success' })
    }).catch( (error) => {
      commit('setApikey', { status: 'error' })
    })
  },
  deleteProfile({ commit }) {
    commit('setApikey', {status: null})
    let userid = firebase.auth().currentUser.uid
    let path = '/users/' + userid + '/apikey'
    firebase.database().ref(path).remove()
    commit('setApikey', { value: null, status: 'success' })
  },
  refreshApikey({commit, getters, dispatch}, {value}) {
    if (getters.apikeyValue != value) {
      commit('setApikey', { value, status: 'refresh' })
      dispatch('refreshProfile')
    }
  }
}

const getters = {
  apikeyValue(state) {
    return state.apikey
  },
  apikeyStatus(state) {
    return state.apikeyStatus
  }
}

export default {
    state,
    mutations,
    actions,
    getters
}