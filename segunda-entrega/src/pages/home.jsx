import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@components/card.jsx";
import { getGames } from "@api/api.js";
import { juego_del_dia } from "../utils/juegodeldia.js";
import "@styles/style.scss";

// Categorias disponibles para explorar
const CATEGORIAS = ["Acción", "Aventura", "RPG", "Estrategia", "Deportes", "Puzzle"];

const Home = () => {
  const [juegoDelDia, setJuegoDelDia] = useState(null);
  const [tendencias, setTendencias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const data = await getGames();

        if (Array.isArray(data) && data.length > 0) {
          // Obtener el ID del juego del dia usando el util
          const idDelDia = juego_del_dia(data);
          const destacado = data.find((j) => j.id === idDelDia) || data[0];
          setJuegoDelDia(destacado);

          // Obtener las 5 tendencias con mejor rating
          const topTendencias = [...data]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5);
          setTendencias(topTendencias);
        }
      } catch (error) {
        console.error("Error al cargar datos en Home:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  const heroBg = juegoDelDia?.background_image
    ? `linear-gradient(180deg, rgba(11, 15, 23, 0.5) 0%, rgba(11, 15, 23, 0.95) 100%), url('${juegoDelDia.background_image}')`
    : undefined;

  return (
    <div>
      {/* Seccion Hero con el Juego del Dia */}
      <section
        className="hero-section"
        id="hero"
        style={heroBg ? { backgroundImage: heroBg } : undefined}
      >
        <div className="hero-overlay">
          <div className="hero-container" id="hero-container">
            <span className="game-featured">JUEGO DEL DÍA</span>
            <h1 className="hero-title">
              {cargando ? "Cargando juego del día..." : juegoDelDia?.name}
            </h1>
            {juegoDelDia && (
              <>
                <div className="hero-meta">
                  <span className="game-rating">★ {juegoDelDia.rating}</span>
                  <span className="game-gender">
                    {juegoDelDia.genres?.[0]?.name || "Videojuego"}
                  </span>
                </div>
                <p className="hero-description">{juegoDelDia.description}</p>
                <Link to={`/juego/${juegoDelDia.id}`} className="btn-primary">
                  Ver detalles
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Seccion Tendencias */}
      <section id="section-trends">
        <h2 className="section-title">Tendencias</h2>

        <div className="games-container" id="trend-games-container">
          {cargando ? (
            <p>Cargando tendencias...</p>
          ) : tendencias.length > 0 ? (
            tendencias.map((game) => <Card key={game.id} game={game} />)
          ) : (
            <p>No se encontraron juegos en tendencia.</p>
          )}
        </div>
      </section>

      {/* Seccion Categorias */}
      <section className="section-categories">
        <h2 className="section-title">Categorías</h2>

        <div className="categories-grid">
          {CATEGORIAS.map((cat) => (
            <Link
              key={cat}
              to={`/explorar?categoria=${encodeURIComponent(cat)}`}
              className="category-card"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
