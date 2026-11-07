/**
 * Metodo que asigna y retorna el ID del juego del dia a renderizarse en home
 * @method juego_del_dia
 * @param {Array} juegos - Array de juegos disponibles
 * @returns {number|null} ID del juego del dia
 */
export const juego_del_dia = (juegos) => {
  if (!Array.isArray(juegos) || juegos.length === 0) return null;

  const hoy = new Date();
  const inicioDeAno = new Date(hoy.getFullYear(), 0, 0);
  const diferenciaMs = hoy - inicioDeAno;
  const unDiaEnMs = 1000 * 60 * 60 * 24;
  const diaDelAno = Math.floor(diferenciaMs / unDiaEnMs);

  const indiceCalculado = diaDelAno % juegos.length;
  const juegoSeleccionado = juegos[indiceCalculado];

  return juegoSeleccionado?.id ?? null;
};

export default juego_del_dia;
