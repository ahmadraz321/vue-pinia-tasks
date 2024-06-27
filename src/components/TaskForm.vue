<script>
import { useTaskStore } from "../stores/TaskStore";
import { ref } from "vue";
export default {
  setup() {
    const taskStore = useTaskStore();
    const newTask = ref("");

    const handleSubmit = () => {
      if (newTask.value === "") return;
      taskStore.addTask(newTask.value);
      newTask.value = "";
    };

    return { newTask, handleSubmit };
  },
};
</script>

<template>
  <main>
    <div class="flex gap-3">
      <input
        class="py-2 px-3 rounded-md"
        type="text"
        v-model="newTask"
        placeholder="Task title"
      />
      <button
        @click="handleSubmit"
        class="bg-orange-700 rounded-md text-white py-2 px-3 font-semibold"
      >
        Add Task
      </button>
    </div>
  </main>
</template>
