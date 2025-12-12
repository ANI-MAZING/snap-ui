import { create } from "zustand";
import type { PatternMeta } from "@/types/pattern";

interface PatternViewState {
    open: boolean;
    selected: PatternMeta | null;
    openView: (pattern: PatternMeta) => void;
    closeView: () => void;
}

export const usePatternViewStore = create<PatternViewState>((set) => ({
    open: false,
    selected: null,
    openView: (pattern) => set({ open:true, selected: pattern}),
    closeView: () => set({open: false, selected: null})
}))