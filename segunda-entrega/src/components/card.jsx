import { useNavigate } from "react-router-dom";
import { obtenerImagenJuego } from "../utils/imagenes.js";

const Card = ({ game }) => {
  const navigate = useNavigate();

  return (
    <article
      className="card-skeleton"
      onClick={() => navigate(`/juego/${game.id}`)}
    >
      <img
        src={obtenerImagenJuego(game)}
        alt={game.name}
        className="skeleton-img"
      />
      <span className="skeleton-title">{game.name}</span>
      <span className="skeleton-rating">★ {game.rating}</span>
    </article>
  );
};

export default Card;
