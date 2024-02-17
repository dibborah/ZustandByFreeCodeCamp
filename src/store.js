import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "TestTask", state: "ONGOING" }],
  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state }] })),
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

export const useStore = create(store);
