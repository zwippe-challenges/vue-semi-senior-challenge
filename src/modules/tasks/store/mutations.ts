export const setTasks = ( state, tasks ) => {
  state.entries = [...state.tasks, ...tasks]
}

export const updateTask = ( state, task ) => {
  const index = state.tasks.map( e => e.id ).indexOf(task.id)
  state.tasks[index] = task
}

export const addTask = ( state, task ) => {
  state.tasks = [task, ...state.tasks]
}

export const deleteTask = ( state, taskId ) => {
  state.tasks = state.tasks.filter(task => task.id !== taskId)
}

export const clearTasks = ( state ) => {
  state.tasks = []
}