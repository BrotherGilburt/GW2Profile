import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    status: false,
    apikey: {
      value: null,
      error: false,
      edit: false
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
      if (value != undefined)
        state.apikey.value = value
      if (error != undefined && error != null)
        state.apikey.error = error
      if (edit != undefined && edit != null)
        state.apikey.edit = edit
    }
  },
  actions: {
    changeStatus({
      commit
    }, payload) {
      if (payload.status === false)
      {
        commit('reset')
        console.log('reset')
      }
      else
        commit('setStatus', payload)
    },
    changeApikey({
      commit
    }, {
      value,
      error
    }) {
      commit('setApikey', {
        value,
        error
      })
    }
  },
  getters: {
    status(state) {
      return state.status
    },
    apikey(state) {
      return state.apikey
    },
  }
})
