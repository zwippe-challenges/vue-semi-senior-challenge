import { computed } from "vue"
import { useStore } from "vuex"

const useTask = () => {
  const store = useStore()

  const createTask = async( task ) => {
    const resp = await store.dispatch('tasks/createTask', task)
    return resp
  }

  const updateTask = async( task ) => {
    const resp = await store.dispatch('tasks/updateTask', task)
    return resp
  }

  const deleteTask = async( taskId ) => {
    const resp = await store.dispatch('tasks/deleteTask', taskId)
    return resp
  }

  const listTasks = async() => {
    const resp = await store.dispatch('tasks/listTask')
    return resp
  }

  

  return {
    createTask,
    updateTask,
    deleteTask,
    listTasks,
  }
}

export default useTask