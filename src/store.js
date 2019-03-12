import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('./firebase.js')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     userProfile: [],
  },
  mutations: {
     
  },
  actions: {
    //   putProfile({commit, state}, payload) {
    //     fb.usersCollection.add()
    //  }
  }
})
