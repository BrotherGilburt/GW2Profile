import * as firebase from 'firebase'

const errorTypes = ['email', 'password', 'both']

const state = {
  login: {
      message: null, //String
      error: null, //a String errorType value
  }
}

const mutations = {
  setLoginError(state, {message, error}) {
    if (message !== undefined) state.login.message = message
    if (message !== undefined) state.login.error = error
  }
}

const actions = {
  signIn({ commit }, { email, password }) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch( (exception) => {
      let message, error
      let errorCode = exception.code
      if (errorCode == "auth/invalid-email") {
        message = 'invalid email'
        error = errorTypes[0]
      } else if (errorCode == "auth/user-not-found") {
        message = 'user not found'
        error = errorTypes[2]
      } else if (errorCode == "auth/wrong-password") {
        message = 'invalid password'
        error = errorTypes[1]
      } else {
        message = 'an error occurred'
        error = errorTypes[2]
      }
      commit('setLoginError', {message, error})
    })
  },
  signUp({ commit }, { email, password }) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch( (exception) => {
      let message, error
      let errorCode = exception.code
      if (errorCode == "auth/email-already-in-use") {
        message = "email unavailable"
        error = errorTypes[0]
      } else if (errorCode == "auth/invalid-email") {
        message = 'invalid email'
        error = errorTypes[0]
      } else if (errorCode == "auth/weak-password") {
        message = '6+ characters required'
        error = errorTypes[1]
      } else {
        message = 'an error occurred'
        error = errorTypes[2]
      }
      commit('setLoginError', {message, error})
    })
  },
  signOut() {
    firebase.auth().signOut()
  },
  clearError({ commit }) {
    commit('setLoginError', {message: null, error: null})
  }
}

const getters = {
  isLoginError(state) {
    if (state.login.error == null || errorTypes.indexOf(state.login.error) === -1) return false
    return true
  },
  loginError(state) {
    return {
      type: state.login.error,
      message: state.login.message
    }
  },
  loginEmailError(state) {
    if (state.login.error === 'email') return state.login.message
    return null
  },
  loginPasswordError(state) {
    if (state.login.error === 'password') return state.login.message
    return null
  },
  loginBothError(state) {
    if (state.login.error === 'both') return state.login.message
    return null
  }
}

export default {
    state,
    mutations,
    actions,
    getters
}