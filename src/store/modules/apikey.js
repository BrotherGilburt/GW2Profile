import * as firebase from 'firebase'
import * as axios from 'axios'

const state = {
  apikey: {
    value: null,  
    error: false,
    edit: false,
    funct: null,
    ref: null
  }
}

const mutations = {
  setApikey(state, { value, error, edit, funct, ref }) {
    if (value !== undefined) state.apikey.value = value
    if (error !== undefined) state.apikey.error = error
    if (edit !== undefined) state.apikey.edit = edit
    if (funct !== undefined) state.apikey.funct = funct
    if (ref !== undefined) state.apikey.ref = ref
  },
  reset(state) {
      state.apikey = {
      value: null,  
      error: false,
      edit: false,
      funct: null,
      ref: null
    }
  },
  resetApikey(state) {
    state.apikey.value = null
    state.apikey.error = false
    state.apikey.edit = false
  },
  resetApikeyListener(state) {
    state.apikey.funct = null
    state.apikey.ref = null
  }
}

const actions = {
  submitApikey({ commit }, { value }) {
    let path = "https://api.guildwars2.com/v2/tokeninfo?access_token=" + value
        
    axios.get(path).then( (response) => {
      let userid = firebase.auth().currentUser.uid
      let path = '/users/' + userid + '/apikey'
      firebase.database().ref(path).set(value)
      commit('setApikey', { value, error: false, edit: false })
    }).catch( (error) => {
      commit('setApikey', { error: true, edit: true })
    })
  },
  deleteApikey({ commit }) {
    let userid = firebase.auth().currentUser.uid
    let path = '/users/' + userid + '/apikey'
    firebase.database().ref(path).remove()
    commit('setApikey', { value: null, error: false, edit: false })
  },
  editApikey({ commit }, { edit }) {
    commit('setApikey', { edit })
  },
  errorApikey({ commit }, { error }) {
    commit('setApikey', { error })
  }
}

const getters = {
  apikeyValue(state) {
    return state.apikey.value
  },
  apikeyError(state) {
    return state.apikey.error
  },
  apikeyEdit(state) {
    return state.apikey.edit
  }
}

export default {
    state,
    mutations,
    actions,
    getters
}