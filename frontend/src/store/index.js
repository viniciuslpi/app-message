import { createStore } from 'vuex'
// import axios from 'axios';
export default createStore({
  state: {
    user: {}
  },
  getters: {
  },
  mutations: {
    userContent(state, data) {
      state.user = data;
      console.log(state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
