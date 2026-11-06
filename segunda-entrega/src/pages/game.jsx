import { useParams } from "react-router-dom";

const Game = () => {
  const { id } = useParams();

  return (
    <div className="game-page">
      <h2 className="section-title">Detalle del Videojuego #{id}</h2>
    </div>
  );
};

export default Game;
