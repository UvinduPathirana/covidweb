import Vue from 'vue'
import App from './App.vue'

import Full from './components/Full.vue'


Vue.component('app-full',Full);


new Vue({
  el: '#app',
  render: h => h(App)
})



