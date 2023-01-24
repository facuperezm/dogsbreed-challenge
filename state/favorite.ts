import { create } from 'zustand'

interface FavoriteState {
  favorites: string[];
  toggleFavorite: (image: string) => void;
}

export const useFavorites = create<FavoriteState>((set) => ({
        favorites: JSON.parse(localStorage.getItem('favorites') || "[]"),
        toggleFavorite: (image) => 
        set(({favorites}) => {
          const draft = favorites.includes(image) 
          ? favorites.filter((favorite) => favorite !== image) 
          : favorites.concat(image);

          localStorage.setItem('favorites', JSON.stringify(draft));

          return {
            favorites: draft
          }
    })
}))
