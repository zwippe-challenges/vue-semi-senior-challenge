import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";

export const createUser = async ({ commit }, user ) => {

  const { email, username, password } = user
  
  try {
    const { _tokenResponse } = await createUserWithEmailAndPassword(auth, email, password)

    const { idToken, refreshToken, localId } = _tokenResponse
    
    delete user.password
    user.id = localId

    commit('loginUser',{user, idToken, refreshToken})

    return {ok: true, message: null}
  } catch (error) {

    return { ok: false, message: 'Register failed'}
  }
}

export const singInUser = async ({ commit }, user ) => {

  const { email, password } = user

  try {
    const { _tokenResponse } = await signInWithEmailAndPassword(auth, email, password)

    const { displayName, idToken, refreshToken, localId } = _tokenResponse
    
    user.name = displayName
    user.id = localId
    
    commit('loginUser',{user, idToken, refreshToken})

    return {ok: true, message: null}

  } catch (error) {

    return { ok: false, message: 'Login failed'}
  }
}

export const checkAuthentication = async ({ commit }) => {
  const idToken = localStorage.getItem('idToken')
  const refreshToken = localStorage.getItem('refreshToken')

  if (!idToken) {
    commit('logout')
    return { ok: false, message: 'No hay token.'}
  }

  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email } = user

        const _user = {
          name: displayName,
          email
        }

        commit('loginUser', { _user, idToken, refreshToken})

        return {ok: true}
      } else {
        return { ok: false, message: 'Session expired.'}
      }
    });

    

  } catch (error) {
    commit('logout')
    return { ok: false, message: 'backend error.'}
  }
}
