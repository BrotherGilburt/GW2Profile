import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import axios from 'axios'
import login from './modules/login.js'
import apikey from './modules/apikey.js'
import userProfile from './modules/userProfile'
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
    apikeyListener: {
      ref: null,
      funct: null
    }
  },
  mutations: {
    reset(state) {
      state.status = false
      state.apikeyListener.ref = null
      state.apikeyListener.funct = null
    },
    setStatus(state, status) {
      state.status = status
    },
    setApikeyListener(state, {ref, funct}) {
      state.apikeyListener.ref = ref
      state.apikeyListener.funct = funct
    }
  },
  actions: {
    init({ commit , state }) {
      //initalize app
      if (!firebase.apps.length) firebase.initializeApp(config)

      //Set listener for user status
      firebase.auth().onAuthStateChanged( (user) => {
        if (user) {
          commit('setStatus', true)
          let userid = firebase.auth().currentUser.uid
          let path = "/users/" + userid + "/apikey"
          let ref = firebase.database().ref(path)
          let funct = ref.on('value', (snapshot) => {
            commit('setApikey', { value: snapshot.val()})
          })
          commit('setApikeyListener', {funct, ref})
        } else {
          if (state.apikeyListener.ref != null && state.apikeyListener.funct != null) {
            state.apikeyListener.ref.off('value', state.apikey.funct)
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