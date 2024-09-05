import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const dataStore = (set) => ({
  arr: [
    { id: 1, title: "1. Work 1"},
    { id: 2, title: "2. Work 2"},
    { id: 3, title: "3. Work 3"},
  ],
  addArr: (newTxt) =>
    set((state) => ({
      arr: [
        ...state.arr,
        { id: Date.now(), title: newTxt},
      ],
    })),
  delArr: (id) =>
    set((state) => ({
      arr: state.arr.filter((item) => item.id !== id),
    })),
  editArrA: (newTxt, id) =>
    set((state) => ({
      arr: state.arr.map((item) => {
        if (item.id === id) {
          return { ...item, title: newTxt };
        } else {
          return { ...item };
        }
      }),
    })),
});

const usePersist = {
  name: "data-store",
  getStorage: () => localStorage,
  partailize: (state) => ({
    arr: state.arr,
  }),
};

const useDataStore = create(persist(dataStore, usePersist));

export default useDataStore;
