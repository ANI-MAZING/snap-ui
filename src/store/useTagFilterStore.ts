import { create } from "zustand";

interface TagFilterState {
  activeTag: string | null;
  setTag: (tag: string | null) => void;
  clearTag: () => void;
}

export const useTagFilterStore = create<TagFilterState>((set) => ({
  activeTag: null,
  setTag: (tag) => set({ activeTag: tag }),
  clearTag: () => set({ activeTag: null }),
}));
