import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  tasks: [{ title: "TestTask", state: "ONGOING" }],
  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state }] }), false, "addTask"),// The true/false passed here only manipulate and replaces the changed stated and not the whole store if passed as false, so we are passing false
  deleteTask: (title) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    })),
  draggedTask: null,
  setDraggedTask: (title) => set({ draggedTask: title }), // when creating any selector or method to update a state, set hook has to be used.Not while defining/initializing a state but Only when defining a method or function inside the store
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, state } : task
      ),
    })),
});

export const useStore = create(devtools(store));
