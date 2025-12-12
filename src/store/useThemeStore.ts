import { create } from "zustand";

type Theme = "light" | "dark" | "system";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "light",
  toggleTheme: () => set({ theme: get().theme === "dark" ? "light" : "dark" }),
  setTheme: (t: Theme) => set({ theme: t }),
}));

export const useTheme = useThemeStore;
