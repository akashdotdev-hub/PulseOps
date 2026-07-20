import { create } from 'zustand';

const useAppStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  themeMode: 'dark',
  setThemeMode: (mode) => set({ themeMode: mode }),
}));

export default useAppStore;
