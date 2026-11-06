const API_URL = "http://localhost:4000";

/**
 * metodo que realiza el GET de la api hacia los juegos
 * @method getGames
 */
export const getGames = async () => {
  try {
    const response = await fetch(`${API_URL}/juegos`);
    if (!response.ok) {
      throw new Error(`Error al obtener los juegos: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error en getGames:", error);
    throw error;
  }
};

/**
 * metodo que realiza el GET de la api hacia los juegos por id
 * @method getGameById
 * @param {id} -- id del juego dentro de la base de datos
 */
export const getGameById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/juegos/${id}`);
    if (!response.ok) {
      throw new Error(
        `Error al obtener el juego con id ${id}: ${response.status}`,
      );
    }
    return await response.json();
  } catch (error) {
    console.error(`Error en getGameById para el id ${id}:`, error);
    throw error;
  }
};

/**
 * metodo de tipo POST hacia la api para subir una review sobre un juego
 * @method addReview
 * @param {number|string} gameId -- id del juego al que se le agrega la resena
 * @param {object} review -- objeto de la resena con user, rating y comment
 */
export const addReview = async (gameId, review) => {
  try {
    let targetId = gameId;
    let reviewData = review;

    if (typeof gameId === "object" && review === undefined) {
      reviewData = gameId;
      targetId = gameId.gameId || gameId.id;
    }

    const response = await fetch(`${API_URL}/juegos/${targetId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });

    if (!response.ok) {
      // Fallback para json-server cuando las reviews estan dentro de cada juego
      const gameRes = await fetch(`${API_URL}/juegos/${targetId}`);
      if (gameRes.ok) {
        const gameData = await gameRes.json();
        const updatedReviews = [...(gameData.reviews || []), reviewData];
        const patchRes = await fetch(`${API_URL}/juegos/${targetId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ reviews: updatedReviews }),
        });
        if (patchRes.ok) {
          return reviewData;
        }
      }
      throw new Error(`Error al agregar la review: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error en addReview para el juego ${gameId}:`, error);
    throw error;
  }
};
