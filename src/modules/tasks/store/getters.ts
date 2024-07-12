export const getTasksByState = (state) => (keyWork = '') => {

  if (keyWork.length === 0) return state.tasks

  return state.tasks.filter(task => task.state.toLowerCase() === keyWork.toLowerCase())
}
