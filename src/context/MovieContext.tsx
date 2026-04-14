import { createContext, useState } from "react";

type Movie = {
  id: number;
  title: string;
  genre: string;
  year: number;
};

type MovieContextType = {
  favorites: Movie[];
  watchLater: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  addWatchLater: (movie: Movie) => void;
  removeWatchLater: (id: number) => void;
};

export const MovieContext = createContext<MovieContextType | null>(null);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [watchLater, setWatchLater] = useState<Movie[]>([]);

  const addFavorite = (movie: Movie) => {
    setFavorites([...favorites, movie]);
  };

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((m) => m.id !== id));
  };

  const addWatchLater = (movie: Movie) => {
    setWatchLater([...watchLater, movie]);
  };

  const removeWatchLater = (id: number) => {
    setWatchLater(watchLater.filter((m) => m.id !== id));
  };

  return (
    <MovieContext.Provider
      value={{
        favorites,
        watchLater,
        addFavorite,
        removeFavorite,
        addWatchLater,
        removeWatchLater,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};