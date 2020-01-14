import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Router from 'vue-router'

import Routes from './routes.js'
import { store } from './store/store.js'

Vue.config.productionTip = false

Vue.use(Router)
const router = new Router({
  routes: Routes
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
