import * as firebase from 'firebase'

const state = {
  sharedUid: {value: null, valid: false},
  sharedAccount: {
    name: null,
    age: null,
    ap: null,
    fractal: null,
    wvw: null
  },
  sharedPersonal: {
    name: null,
    age: null,
    location: null,
    bio: null
  }
}

const mutations = {
  setSharedUid(state, {value, valid}) {
    state.sharedUid.value = value
    state.sharedUid.valid = valid
  },
  setSharedAccount(state, {name, age, ap, fractal, wvw}) {
    state.sharedAccount.name = name
    state.sharedAccount.age = age
    state.sharedAccount.ap = ap
    state.sharedAccount.fractal = fractal
    state.sharedAccount.wvw = wvw
  },
  setSharedPersonal(state, {name, age, location, bio}) {
    state.sharedPersonal.name = name
    state.sharedPersonal.age = age
    state.sharedPersonal.location = location
    state.sharedPersonal.bio = bio
  },
  resetSharedAccount(state) {
    /*Account Info*/
    state.sharedAccount.name = null
    state.sharedAccount.age = null
    state.sharedAccount.ap = null
    state.sharedAccount.fractal = null
    state.sharedAccount.wvw = null

    /*Personal Info*/
    state.sharedPersonal.name = null
    state.sharedPersonal.age = null
    state.sharedPersonal.location = null
    state.sharedPersonal.bio = null
  }
}

const actions = {
  loadSharedProfile({ commit }, {value}) {
    let path = '/users/' + value + '/profile'
    firebase.database().ref(path).once('value').then(snapshot => {
      commit('setSharedUid', {value, valid: true})
      commit('setSharedAccount', snapshot.val().account)
      commit('setSharedPersonal', snapshot.val().personal)
    }).catch( (err) => {
      commit('setSharedUid', {value: null, valid: false})
      commit('resetSharedAccount')
    })
  }
}

const getters = {
  sharedUidValid(state) {
    return state.sharedUid.valid
  },
  sharedAccount(state) {
    return state.sharedAccount
  },
  sharedAccountName(state) {
    return state.sharedAccount.name
  },
  sharedAccountAge(state) {
    return state.sharedAccount.age
  },
  sharedAccountAp(state) {
    return state.sharedAccount.ap
  },
  sharedAccountFractal(state) {
    return state.sharedAccount.fractal
  },
  sharedAccountWvw(state) {
    return state.sharedAccount.wvw
  },
  sharedPersonalName(state) {
    return state.sharedPersonal.name
  },
  sharedPersonalAge(state) {
    return state.sharedPersonal.age
  },
  sharedPersonalLocation(state) {
    return state.sharedPersonal.location
  },
  sharedPersonalBio(state) {
    return state.sharedPersonal.bio
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}