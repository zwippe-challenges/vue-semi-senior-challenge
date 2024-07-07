<script setup lang="ts">
import TaskNew from "@/modules/tasks/components/TaskNew.vue";
import TaskItem from "@/modules/tasks/components/TaskItem.vue"
</script>

<template>
  <div class="mx-auto max-w-7xl py-20 px-2 sm:px-6 lg:px-8">
    <h1 class="font-bold text-2xl">Tareas</h1>
    <hr/>
    <TaskNew />

    <ul role="list" class="divide-y divide-gray-100">
      <TaskItem />
    </ul>
  </div>
</template>