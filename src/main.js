import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
const fb = require('./firebase')

Vue.config.productionTip = false

let app;

fb.auth.onAuthStateChanged(user => {
 if(!app) {
   app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
 }
})

