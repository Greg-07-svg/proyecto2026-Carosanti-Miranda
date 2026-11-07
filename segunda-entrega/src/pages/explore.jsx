import { useState, useEffect } from "react";
import Card from "@components/card.jsx";
import { getGames } from "@api/api.js";
import "@styles/style.scss";

const FILTROS_INICIALES = {
  search: "",
  category: "",
  rating: 0,
  year: "",
};

const Explore = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(FILTROS_INICIALES);
  const [errorMsg, setErrorMsg] = useState("");

  // Carga inicial y lectura de categoria desde localStorage
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getGames();
        setGames(data);

        const categoriaPrevia = localStorage.getItem("filtroCategoria") || "";
        if (categoriaPrevia) {
          localStorage.removeItem("filtroCategoria");
          const nuevosFiltros = {
            ...FILTROS_INICIALES,
            category: categoriaPrevia,
          };
          setFilters(nuevosFiltros);
          aplicarFiltros(nuevosFiltros, data);
        } else {
          setFilteredGames(data);
        }
      } catch (error) {
        console.error("Error al cargar juegos en explorar:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  // Funcion de filtrado
  const aplicarFiltros = (filtrosActuales = filters, listaBase = games) => {
    let resultado = [...listaBase];
    let mensajeError = "";

    // Filtro por nombre
    if (filtrosActuales.search.trim() !== "") {
      const termino = filtrosActuales.search.trim().toLowerCase();
      resultado = resultado.filter((g) =>
        g.name.toLowerCase().includes(termino),
      );

      if (resultado.length === 0) {
        mensajeError = "No se encontraron juegos con ese nombre.";
      }
    }

    // Filtro por categoria
    if (filtrosActuales.category !== "") {
      resultado = resultado.filter((g) =>
        g.genres?.some(
          (gen) =>
            gen.name.toLowerCase() === filtrosActuales.category.toLowerCase(),
        ),
      );
    }

    // Filtro por rating minimo
    if (Number(filtrosActuales.rating) > 0) {
      resultado = resultado.filter(
        (g) => g.rating >= Number(filtrosActuales.rating),
      );
    }

    // Filtro por ano de lanzamiento y validacion
    if (filtrosActuales.year !== "") {
      const yearNum = parseInt(filtrosActuales.year, 10);
      if (yearNum >= 1980 && yearNum <= 2026) {
        resultado = resultado.filter(
          (g) => String(g.released) === String(yearNum),
        );
      } else {
        mensajeError = "El año de lanzamiento debe estar entre 1980 y 2026.";
      }
    }

    setErrorMsg(mensajeError);
    setFilteredGames(resultado);
  };

  // Manejador de cambios
  const handleChange = (e) => {
    const { name, value } = e.target;
    const nuevosFiltros = { ...filters, [name]: value };
    setFilters(nuevosFiltros);
    aplicarFiltros(nuevosFiltros);
  };

  // Manejador para reiniciar filtros
  const handleReset = () => {
    setFilters(FILTROS_INICIALES);
    setErrorMsg("");
    setFilteredGames(games);
  };

  return (
    <main className="main-content explore-layout">
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
              <option value="Acción">Acción</option>
              <option value="Aventura">Aventura</option>
              <option value="RPG">RPG</option>
              <option value="Estrategia">Estrategia</option>
              <option value="Deportes">Deportes</option>
              <option value="Shooter">Shooter</option>
              <option value="Carreras">Carreras</option>
              <option value="Puzzle">Puzzle</option>
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
    </main>
  );
};

export default Explore;
