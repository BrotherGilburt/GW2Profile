import * as firebase from 'firebase'

const state = {
    sharedUid: {value: null, valid: false},
    sharedAccount: {
        name: null,
        age: null,
        ap: null,
        fractal: null,
        wvw: null
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
    resetSharedAccount(state) {
        state.sharedAccount.name = null
        state.sharedAccount.age = null
        state.sharedAccount.ap = null
        state.sharedAccount.fractal = null
        state.sharedAccount.wvw = null
    }
}

const actions = {
    loadSharedProfile({ commit }, {value}) {
        let path = '/users/' + value + '/profile'
        console.log(path)
        firebase.database().ref(path).once('value').then(snapshot => {
            commit('setSharedUid', {value, valid: true})
            commit('setSharedAccount', snapshot.val().account)
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
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}