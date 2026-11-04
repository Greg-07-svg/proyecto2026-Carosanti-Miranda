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
 * metodo que realiza el GET de la api hacia la lista de favoritos
 * @method getFavorites
 */
export const getFavorites = async () => {
  try {
    const response = await fetch(`${API_URL}/favoritos`);
    if (!response.ok) {
      throw new Error(`Error al obtener los favoritos: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error en getFavorites:", error);
    throw error;
  }
};

/**
 * metodo que realiza el POST de la api hacia la lista de favoritos (añade el objeto game entero)
 * @method addFavorite
 */
export const addFavorite = async (game) => {
  try {
    const response = await fetch(`${API_URL}/favoritos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    });

    if (!response.ok) {
      throw new Error(`Error al agregar favorito: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error en addFavorite:", error);
    throw error;
  }
};

/**
 * metodo que realiza el DELETE de la api hacia la lista de favoritos, borrando un juego por id
 * @method removeFavorite
 * @param {id} -- id del juego dentro de la base de datos (dentro de la lista de favoritos)
 */
export const removeFavorite = async (id) => {
  try {
    const response = await fetch(`${API_URL}/favoritos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(
        `Error al eliminar favorito con id ${id}: ${response.status}`,
      );
    }
    return await response.json();
  } catch (error) {
    console.error(`Error en removeFavorite para el id ${id}:`, error);
    throw error;
  }
};
