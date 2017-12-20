import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import {router} from './router'

const vm = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  created() {
    this.$store.dispatch('init')
  }
})
