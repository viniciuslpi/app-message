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
    // async getUserContent(context) {
    //   try {
    //     const response = await axios.get('http://localhost:3000/users/62fec5dcecc427f323f77f8c')
    //     context.commit('getUserContent', response.data);
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  },
  modules: {
  }
})
