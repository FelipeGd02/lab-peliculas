import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

export const Saved = () => {
  const { favorites, watchLater, removeFavorite, removeWatchLater } =
    useContext(MovieContext)!;
  const navigate = useNavigate();

  return (
    <div className="saved">

      <div className="saved-header">
        <h1>Películas guardadas</h1>
        <button className="btn-nav" onClick={() => navigate("/catalogue")}>
          Volver al catálogo
        </button>
      </div>

      {/* Favoritos */}
      <section className="saved-section">
        <h2 className="saved-section-title">★ Favoritos</h2>

        {favorites.length === 0 ? (
          <p className="saved-empty">No has agregado películas aún.</p>
        ) : (
          <div className="saved-grid">
            {favorites.map((movie) => (
              <div key={movie.id} className="saved-card">
                <div className="saved-card-info">
                  <h3 className="saved-card-title">{movie.title}</h3>
                  <div className="saved-card-meta">
                    <span className="saved-card-genre">{movie.genre}</span>
                    <span className="saved-card-year">{movie.year}</span>
                  </div>
                </div>
                <button
                  className="btn-remove"
                  onClick={() => removeFavorite(movie.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Ver más tarde */}
      <section className="saved-section">
        <h2 className="saved-section-title">＋ Ver más tarde</h2>

        {watchLater.length === 0 ? (
          <p className="saved-empty">No has agregado películas aún.</p>
        ) : (
          <div className="saved-grid">
            {watchLater.map((movie) => (
              <div key={movie.id} className="saved-card">
                <div className="saved-card-info">
                  <h3 className="saved-card-title">{movie.title}</h3>
                  <div className="saved-card-meta">
                    <span className="saved-card-genre">{movie.genre}</span>
                    <span className="saved-card-year">{movie.year}</span>
                  </div>
                </div>
                <button
                  className="btn-remove"
                  onClick={() => removeWatchLater(movie.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};