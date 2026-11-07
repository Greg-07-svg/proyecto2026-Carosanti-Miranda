/**
 * Obtiene la lista de IDs de favoritos desde localStorage normalizados
 * @method obtenerFavoritos
 * @returns {Array<number|string>} Array de IDs de juegos favoritos
 */
export const obtenerFavoritos = () => {
  try {
    const guardados = localStorage.getItem("favoritos");
    if (!guardados) return [];
    const parsed = JSON.parse(guardados);
    return parsed.map((item) => {
      const rawId = typeof item === "object" && item !== null ? item.id : item;
      const num = Number(rawId);
      return !isNaN(num) ? num : rawId;
    });
  } catch (err) {
    console.error("Error al leer favoritos de localStorage:", err);
    return [];
  }
};

/**
 * Alterna un ID de juego en favoritos (lo agrega si no esta, lo quita si ya esta)
 * @method alternarFavorito
 * @param {number|string} juegoId - ID del juego a alternar
 * @returns {Array<number|string>} Nueva lista de favoritos actualizada
 */
export const alternarFavorito = (juegoId) => {
  try {
    const favoritos = obtenerFavoritos();
    const yaEsFavorito = favoritos.some((id) => String(id) === String(juegoId));

    let nuevosFavoritos;
    if (yaEsFavorito) {
      nuevosFavoritos = favoritos.filter((id) => String(id) !== String(juegoId));
    } else {
      const idNormalizado = !isNaN(Number(juegoId)) ? Number(juegoId) : juegoId;
      nuevosFavoritos = [...favoritos, idNormalizado];
    }

    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
    return nuevosFavoritos;
  } catch (err) {
    console.error("Error al actualizar favoritos en localStorage:", err);
    return [];
  }
};
