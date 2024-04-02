export default new Vuex.Store({
    state: {
      token: localStorage.getItem('token') || ''
    },
    mutations: {
      setToken(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      }
    },
    actions: {
      login({ commit }, credentials) {
        return axios.post('/api/login', credentials)
          .then(({ data }) => {
            commit('setToken', data.token);
          });
      }
    }
  });