export const currentStatus = (state) => {
  return state.status
}

export const username = (state) => {
  return state.user?.name || ''
}

export const userId = (state) => {
  return state.user?.id || ''
}