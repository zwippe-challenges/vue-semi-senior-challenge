<template>
  <li class="flex justify-between gap-x-6 py-5 px-24">
    <label class="flex items-center">
      <input type="checkbox" class="mr-2">
      <span>${task}</span>
    </label>
    <div>
      <button class="text-red-500 hover:text-red-700
                     mr-2 delete-btn">Borrar </button>
      <button class="text-blue-500
                     hover:text-blue-700 edit-btn"> Editar</button>
    </div>
  </li>
</template>