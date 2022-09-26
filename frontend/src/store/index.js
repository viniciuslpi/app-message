import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: "Vinicius Pimentel",
      email: "teste@gmail.com",
      nickName: "@vini",
      headline: "Software Developer",
      posts: [{},{}],
      userImg: "https://pbs.twimg.com/profile_images/697111425529962496/FxgO6Crg_400x400.jpg"
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
