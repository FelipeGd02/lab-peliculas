import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

type Movie = {
  id: number;
  title: string;
  genre: string;
  year: number;
};

const movies: Movie[] = [
  { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010 },
  { id: 2, title: "The Dark Knight", genre: "Action", year: 2008 },
  { id: 3, title: "Interstellar", genre: "Sci-Fi", year: 2014 },
  { id: 4, title: "Parasite", genre: "Thriller", year: 2019 },
  { id: 5, title: "The Godfather", genre: "Crime", year: 1972 },
  { id: 6, title: "Pulp Fiction", genre: "Crime", year: 1994 },
];

const genreColors: Record<string, { bg: string; color: string }> = {
  "Sci-Fi":   { bg: "#eededf", color: "#7c3d52" },
  "Action":   { bg: "#dde9f5", color: "#1e4f8a" },
  "Thriller": { bg: "#fef3c7", color: "#92400e" },
  "Crime":    { bg: "#e8f5e9", color: "#1b5e20" },
};

export const Catalogue = () => {
  const { favorites, watchLater, addFavorite, addWatchLater } =
    useContext(MovieContext)!;
  const navigate = useNavigate();

  return (
    <div className="catalogue">

      <div className="catalogue-header">
        <h1>Catálogo de películas</h1>
        <button className="btn-nav" onClick={() => navigate("/saved")}>
          Ver guardadas
        </button>
      </div>

      <div className="movie-grid">
        {movies.map((movie) => {
          const isFav        = favorites.some((m) => m.id === movie.id);
          const isWatchLater = watchLater.some((m) => m.id === movie.id);
          const genre        = genreColors[movie.genre] ?? { bg: "#f1f1f1", color: "#444" };

          return (
            <div key={movie.id} className="movie-card">

              <div className="movie-card-top">
                <span className="genre-badge" style={{ background: genre.bg, color: genre.color }}>
                  {movie.genre}
                </span>
                <span className="movie-year">{movie.year}</span>
              </div>

              <h3 className="movie-title">{movie.title}</h3>

              <div className="movie-actions">
                <button
                  className={`btn-action ${isFav ? "btn-active" : ""}`}
                  onClick={() => addFavorite(movie)}
                  disabled={isFav}
                >
                  {isFav ? "★ Favorito" : "☆ Agregar a favoritos"}
                </button>
                <button
                  className={`btn-action ${isWatchLater ? "btn-active" : ""}`}
                  onClick={() => addWatchLater(movie)}
                  disabled={isWatchLater}
                >
                  {isWatchLater ? "✓ Ver más tarde" : "+ Ver más tarde"}
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};