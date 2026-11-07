import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getGames } from "@api/api.js";
import "@styles/style.scss";

const Favourite = () => {
  const [juegosMostrados, setJuegosMostrados] = useState([]);
  const [favIds, setFavIds] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Obtener array de IDs de favoritos desde localStorage
  const obtenerFavoritosStorage = () => {
    try {
      const guardados = localStorage.getItem("favoritos");
      if (!guardados) return [];
      const parsed = JSON.parse(guardados);
      return parsed.map((item) =>
        typeof item === "object" && item !== null ? String(item.id) : String(item),
      );
    } catch (err) {
      console.error("Error al leer favoritos de localStorage:", err);
      return [];
    }
  };

  // Cargar catálogo de juegos desde la API y sincronizar favoritos
  useEffect(() => {
    let isMounted = true;

    const cargarDatos = async () => {
      setCargando(true);
      setError(null);

      try {
        const catalogo = await getGames();
        if (isMounted) {
          const idsGuardados = obtenerFavoritosStorage();
          setFavIds(idsGuardados);

          if (Array.isArray(catalogo)) {
            // Filtrar los juegos que el usuario tiene guardados en favoritos
            const guardados = catalogo.filter((j) =>
              idsGuardados.includes(String(j.id)),
            );
            setJuegosMostrados(guardados);
          }
        }
      } catch (err) {
        console.error("Error al cargar juegos en Favoritos:", err);
        if (isMounted) {
          setError("No se pudieron cargar los juegos favoritos.");
        }
      } finally {
        if (isMounted) {
          setCargando(false);
        }
      }
    };

    cargarDatos();

    return () => {
      isMounted = false;
    };
  }, []);

  // Actualizar título de la pestaña
  useEffect(() => {
    document.title = "FINDG | Favoritos";
    return () => {
      document.title = "FINDG";
    };
  }, []);

  // Alternar favorito de un juego específico:
  // Al clickearlo se apaga y se saca de localStorage; si se vuelve a clickear, se vuelve a agregar
  const alternarFavoritoLista = (juegoId) => {
    const idStr = String(juegoId);
    const yaEsFav = favIds.includes(idStr);

    let nuevosFavs;
    if (yaEsFav) {
      nuevosFavs = favIds.filter((id) => id !== idStr);
    } else {
      nuevosFavs = [...favIds, idStr];
    }

    try {
      localStorage.setItem("favoritos", JSON.stringify(nuevosFavs));
      setFavIds(nuevosFavs);
    } catch (err) {
      console.error("Error al actualizar favoritos en localStorage:", err);
    }
  };

  // Calcular cantidad y promedio de rating entre los juegos actualmente marcados
  const juegosActivos = juegosMostrados.filter((j) =>
    favIds.includes(String(j.id)),
  );
  const cantidad = juegosActivos.length;
  const sumaRating = juegosActivos.reduce(
    (acc, j) => acc + (Number(j.rating) || 0),
    0,
  );
  const promedioRating =
    cantidad > 0 ? (sumaRating / cantidad).toFixed(1) : "-";

  return (
    <div className="container">
      <p className="fav-breadcrumb">Mi cuenta / Biblioteca de favoritos</p>

      <div className="fav-head">
        <div>
          <h1 className="fav-title">Mis favoritos</h1>
        </div>
        <span className="fav-count" id="fav-count">
          {cantidad === 1 ? "1 juego guardado" : `${cantidad} juegos guardados`}
        </span>
      </div>

      <div className="fav-layout">
        {/* LISTA DE TARJETAS DE FAVORITOS */}
        <section className="fav-list" id="fav-list">
          {cargando ? (
            <p className="fav-msg">Cargando favoritos…</p>
          ) : error ? (
            <p className="fav-msg">{error}</p>
          ) : juegosMostrados.length === 0 ? (
            <p className="fav-msg">
              Todavía no guardaste ningún favorito.{" "}
              <Link
                to="/explorar"
                className="btn-primary"
                style={{ display: "inline-block", marginTop: "1rem" }}
              >
                Explorá juegos
              </Link>
            </p>
          ) : (
            juegosMostrados.map((juego) => {
              const esFav = favIds.includes(String(juego.id));

              return (
                <div className="fav-card" key={juego.id}>
                  <img
                    className="fav-img"
                    src={juego.background_image || juego.cover_image}
                    alt={juego.name}
                  />

                  <div className="fav-body">
                    <div className="fav-info">
                      <p className="fav-meta">
                        {juego.released}
                        {juego.developer && <span>{juego.developer}</span>}
                      </p>
                      <h3 className="fav-name">{juego.name}</h3>
                      <p className="fav-desc">{juego.description}</p>
                      <div className="fav-tags">
                        {juego.genres?.map((genero, idx) => (
                          <span className="fav-tag" key={idx}>
                            {genero.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="fav-actions">
                      <span className="fav-rating">★ {juego.rating}</span>
                      <div className="fav-buttons">
                        <Link to={`/juego/${juego.id}`} className="btn-primary">
                          Ver detalles
                        </Link>
                        <button
                          type="button"
                          className={`btn-heart ${esFav ? "activo" : ""}`}
                          id={`fav-btn-${juego.id}`}
                          onClick={() => alternarFavoritoLista(juego.id)}
                          aria-label="Quitar o agregar a favoritos"
                        >
                          {esFav ? "♥" : "♡"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </section>

        {/* RESUMEN LATERAL */}
        <aside className="panel">
          <h2 className="panel-title">Resumen</h2>
          <div id="summary-list">
            <div className="row">
              <span className="row-label">Rating promedio</span>
              <span className="row-value">
                {promedioRating !== "-" ? `★ ${promedioRating}` : "-"}
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Favourite;
