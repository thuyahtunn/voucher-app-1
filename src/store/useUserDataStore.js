import { create } from "zustand";

const initialState = {
  userStore: {},
};

const useUserDataStore = create((set) => ({
  ...initialState,
  setUserStore: (userData) => set({ userStore: userData }),
}));

export default useUserDataStore;
