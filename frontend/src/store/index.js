import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    user: {}
    // id: "62fec5dcecc427f323f77f8c",
    // name: "Vinicius Pimentel",
    // email: "teste@gmail.com",
    // nickName: "@vini",
    // headline: "Software Developer",
    // posts: [{},{}],
    // userImg: "https://pbs.twimg.com/profile_images/697111425529962496/FxgO6Crg_400x400.jpg"
  },
  getters: {
  },
  mutations: {
    getUserContent(state, data) {
      state.user = data;
    }
  },
  actions: {
    async getUserContent(context) {
      try {
        const response = await axios.get('http://localhost:3000/users/62fec5dcecc427f323f77f8c')
        context.commit('getUserContent', response.data);
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
