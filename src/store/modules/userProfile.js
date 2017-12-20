
import axios from 'axios'
import * as firebase from 'firebase'

const state = {
    account: {
        name: null,
        age: null,
        ap: null,
        fractal: null,
        wvw: null
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
    reset(state) {
        state.account.name = null
        state.account.age = null
        state.account.ap = null
        state.account.fractal = null
        state.account.wvw = null
    }
}

const actions = {
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
    deleteUserInfo({ commit }) {
        let userid = firebase.auth().currentUser.uid
        let path = '/users/' + userid + '/account'
        firebase.database().ref(path).remove()
        commit('setAccount', {name: null, age: null, ap: null, fractal: null, wvw: null})
    }
}

const getters = {
    account(state) {
        return state.account
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