actions: {
  async register(context, { email, password, name}){
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (response) {
          context.commit('setUser', response.user)
          response.user.updateProfile({displayName: name})
      } else {
          throw new Error('Unable to register user')
      }
  },

  async logIn(context, { email, password }){
    const response = await signInWithEmailAndPassword(auth, email, password)
    if (response) {
        context.commit('setUser', response.user)
    } else {
        throw new Error('login failed')
    }
  },

  async logOut(context){
      await signOut(auth)
      context.commit('setUser', null)
  },

  async fetchUser(context ,user) {
    context.commit("setLoggedIn", user !== null);
    if (user) {
      context.commit("setUser", {
        displayName: user.displayName,
        email: user.email
      });
    } else {
      context.commit("setUser", null);
    }
  }
}