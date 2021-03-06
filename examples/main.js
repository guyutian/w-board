import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Wboard from '../packages/index'

Vue.config.productionTip = false

Vue.use(Wboard)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
