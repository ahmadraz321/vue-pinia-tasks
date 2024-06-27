<template>
  <main class="flex items-center justify-center content-center">
    <div
      class="flex items-center justify-between content-center p-3 py-5 my-2 mx-3 border border-gray-200 rounded-lg shadow-md w-1/2"
    >
      <h3 class="text-black text-xl font-bold ml-4">{{ task.title }}</h3>
      <div>
        <button @click="taskStore.deleteTask(task.id)">
          <i class="material-icons">delete</i>
        </button>
        <button @click="taskStore.toggleFav(task.id)">
          <i class="material-icons" :style="{ color: task.isFav ? 'red' : '' }"
            >favorite</i
          >
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";
export default {
  props: ["task"],
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
};
</script>
