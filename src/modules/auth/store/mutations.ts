mutations: {
  setLoggedIn(state, value){
    state.user.loggedIn = value;
  },

  setUser(state, data){
    state.user.data = data;
  }
}