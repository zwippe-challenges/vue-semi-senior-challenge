import { createStore } from "vuex";

import auth from "@/modules/auth/store";
// import tasks from "@/modules/tasks/store";


const store = createStore({
  modules: {
    auth,
    // tasks
  }
})

export default store

// import { createStore } from "vuex";

// export default createStore({
//   state: {
//     user: {
//       loggedIn: false,
//       data: null
//     }
//   },
//   mutations: {
//     setLoggedIn(state, value){
//       state.user.loggedIn = value;
//     },
  
//     setUser(state, data){
//       state.user.data = data;
//     }
//   },
//   actions: {
//     async register(context, { email, username, password}){
//       console.log({email});
      
//         const response = await createUserWithEmailAndPassword(auth, email, password)
//         if (response) {
//             context.commit('setUser', response.user)
//             response.user.updateProfile({displayName: username})
//         } else {
//             throw new Error('Unable to register user')
//         }
//     },
  
//     async logIn(context, { email, password }){
//       const response = await signInWithEmailAndPassword(auth, email, password)
//       if (response) {
//           context.commit('setUser', response.user)
//       } else {
//           throw new Error('login failed')
//       }
//     },
  
//     async logOut(context){
//         await signOut(auth)
//         context.commit('setUser', null)
//     },
  
//     async fetchUser(context ,user) {
//       context.commit("setLoggedIn", user !== null);
//       if (user) {
//         context.commit("setUser", {
//           displayName: user.displayName,
//           email: user.email
//         });
//       } else {
//         context.commit("setUser", null);
//       }
//     }
//   },
//   getters: {
//     user(state){
//       return state.user
//     }
//   }
// })