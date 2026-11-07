/**
 * Obtiene la imagen principal de un juego aplicando fallback entre background y cover
 * @method obtenerImagenJuego
 * @param {object} game - Objeto de datos del juego
 * @returns {string} URL de la imagen a renderizar
 */
export const obtenerImagenJuego = (game) => {
  return game?.background_image || game?.cover_image || "";
};
