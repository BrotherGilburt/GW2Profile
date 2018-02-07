
import axios from 'axios'
import * as firebase from 'firebase'

const state = {
    account: {
        name: null,
        age: null,
        ap: null,
        fractal: null,
        wvw: null
    },
    personal: {
        name: null,
        age: null,
        location: null,
        bio: null
    }
}

const mutations = {
    setAccount(state, {name, age, ap, fractal, wvw}) {
        state.account.name = name
        state.account.age = age
        state.account.ap = ap
        state.account.fractal = fractal
        state.account.wvw = wvw
    },
    setPersonal(state, {name, age, location, bio}) {
        state.personal.name = name
        state.personal.age = age
        state.personal.location = location
        state.personal.bio = bio
    },
    reset(state) {
        state.account.name = null
        state.account.age = null
        state.account.ap = null
        state.account.fractal = null
        state.account.wvw = null

        state.personal.name = null
        state.personal.age = null
        state.personal.location = null
        state.personal.bio = null
    }
}

const actions = {
  /*
   * Updates account info from the gw2 api and stores it in firebase.
   */
  loadAccountInfo({ commit, getters }) {
    let apikey = getters.apikeyValue
    let path = 'https://api.guildwars2.com/v2/account?access_token=' + apikey

    axios.get(path).then( (response) => {
      let account = {
        name: response.data.name,
        age: response.data.age,
        ap: response.data.daily_ap + response.data.monthly_ap,
        fractal: response.data.fractal_level,
        wvw: response.data.wvw_rank
      }

      commit('setAccount', account)

      let userid = firebase.auth().currentUser.uid
      let path = '/users/' + userid + '/profile/account'

      firebase.database().ref(path).set(account)
      }).catch( (error) => {
        console.log('setAccount() - GET Failed: ' + error)
      })
    },
    /*
     * Load Personal info from firebase.
     */
    loadPersonalInfo({ commit }) {    
      let userid = firebase.auth().currentUser.uid
      let path = '/users/' + userid + '/profile/personal'

      firebase.database().ref(path).once('value').then(snapshot => {
        console.log('personal read: ', snapshot.val())
          
        if (snapshot.val() == null) return
          
        commit('setPersonal', snapshot.val())
        })
    },
    /*
     * Set/update personal info in firebase.
     */
    updatePersonalInfo({commit}, {name, age, location, bio}) {
      let userid = firebase.auth().currentUser.uid
      let path = '/users/' + userid + '/profile/personal'

      let personal = {name, age, location, bio}

      firebase.database().ref(path).set(personal).then(()=> {
        commit('setPersonal', personal)
      }).catch((error) => {
        //ERROR handling
        console.log('Error: setPersonal() - ' + error)
      })
    },
    /*
     * Deletes the profile information from firebase.
     */
    deleteProfile({ commit }) {
        let userid = firebase.auth().currentUser.uid
        let path = '/users/' + userid
        firebase.database().ref(path).remove()
        commit('setAccount', {name: null, age: null, ap: null, fractal: null, wvw: null})
    }
}

const getters = {
    accountName(state) {
        return state.account.name
    },
    accountAge(state) {
        return state.account.age
    },
    accountAp(state) {
        return state.account.ap
    },
    accountFractal(state) {
        return state.account.fractal
    },
    accountWvw(state) {
        return state.account.wvw
    },
    personalName(state) {
        return state.personal.name
    },
    personalAge(state) {
        return state.personal.age
    },
    personalLocation(state) {
        return state.personal.location
    },
    personalBio(state) {
        return state.personal.bio
    },
    shareableLink(state, getters, rootState) {
        if (rootState.status === false) return null
        return 'https://testproject-c8451.firebaseapp.com/shared/' + firebase.auth().currentUser.uid
    },
    shareableRouterLink(state, getters, rootState) {
        if (rootState.status === false) return null
        return '/shared/' + firebase.auth().currentUser.uid
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}