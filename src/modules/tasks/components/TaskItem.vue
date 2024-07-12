<script setup lang="ts">
import useTask from '@/modules/tasks/composables/useTask';

const { listTasks, updateTask, deleteTask } = useTask()

const tasks = async() => await listTasks()

const editTask = async (task) => {
  await updateTask(task)
}

const changeState = async (task) => {
  task.state = !task.state
  editTask(task)
}

const destroyTask = async (taskId) => {
  await deleteTask(taskId)
}

</script>
<template id="js">
  <li v-for="task in tasks" class="flex justify-between gap-x-6 py-5 px-24" :key="task.taskId">
    <label class="flex items-center">
      <input @click="changeState(task)" type="checkbox" class="mr-2">
      <span>{{ task.title }}</span>
    </label>
    <div>
      <button @click="destroyTask(task.taskId)" class="text-red-500 hover:text-red-700
                     mr-2 delete-btn">Borrar </button>
      <button @click="editTaskTask(task)" class="text-blue-500
                     hover:text-blue-700 edit-btn"> Editar</button>
    </div>
  </li>
</template>