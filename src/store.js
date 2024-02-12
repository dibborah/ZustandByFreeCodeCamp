import { create } from "zustand";

const store = (set) => ({
    tasks: [{ title: 'TestTask', planned: 'PLANNED'}]
});

export const useStore = create(store);