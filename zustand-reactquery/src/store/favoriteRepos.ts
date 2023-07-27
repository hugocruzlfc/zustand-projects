import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteReposState = {
  favoriteReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};

const useFavoriteReposStore = create(
  persist<FavoriteReposState>(
    (set) => ({
      favoriteReposIds: [],
      addFavoriteRepo: (id: number) => {
        set((state) => ({
          favoriteReposIds: [...state.favoriteReposIds, id],
        }));
      },

      removeFavoriteRepo: (id: number) => {
        set((state) => ({
          favoriteReposIds: state.favoriteReposIds.filter(
            (favoriteRepoId) => favoriteRepoId !== id
          ),
        }));
      },
    }),
    { name: "favorite-repos" }
  )
);

export default useFavoriteReposStore;
