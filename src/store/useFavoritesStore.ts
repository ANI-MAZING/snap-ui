import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesState {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (id: string) => {
        const favs = get().favorites;
        const updated = favs.includes(id)
          ? favs.filter((f) => f !== id)
          : [...favs, id];
        set({ favorites: updated });
      },

      isFavorite: (id: string) => get().favorites.includes(id),
    }),
    {
      name: "snapui-favorites", // localStorage key
    }
  )
);
