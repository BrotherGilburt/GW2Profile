import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import userProfile from './modules/userProfile.js'

Vue.use(Vuex)

let apikeyListener = {function: null, reference: null}

export const store = new Vuex.Store({
  state: {
    status: false,
    apikey: {
      value: null,
      error: false,
      edit: false,
      listener: null
    }
  },
  mutations: {
    reset(state) {
      state.status = false
      state.apikey = {
        value: null,
        error: false,
        edit: false
      }
    },
    setStatus(state, {
      status
    }) {
      state.status = status
    },
    setApikey(state, {
      value,
      error,
      edit
    }) {
      if (value !== undefined)
        state.apikey.value = value
      if (error !== undefined && error !== null)
        state.apikey.error = error
      if (edit !== undefined && edit !== null)
        state.apikey.edit = edit
    }
  },
  actions: {
    changeStatus({ commit }, payload) {
      if (payload.status === false)
      {
        commit('reset')
        if (apikeyListener.reference == null) return
        apikeyListener.reference.off('value', apikeyListener.function)
        apikeyListener.function = null
        apikeyListener.reference = null
      } else {
        commit('setStatus', payload)
        let userid = firebase.auth().currentUser.uid
        let path = "/users/" + userid + "/apikey"
        apikeyListener.reference = firebase.database().ref(path)
        apikeyListener.function = apikeyListener.reference.on('value', (snapshot) => {
          commit('setApikey', { value: snapshot.val(), error: false, edit: false })
        })
      }
    },
    submitApikey({ commit }, { value }) {
      let path =
      "https://api.guildwars2.com/v2/tokeninfo?access_token=" + value
    $.ajax({
      url: path,
      success: () => {
        let userid = firebase.auth().currentUser.uid
        let path = '/users/' + userid + '/apikey'
        firebase.database().ref(path).set(value)
        commit('setApikey', { value, error: false, edit: false })
      },
      error: () => {
        commit('setApikey', { error: true, edit: true })
      }
    })
    },
    deleteApikey({ commit }) {
      let userid = firebase.auth().currentUser.uid
      let path = '/users/' + userid + '/apikey'
      firebase.database().ref(path).remove()
      commit('setApikey', { value: null, error: false, edit: false })
      console.log('delete key')
    },
    editApikey({ commit }, { edit }) {
      commit('setApikey', { edit })
    },
    errorApikey({ commit }, { error }) {
      commit('setApikey', { error })
    }
  },
  getters: {
    status(state) {
      return state.status
    },
    apikey(state) {
      return state.apikey
    },
  },
  modules: {
    userProfile
  }
})
