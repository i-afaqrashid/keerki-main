import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import i18n from './i18n'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import './styles/custom.scss';
Vue.config.productionTip = false

new Vue({
  i18n,
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
