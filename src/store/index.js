import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import axios from 'axios'
import login from './modules/login.js'
import apikey from './modules/apikey.js'
import userProfile from './modules/userProfile.js'
import sharedProfile from './modules/sharedProfile.js'

Vue.use(Vuex)

const config = {
  apiKey: "AIzaSyAHmlXOLaS6vpp5VORKELlBYQURtn8utao",
  authDomain: "testproject-c8451.firebaseapp.com",
  databaseURL: "https://testproject-c8451.firebaseio.com",
  projectId: "testproject-c8451",
  storageBucket: "testproject-c8451.appspot.com",
  messagingSenderId: "809672710893"
}

export const store = new Vuex.Store({
  state: {
    status: false,
  },
  mutations: {
    reset(state) {
      state.status = false
    },
    setStatus(state, status) {
      state.status = status
    }
  },
  actions: {
    init({ commit , state }) {
      //initalize app
      if (!firebase.apps.length) firebase.initializeApp(config)

      //set listener for user status
      firebase.auth().onAuthStateChanged( (user) => {
        if (user) {
          commit('setStatus', true)
          let userid = firebase.auth().currentUser.uid
          let path = "/users/" + userid + "/apikey"
          let ref = firebase.database().ref(path)
          let funct = ref.on('value', (snapshot) => {
            commit('setApikey', { value: snapshot.val(), error: false, edit: false })
          })
          commit('setApikey', {funct, ref})
        } else {
          if (state.apikey.ref != null && state.apikey.funct != null) {
            state.apikey.ref.off('value', state.apikey.funct)
          }
          commit('reset')
        }
      })
    }
  },
  getters: {
    status(state) {
      return state.status
    },
    userid(state) {
      if (state.status === false) return null
      return firebase.auth().currentUser.uid
    },
    email(state) {
      if (state.status === false) return null
      return firebase.auth().currentUser.email
    }
  },
  modules: {
    login,
    apikey,
    userProfile,
    sharedProfile
  }
})

/*
  STATE
    apikey: {
      value: null,
      error: false,
      edit: false,
      funct: null,
      ref: null
    }

    MUTATIONS
      state.apikey.value = null
      state.apikey.error = false
      state.apikey.edit = false
      state.apikey.funct = null
      state.apikey.ref = null

    setApikey(state, { value, error, edit, funct, ref }) {
      if (value !== undefined) state.apikey.value = value
      if (error !== undefined) state.apikey.error = error
      if (edit !== undefined) state.apikey.edit = edit
      if (funct !== undefined) state.apikey.funct = funct
      if (ref !== undefined) state.apikey.ref = ref
    }

    ACTIONS
    submitApikey({ commit }, { value }) {
      let path =
      "https://api.guildwars2.com/v2/tokeninfo?access_token=" + value
      
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

    apikey(state) {
      return state.apikey
    },



*/