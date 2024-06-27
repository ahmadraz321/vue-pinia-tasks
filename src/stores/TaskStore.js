import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "Task 1", isFav: false },
      { id: 2, title: "Task 2", isFav: true },
    ],
    name: "Task Store",
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    favCount() {
      return this.favs.length;
    },
    totalCount() {
      return this.tasks.length;
    },
  },
  actions: {
    addTask(title) {
      this.tasks.push({ id: this.tasks.length + 1, title, isFav: false });
    },
    toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) {
        task.isFav = !task.isFav;
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
    },
  },
});
