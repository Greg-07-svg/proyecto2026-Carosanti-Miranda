import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "@components/card.jsx";
import { getGames } from "@api/api.js";
import { CATEGORIAS } from "../utils/categorias.js";

const FILTROS_INICIALES = {
  search: "",
  category: "",
  rating: 0,
  year: "",
};

const Explore = () => {
  const location = useLocation();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // Inicializar filtros leyendo directamente la categoría desde localStorage
  const [filters, setFilters] = useState(() => {
    const categoriaGuardada = localStorage.getItem("filtroCategoria") || "";
    return {
      ...FILTROS_INICIALES,
      category: categoriaGuardada,
    };
  });

  // Carga de juegos desde la API
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getGames();
        setGames(data);
      } catch (error) {
        console.error("Error al cargar juegos en explorar:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  // Sincronizar filtro si se navega desde Home u otra ruta con nueva categoría en localStorage
  useEffect(() => {
    const categoriaGuardada = localStorage.getItem("filtroCategoria") || "";
    setFilters((prev) => {
      if (prev.category !== categoriaGuardada) {
        return { ...prev, category: categoriaGuardada };
      }
      return prev;
    });
  }, [location]);

  // Filtrado directo en cada render a partir de games y filters
  const filteredGames = games.filter((game) => {
    // Filtro por nombre
    if (filters.search.trim() !== "") {
      const termino = filters.search.trim().toLowerCase();
      if (!game.name.toLowerCase().includes(termino)) {
        return false;
      }
    }

    // Filtro por categoría
    if (filters.category !== "") {
      const coincide = game.genres?.some(
        (gen) => gen.name.toLowerCase() === filters.category.toLowerCase(),
      );
      if (!coincide) {
        return false;
      }
    }

    // Filtro por rating mínimo
    if (Number(filters.rating) > 0) {
      if (game.rating < Number(filters.rating)) {
        return false;
      }
    }

    // Filtro por año de lanzamiento
    if (filters.year !== "") {
      const yearNum = parseInt(filters.year, 10);
      if (yearNum >= 1980 && yearNum <= 2026) {
        if (String(game.released) !== String(yearNum)) {
          return false;
        }
      }
    }

    return true;
  });

  // Mensaje de error / validación calculado directamente
  let errorMsg = "";
  if (filters.year !== "") {
    const yearNum = parseInt(filters.year, 10);
    if (yearNum < 1980 || yearNum > 2026) {
      errorMsg = "El año de lanzamiento debe estar entre 1980 y 2026.";
    }
  }
  if (filters.search.trim() !== "" && filteredGames.length === 0 && !errorMsg) {
    errorMsg = "No se encontraron juegos con ese nombre.";
  }

  // Manejador de cambios reactivo que además persiste la categoría en localStorage
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      if (value) {
        localStorage.setItem("filtroCategoria", value);
      } else {
        localStorage.removeItem("filtroCategoria");
      }
    }
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Manejador para reiniciar filtros y limpiar la categoría guardada
  const handleReset = () => {
    localStorage.removeItem("filtroCategoria");
    setFilters(FILTROS_INICIALES);
  };

  return (
    <div className="explore-layout">
      <aside className="filters-sidebar">
        <form
          id="filters-form"
          className="filters-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <fieldset className="filter-group">
            <label htmlFor="search-input">BUSCAR</label>
            <input
              type="text"
              id="search-input"
              name="search"
              placeholder="Nombre del juego..."
              maxLength={55}
              value={filters.search}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset className="filter-group">
            <label htmlFor="category-select">CATEGORÍA</label>
            <select
              id="category-select"
              name="category"
              value={filters.category}
              onChange={handleChange}
            >
              <option value="">Todos los géneros</option>
              {CATEGORIAS.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className="filter-group">
            <div className="filter-label-row">
              <label htmlFor="rating-range">RATING MÍNIMO</label>
              <span id="rating-value" className="rating-badge-val">
                {filters.rating}
              </span>
            </div>
            <input
              type="range"
              id="rating-range"
              name="rating"
              min="0"
              max="5"
              step="0.5"
              value={filters.rating}
              onChange={handleChange}
              aria-label="Rating mínimo"
            />
          </fieldset>

          <fieldset className="filter-group">
            <label htmlFor="year-input">AÑO DE LANZAMIENTO</label>
            <input
              type="number"
              id="year-input"
              name="year"
              placeholder="Ej. 2023, 2024"
              min="1980"
              max="2026"
              value={filters.year}
              onChange={handleChange}
            />
          </fieldset>

          <div id="error-msg" role="alert" aria-live="polite">
            {errorMsg && <p>{errorMsg}</p>}
          </div>

          <fieldset className="filter-actions">
            <button
              type="button"
              id="btn-reset"
              className="btn"
              onClick={handleReset}
            >
              Reiniciar
            </button>
          </fieldset>
        </form>
      </aside>

      <section className="results-section">
        <div className="results-header">
          <h1 className="page-title">Explorar Juegos</h1>
          <span id="results-count" className="results-count">
            {loading
              ? "Cargando..."
              : `${filteredGames.length} juegos encontrados`}
          </span>
        </div>

        <div id="explore-grid">
          {loading ? (
            <div className="card-skeleton">Cargando catálogo...</div>
          ) : filteredGames.length > 0 ? (
            filteredGames.map((game) => <Card key={game.id} game={game} />)
          ) : (
            <div className="card-skeleton">
              No se encontraron juegos con los filtros seleccionados.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Explore;
