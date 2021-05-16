import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTypedJs from 'vue-typed-js'
import i18n from './i18n'
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
Vue.use(VueTypedJs);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
