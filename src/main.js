// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable no-new */

import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import { store } from './store'
import Sortable from 'sortablejs'

Vue.directive('sortable', {
  inserted: function (el, binding) {
    new Sortable(el, binding.value || {})
  }
})
Vue.use(Buefy)

Vue.config.productionTip = true

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store
})
