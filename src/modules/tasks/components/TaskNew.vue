<script setup lang="ts">
import { ref } from 'vue'
import useTask from '@/modules/tasks/composables/useTask';
import useAuth from '@/modules/auth/composables/useAuth';

const { createTask } = useTask()
const { userId } = useAuth()

const task = ref({
    title: '',
    state: 'pending',
    user_id: userId.value
})

const addTask = async () => {
    await createTask(task.value)
}

</script>


<template>
    <div class="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-8">
        <label class="block mx-24 text-sm font-medium leading-6 text-gray-900"> Nueva Tarea</label>
        <div class="relative mt-2 rounded-md shadow-sm mx-24">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="text-gray-500 sm:text-sm"></span>
            </div>
            <input v-model="task.title" type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nueva tarea.">
            <div class="absolute inset-y-0 right-0 flex items-center">
                <button @click="addTask" type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-8 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Crear</button>
            </div>
        </div>
    </div>
</template>