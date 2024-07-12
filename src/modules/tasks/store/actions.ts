import { collection, addDoc, getDocs } from 'firebase/firestore';
import { store } from '@/firebase/config'

export const listTasks = async ( { commit } ) => {

  const tasks = await getDocs(collection(store, 'tasks'))
  console.log("tas", tasks);
  

  if (!tasks.value) {
    commit('setTasks',[])
    return
  }
  const tasksq = []
  for (let id of Object.keys(data)){
    entries.push({
      id,
      ...data[id]
    })
  }
  commit('setEntries',entries)
  console.log(data);
}

export const updateTask = async ({ commit }, task) => {
  // const {date, picture, text} = entry
  const {id, ...restEntry} = entry
  const dataToSave = {...restEntry}

  const resp = await journalApi.put(`/entries/${id}`,dataToSave)
  console.log(resp);

  commit('updateEntry', ...entry)

}

export const createTask = async ({ commit }, task) => {
  const col = collection(store, 'tasks')

  const savedTask = await addDoc(col, task)

  commit('addTask', task)

  return savedTask._key.path.segments[1]
}

export const deleteTask = async ({ commit }, taskId) => {

  const resp = await journalApi.delete(`/entries/${entryId}`)
  console.log(resp);

  commit('deleteEntry', entryId)

}