<script setup>
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";
import { ref } from "vue";

const taskStore = useTaskStore();
const filter = ref("all");
</script>

<template>
  <main class="h-full p-2 text-gray-400">
    <header class="pt-5 bg-orange-100">
      <div class="flex items-center justify-center content-center pt-5">
        <img
          class="max-w-16 -rotate-12"
          src="https://pinia.vuejs.org/logo.svg"
          alt="pinia logo"
        />
        <h1 class="m-0 text-3xl p-5 text-orange-700 font-bold">Pinia Tasks</h1>
      </div>

      <div class="flex items-center justify-center content-center my-2 mb-4 py-2">
        <TaskForm />
      </div>
    </header>
    <div class="flex items-center justify-end gap-2 mr-10">
      <button
        class="bg-orange-700 rounded-md text-white py-2 px-3 font-semibold"
        @click="filter = 'all'"
      >
        ALL Tasks
      </button>
      <button
        class="bg-orange-700 rounded-md text-white py-2 px-3 font-semibold"
        @click="filter = 'favs'"
      >
        Favs Tasks
      </button>
    </div>
    <section v-if="filter === 'all'">
      <p
        class="flex items-center content-center justify-center text-black font-extrabold text-2xl p-5"
      >
        You have {{ taskStore.totalCount }} tasks left
      </p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </section>
    <section v-if="filter === 'favs'">
      <p
        class="flex items-center content-center justify-center text-black font-extrabold text-2xl p-5"
      >
        You have {{ taskStore.favCount }} favorite tasks left
      </p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </section>
  </main>
</template>
