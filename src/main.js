import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import {store} from './store'
import {router} from './router'

const vm = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyAHmlXOLaS6vpp5VORKELlBYQURtn8utao",
      authDomain: "testproject-c8451.firebaseapp.com",
      databaseURL: "https://testproject-c8451.firebaseio.com",
      projectId: "testproject-c8451",
      storageBucket: "testproject-c8451.appspot.com",
      messagingSenderId: "809672710893"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('changeStatus', {status: true})
        this.$store.dispatch('listenApikey', {listen: true})
      } else {
        this.$store.dispatch('changeStatus', {status: false})
        this.$store.dispatch('listenApikey', {listen: false})
      }
    })
  }
})
