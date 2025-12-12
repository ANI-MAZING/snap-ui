import { create } from "zustand";
import type { PatternStyles } from "@/types/pattern";

interface PreviewState {
  styles: PatternStyles | null;
  setPreview: (styles: PatternStyles) => void;
  clearPreview: () => void;
}

export const usePreviewStore = create<PreviewState>((set) => ({
  styles: null,

  setPreview: (styles) => set({ styles }),

  clearPreview: () => set({ styles: null }),
}));
