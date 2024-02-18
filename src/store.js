import { create } from "zustand";
import { devtools,persist } from "zustand/middleware";

const store = (set) => ({
  tasks: [],
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

// Define a custom logger middleware in Zustand
const log = (config) => (
  // Return a function that represents the wrapped `set` function
  // This function takes the `set`, `get`, and `api` functions as arguments
  (set, get, api) => 
    // Call the `config` function with the wrapped `set` function as the first argument
    // and pass `get` and `api` functions as additional parameters
    config(
      // Define the wrapped `set` function that intercepts state updates
      // and logs information about the state changes
      (...args) => {
        // Log the state update arguments to the console
        console.log(args);
        // Apply the state updates using the original `set` function
        set(...args);
      },
      // Pass the `get` function to the `config` function
      get,
      // Pass the `api` function to the `config` function
      api
    )
);


export const useStore = create(
  log(persist(devtools(store), {name: 'store'}))
);
