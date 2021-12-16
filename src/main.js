import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './scss/main.scss'
import BaseIcon from '@/components/BaseIcon'
import BaseSelect from '@/components/BaseSelect'
import BaseInput from '@/components/BaseInput'
Vue.component('BaseIcon', BaseIcon)
Vue.component('BaseSelect', BaseSelect)
Vue.component('BaseInput', BaseInput)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
