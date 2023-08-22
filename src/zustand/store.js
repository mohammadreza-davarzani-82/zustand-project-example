import { create } from "zustand";

const store = () => ({
  task: [
    {
      title: "TestTask",
      state: "ONGOING",
    },
  ],
});

export const useStore = create(store);

  