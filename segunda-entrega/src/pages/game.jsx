import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "@components/card.jsx";
import { getGameById, getGames, addReview } from "@api/api.js";
import {
  obtenerFavoritos,
  alternarFavorito as alternarFavoritoStorage,
} from "../utils/favoritos.js";

const Game = () => {
  const { id } = useParams();

  const [game, setGame] = useState(null);
  const [todosLosJuegos, setTodosLosJuegos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Imagen activa en el visor grande
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Lista de reseñas del juego (local para actualizar reactivamente)
  const [reviews, setReviews] = useState([]);

  // Estado del botón de favorito
  const [esFav, setEsFav] = useState(false);

  // Campos para el formulario de agregar review
  const [nuevoUser, setNuevoUser] = useState("");
  const [nuevoRating, setNuevoRating] = useState("5");
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [enviandoReview, setEnviandoReview] = useState(false);
  const [reviewFeedback, setReviewFeedback] = useState(null);

  // Refs para scroll de carruseles
  const thumbsRef = useRef(null);
  const similarTrackRef = useRef(null);

  // Cargar información del juego y catálogo completo
  useEffect(() => {
    let isMounted = true;

    const cargarDatos = async () => {
      setCargando(true);
      setError(null);
      setReviewFeedback(null);

      try {
        const juego = await getGameById(id);

        if (isMounted) {
          setGame(juego);
          setReviews(juego?.reviews || []);

          if (juego?.media && juego.media.length > 0) {
            setSelectedMedia(juego.media[0]);
          } else if (juego?.cover_image) {
            setSelectedMedia({ url: juego.cover_image, title: juego.name });
          }

          // Verificar si ya está en favoritos
          const favoritos = obtenerFavoritos();
          const yaEsFavorito = favoritos.some(
            (favId) => String(favId) === String(id),
          );
          setEsFav(yaEsFavorito);
        }

        // Cargar todos los juegos para calcular similares
        const catalogo = await getGames();
        if (isMounted && Array.isArray(catalogo)) {
          setTodosLosJuegos(catalogo);
        }
      } catch (err) {
        console.error("Error al cargar juego:", err);
        if (isMounted) {
          setError("No se pudo cargar la información del videojuego.");
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
  }, [id]);

  // Actualizar título de la pestaña
  useEffect(() => {
    if (game?.name) {
      document.title = `FINDG | ${game.name}`;
    }
    return () => {
      document.title = "FINDG";
    };
  }, [game?.name]);

  // Manejador para agregar o quitar de favoritos en localStorage usando el utilitario compartido
  const alternarFavorito = () => {
    if (!game) return;
    const nuevosFavoritos = alternarFavoritoStorage(game.id);
    const yaEsFavorito = nuevosFavoritos.some(
      (favId) => String(favId) === String(game.id),
    );
    setEsFav(yaEsFavorito);
  };

  // Desplazamiento horizontal de miniaturas
  const desplazarMiniaturas = (offset) => {
    if (thumbsRef.current) {
      thumbsRef.current.scrollLeft += offset;
    }
  };

  // Desplazamiento horizontal de juegos similares
  const desplazarSimilares = (offset) => {
    if (similarTrackRef.current) {
      similarTrackRef.current.scrollLeft += offset;
    }
  };

  // Enviar reseña usando el método PATCH de la API
  const handleCrearReview = async (e) => {
    e.preventDefault();

    if (!nuevoUser.trim() || !nuevoComentario.trim()) {
      setReviewFeedback({
        tipo: "error",
        mensaje: "Por favor completa todos los campos de la reseña.",
      });
      return;
    }

    const ratingNum = parseFloat(nuevoRating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      setReviewFeedback({
        tipo: "error",
        mensaje: "La calificación debe ser un valor entre 1 y 5.",
      });
      return;
    }

    const reviewData = {
      user: nuevoUser.trim(),
      rating: ratingNum,
      comment: nuevoComentario.trim(),
    };

    setEnviandoReview(true);
    setReviewFeedback(null);

    try {
      await addReview(game.id, reviewData);

      // Actualizar estado local inmediatamente
      setReviews((prev) => [...prev, reviewData]);
      setNuevoUser("");
      setNuevoRating("5");
      setNuevoComentario("");
      setReviewFeedback({
        tipo: "success",
        mensaje: "¡Tu reseña fue publicada exitosamente!",
      });
    } catch (err) {
      console.error("Error al publicar la reseña:", err);
      setReviewFeedback({
        tipo: "error",
        mensaje: "Hubo un error al enviar la reseña. Inténtalo nuevamente.",
      });
    } finally {
      setEnviandoReview(false);
    }
  };

  if (cargando) {
    return (
      <div
        className="container"
        style={{ padding: "4rem 1.5rem", textAlign: "center" }}
      >
        <h2 className="section-title">Cargando juego…</h2>
      </div>
    );
  }

  if (error || !game) {
    return (
      <div
        className="container"
        style={{ padding: "4rem 1.5rem", textAlign: "center" }}
      >
        <h2 className="section-title">Juego no encontrado</h2>
        <p style={{ margin: "1rem 0", color: "var(--text-secondary)" }}>
          {error || "El videojuego solicitado no se encuentra disponible."}
        </p>
        <Link
          to="/explorar"
          className="btn-primary"
          style={{ display: "inline-block" }}
        >
          ← Volver al explorador
        </Link>
      </div>
    );
  }

  // Filtrar juegos similares que compartan el género principal
  const generoPrincipal = game.genres?.[0]?.name;
  const juegosSimilares = todosLosJuegos.filter(
    (j) =>
      String(j.id) !== String(game.id) &&
      j.genres?.some(
        (g) => g.name.toLowerCase() === generoPrincipal?.toLowerCase(),
      ),
  );

  return (
    <div>
      {/* BANNER: imagen de fondo (horizontal) con el nombre encima */}
      <section
        className="banner"
        id="banner"
        style={{
          "--banner": game.background_image
            ? `url('${game.background_image}')`
            : "none",
        }}
      >
        <div className="container banner-container">
          {/* PORTADA: imagen independiente del banner */}
          <img
            className="banner-cover"
            id="game-cover"
            src={game.cover_image}
            alt={game.name}
          />

          <div className="banner-info">
            <Link to="/explorar" className="back-link">
              ← Volver a explorar
            </Link>
            <h1 className="game-title" id="game-title">
              {game.name}
            </h1>
            <p className="game-genres" id="game-genres">
              {game.genres?.map((genero) => genero.name).join(" ")}
            </p>
          </div>

          <div className="banner-actions">
            <button
              className="btn-icon"
              id="btn-fav"
              type="button"
              aria-pressed={esFav ? "true" : "false"}
              aria-label={esFav ? "Quitar de favoritos" : "Agregar a favoritos"}
              onClick={alternarFavorito}
            >
              {esFav ? "♥" : "♡"}
            </button>
            {game.store_url && (
              <a
                href={game.store_url}
                className="btn-primary"
                id="btn-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir a la tienda
              </a>
            )}
          </div>
        </div>
      </section>

      <div className="container detail-grid">
        {/* GALERIA: visor grande más la tira de miniaturas */}
        <section className="gallery">
          <div className="viewer" id="viewer">
            {selectedMedia && (
              <img
                src={selectedMedia.url || selectedMedia}
                alt={selectedMedia.title || game.name}
              />
            )}
          </div>

          <div className="thumbs-wrap">
            <button
              className="thumbs-prev"
              id="thumbs-prev"
              type="button"
              aria-label="Ver miniaturas anteriores"
              onClick={() => desplazarMiniaturas(-200)}
            >
              ‹
            </button>
            <div className="thumbs" id="thumbs" ref={thumbsRef}>
              {game.media?.map((medio, index) => (
                <img
                  key={index}
                  src={medio.url}
                  alt={medio.title || `Captura ${index + 1}`}
                  className={`thumb ${selectedMedia?.url === medio.url ? "active" : ""}`}
                  onClick={() => setSelectedMedia(medio)}
                />
              ))}
            </div>
            <button
              className="thumbs-next"
              id="thumbs-next"
              type="button"
              aria-label="Ver más miniaturas"
              onClick={() => desplazarMiniaturas(200)}
            >
              ›
            </button>
          </div>

          <p className="game-desc" id="game-desc">
            {game.description}
          </p>
        </section>

        {/* PANELES LATERALES */}
        <aside className="side">
          {/* Panel Detalles */}
          <div className="panel">
            <div className="panel-head">
              <h2 className="panel-title">Detalles</h2>
              <span className="badge" id="badge-rating">
                ★ {game.rating}
              </span>
            </div>
            <div id="details-list">
              <p>Desarrollador: {game.developer}</p>
              <p>Lanzamiento: {game.released}</p>
              <p>
                Plataformas:{" "}
                {game.platforms?.map((plataforma) => plataforma.name).join(" ")}
              </p>
            </div>
          </div>

          {/* Panel Reseñas */}
          <div className="panel">
            <div className="panel-head">
              <h2 className="panel-title">Reseñas</h2>
              <span className="badge badge-meta" id="badge-meta">
                {reviews.length} {reviews.length === 1 ? "reseña" : "reseñas"}
              </span>
            </div>

            <div id="reviews-list">
              {reviews && reviews.length > 0 ? (
                reviews.map((resenia, index) => (
                  <div className="review" key={index}>
                    <span>
                      {resenia.user} ★ {resenia.rating}
                    </span>
                    <p>{resenia.comment}</p>
                  </div>
                ))
              ) : (
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.85rem",
                  }}
                >
                  Aún no hay reseñas. ¡Sé el primero en opinar!
                </p>
              )}
            </div>

            {/* Formulario para agregar nueva reseña a través de la API */}
            <form className="add-review-form" onSubmit={handleCrearReview}>
              <h3 className="add-review-title">Dejar una reseña</h3>

              {reviewFeedback && (
                <div
                  className={`review-status-msg ${
                    reviewFeedback.tipo === "success" ? "success" : "error"
                  }`}
                >
                  {reviewFeedback.mensaje}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="review-user">Usuario</label>
                <input
                  id="review-user"
                  type="text"
                  placeholder="Tu nombre o alias"
                  value={nuevoUser}
                  onChange={(e) => setNuevoUser(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="review-rating">Puntuación (1 - 5)</label>
                <input
                  id="review-rating"
                  type="number"
                  min="1"
                  max="5"
                  step="0.1"
                  placeholder="5"
                  value={nuevoRating}
                  onChange={(e) => setNuevoRating(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="review-comment">Comentario</label>
                <textarea
                  id="review-comment"
                  rows="3"
                  placeholder="Escribe tu opinión sobre el juego..."
                  value={nuevoComentario}
                  onChange={(e) => setNuevoComentario(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-submit-review"
                disabled={enviandoReview}
              >
                {enviandoReview ? "Publicando..." : "Publicar reseña"}
              </button>
            </form>
          </div>
        </aside>
      </div>

      {/* SECCIÓN JUEGOS SIMILARES */}
      <section className="container similar">
        <div className="similar-head">
          <h2 className="section-title">Juegos similares</h2>
          <div className="similar-nav">
            <button
              className="btn-icon"
              id="sim-prev"
              type="button"
              aria-label="Anterior"
              onClick={() => desplazarSimilares(-200)}
            >
              ‹
            </button>
            <button
              className="btn-icon"
              id="sim-next"
              type="button"
              aria-label="Siguiente"
              onClick={() => desplazarSimilares(200)}
            >
              ›
            </button>
          </div>
        </div>
        <div className="similar-track" id="similar-track" ref={similarTrackRef}>
          {juegosSimilares.length > 0 ? (
            juegosSimilares.map((similarGame) => (
              <Card key={similarGame.id} game={similarGame} />
            ))
          ) : (
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              No se encontraron juegos similares para este título.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Game;
