//se mockean los juegos, primera entrega no permiote el uso de la api, asi que usamos las imagenes de los logos y los gamearts cargados en imagenes.
// 6 juegos
// js/mockData.js

const juegos = [
  {
    id: 101,
    name: "Elden Ring: Shadow of the Erdtree",
    rating: 4.9,
    released: "2024",
    developer: "FromSoftware",
    store_url: "https://store.steampowered.com/app/1245620/ELDEN_RING/",

    cover_image: "imagenes/elden-ring-logo.webp",
    // Banner panorámico de fondo
    background_image:
      "imagenes/elden-ring-shadow-of-the-erdtree-backimage.webp",
    description:
      "Una expansión épica que lleva a los jugadores a explorar la Tierra de las Sombras, llena de nuevos jefes, armas y secretos oscuros por descubrir en un vasto mundo abierto.",
    genres: [{ name: "RPG" }, { name: "Acción" }],
    platforms: [
      { name: "PC" },
      { name: "PlayStation 5" },
      { name: "Xbox Series X" },
    ],
    media: [
      {
        type: "image",
        url: "imagenes/paintings-elden-ring-shadow-of-the-erdtree.webp",
        title: "Artwork Principal",
      },
      {
        type: "image",
        url: "imagenes/elden-ring-boss.webp",
        title: "Combate de Jefe",
      },
      {
        type: "image",
        url: "imagenes/elden-ring-shadow-of-the-erdtree-exploracion.webp",
        title: "Exploración",
      },
    ],
    reviews: [
      {
        user: "Alexander_V",
        rating: 5,
        comment:
          "Una obra maestra indiscutible. La dificultad es alta pero sumamente gratificante.",
      },
      {
        user: "GamerPro99",
        rating: 4.8,
        comment:
          "El diseño del mundo y los nuevos jefes superaron mis expectativas.",
      },
    ],
  },
  {
    id: 102,
    name: "Cyberpunk 2077: Phantom Liberty",
    rating: 4.8,
    released: "2023",
    developer: "CD Projekt Red",
    store_url: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
    cover_image: "imagenes/cyberpunk-2077-logo.webp",
    background_image: "imagenes/cyberpunk-2077-background.webp",
    description:
      "Una aventura de espionaje y suspenso donde encarnas al mercenario V en una misión de alto riesgo dentro del peligroso distrito de Dogtown en Night City.",
    genres: [{ name: "Acción" }, { name: "RPG" }],
    platforms: [{ name: "PC" }, { name: "PlayStation 5" }],
    media: [
      {
        type: "image",
        url: "imagenes/Cyberpunk-2077-Phantom-Liberty-ciudad.webp",
        title: "Dogtown Night City",
      },
      {
        type: "image",
        url: "imagenes/cyberpunk-1.webp",
        title: "parte_ciudad_1_día",
      },
      {
        type: "image",
        url: "imagenes/cyberpunk-2.webp",
        title: "parte_ciudad_2_día",
      },
    ],
    reviews: [
      {
        user: "NeonKnight",
        rating: 5,
        comment: "Increíble historia y la redención perfecta para Cyberpunk.",
      },
    ],
  },
  {
    id: 103,
    name: "Baldur's Gate 3",
    rating: 4.9,
    released: "2023",
    developer: "Larian Studios",
    store_url: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
    cover_image: "imagenes/baldurs-gate-3-logo.webp",
    background_image: "imagenes/Baldurs-gate-3-background.webp",
    description:
      "Un juego de rol de próxima generación ambientado en el mundo de Dungeons & Dragons, donde tus elecciones dan forma a una historia de amistad, traición y supervivencia.",
    genres: [{ name: "RPG" }, { name: "Estrategia" }],
    platforms: [
      { name: "PC" },
      { name: "PlayStation 5" },
      { name: "Xbox Series X" },
    ],
    media: [
      {
        type: "image",
        url: "imagenes/campamento-baldurs-gate-3.webp",
        title: "Campamento de Héroes",
      },
      {
        type: "image",
        url: "imagenes/baldur-1.jpg",
        title: "personaje_demonio",
      },
      {
        type: "image",
        url: "imagenes/baldur-2.jpg",
        title: "editor_personaje",
      },
    ],
    reviews: [
      {
        user: "TavernMaster",
        rating: 5,
        comment: "Libertad absoluta para resolver los combates y misiones.",
      },
    ],
  },
  {
    id: 104,
    name: "Hollow Knight",
    rating: 4.7,
    released: "2017",
    developer: "Team Cherry",
    store_url: "https://store.steampowered.com/app/367520/Hollow_Knight/",
    cover_image: "imagenes/holow-knight-cover.webp",
    background_image: "imagenes/hollow-knight-background.webp",
    description:
      "Desciende al mundo de Hallownest, un reino en ruinas lleno de insectos y héroes. Explora cavernas retorcidas, combate criaturas corrompidas y forja tu propio camino.",
    genres: [{ name: "Aventura" }, { name: "Acción" }],
    platforms: [{ name: "PC" }, { name: "Nintendo Switch" }],
    media: [
      {
        type: "image",
        url: "imagenes/hollow-knight-dirtmouth.webp",
        title: "Boca Sucia",
      },
      { type: "image", url: "imagenes/hollow-1.jpg", title: "Grimm Battle" },
      { type: "image", url: "imagenes/hollow-2.jpg", title: "Canales_Reales" },
      { type: "image", url: "imagenes/hollow-3.jpg", title: "Sendero_Verde" },
      {
        type: "image",
        url: "imagenes/hollow-4.jpg",
        title: "False_Knight_Boss",
      },
      { type: "image", url: "imagenes/hollow-5.jpg", title: "Inventario" },
      { type: "image", url: "imagenes/hollow-6.jpg", title: "La_Colmena" },
    ],
    reviews: [
      {
        user: "BugHunter",
        rating: 5,
        comment: "Arte visual y música inigualables.",
      },
    ],
  },
  {
    id: 105,
    name: "Portal 2",
    rating: 4.9,
    released: "2011",
    developer: "Valve",
    store_url: "https://store.steampowered.com/app/620/Portal_2/",
    cover_image: "imagenes/portal2-cover.webp",
    background_image: "imagenes/portal2-background.webp",
    description:
      "Una hilarante y brillante aventura de acertijos en primera persona donde usas un dispositivo de portales para resolver intrincadas cámaras de pruebas.",
    genres: [{ name: "Puzzle" }],
    platforms: [{ name: "PC" }],
    media: [
      {
        type: "image",
        url: "imagenes/portal2-camara-de-pruebas.webp",
        title: "Cámara de Pruebas",
      },
      { type: "image", url: "imagenes/portal_2-1.jpg", title: "Exterior" },
      { type: "image", url: "imagenes/portal_2-2.jpg", title: "pasillo" },
    ],
    reviews: [
      {
        user: "ApertureScience",
        rating: 5,
        comment: "El mejor juego de acertijos de la historia.",
      },
    ],
  },
];

/**
 * funcion q permite realizar la carga y cambio de juego cada 24 hrs
 * @method juegoPrincipal()
 */
juegoPrincipal = () => {
  const hoy = new Date();
  const inicioDeAno = new Date(hoy.getFullYear(), 0, 0);
  const diferenciaMs = hoy - inicioDeAno;
  const unDiaEnMs = 1000 * 60 * 60 * 24;
  const diaDelAno = Math.floor(diferenciaMs / unDiaEnMs);

  //indice
  const indiceCalculado = diaDelAno % juegos.length;
  const juegoDelDia = juegos[indiceCalculado];

  if (!juegoDelDia) return;

  // generacion e inyeccion html
  const contenidoHero = `
    <span class="game-featured">JUEGO DEL DIA</span>
    <h1 class="hero-title">${juegoDelDia.name}</h1>
    <div class="hero-meta">
      <span class="game-rating"> ${juegoDelDia.rating}</span>
      <span class="game-gender">${juegoDelDia.genres?.[0]?.name || "Videojuego"}</span>
    </div>
    <span class="hero-description">${juegoDelDia.description}</span>
    <a href="game.html?id=${juegoDelDia.id}" class="btn-primary">Ver detalles</a>
  `;

  document.getElementById("hero-container").innerHTML = contenidoHero;

  // fondo
  heroSection = document.getElementById("hero").style.backgroundImage =
    `linear-gradient(180deg, rgba(11, 15, 23, 0.5) 0%, rgba(11, 15, 23, 0.95) 100%), url('${juegoDelDia.background_image}')`;
};

/**
 * funcion que a partir de los mayores
 * @method cargarTendencias
 */
cargarTendencias = () => {
  let tendencias = "";

  juegos
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5)
    .forEach((juego) => {
      tendencias += `<div class="card-skeleton" onclick="irAJuego(${juego.id})">
                      <img alt = "fondo-artwork" class = "skeleton-img" src = "${juego.background_image}">
                      <span class = "skeleton-title"> ${juego.name}</span> 
                      <span class = "skeleton-rating"> ${juego.rating}</span> 
                   </div>`;
    });

  document.getElementById("trend-games-container").innerHTML = tendencias;
};

/**
 * Lleva a game.html con el juego clickeado (se pasa el id por la URL)
 * @method irAJuego
 * @param {number} id - id del juego dentro del array `juegos`
 */
irAJuego = (id) => {
  window.location.href = `game.html?id=${id}`;
};

/**
 * funcion que dirige a "explorar" con el filtro de genero aplicado segun el clickeado (usando el value)
 * @method dirigirExplorarFiltro
 */
dirigirExplorarFiltro = () => {
  //PREGUNTAR !!!
};

/**
 * Cambia la imagen grande de la galeria al clickear una miniatura
 * @method cambiarVisor
 */
cambiarVisor = (url, titulo) => {
  document.getElementById("viewer").innerHTML =
    `<img src="${url}" alt="${titulo}">`;
};

/**
 * Lee el id de la URL y carga en game.html el juego correspondiente
 * @method cargarJuego
 */
cargarJuego = () => {
  // id de la url: game.html?id=103 -> "103"
  const id = window.location.search.split("=")[1];

  // buscamos el juego con ese id
  let juegoActual = null;
  juegos.forEach((juego) => {
    if (juego.id == id) {
      juegoActual = juego;
    }
  });

  if (!juegoActual) {
    document.getElementById("game-title").innerHTML = "Juego no encontrado";
    return;
  }

  // banner y portada
  document
    .getElementById("banner")
    .style.setProperty("--banner", `url('${juegoActual.background_image}')`);
  document.getElementById("game-cover").src = juegoActual.cover_image;

  // titulo, descripcion y rating
  document.title = `FINDG | ${juegoActual.name}`;
  document.getElementById("game-title").innerHTML = juegoActual.name;
  document.getElementById("game-desc").innerHTML = juegoActual.description;
  document.getElementById("badge-rating").innerHTML = `★ ${juegoActual.rating}`;

  // tienda
  document.getElementById("btn-store").href = juegoActual.store_url;
  document.getElementById("btn-store").hidden = false;

  // generos
  let generos = "";
  juegoActual.genres.forEach((genero) => {
    generos += `${genero.name} `;
  });
  document.getElementById("game-genres").innerHTML = generos;

  // detalles
  let plataformas = "";
  juegoActual.platforms.forEach((plataforma) => {
    plataformas += `${plataforma.name} `;
  });
  document.getElementById("details-list").innerHTML = `
    <p>Desarrollador: ${juegoActual.developer}</p>
    <p>Lanzamiento: ${juegoActual.released}</p>
    <p>Plataformas: ${plataformas}</p>`;

  // reseñas
  let resenias = "";
  juegoActual.reviews.forEach((resenia) => {
    resenias += `<div class="review">
                    <span>${resenia.user} ★ ${resenia.rating}</span>
                    <p>${resenia.comment}</p>
                 </div>`;
  });
  document.getElementById("reviews-list").innerHTML = resenias;

  // galeria: primera imagen en el visor, todas en miniaturas
  let miniaturas = "";
  juegoActual.media.forEach((medio) => {
    miniaturas += `<img src="${medio.url}" alt="${medio.title}" onclick="cambiarVisor('${medio.url}', '${medio.title}')">`;
  });
  document.getElementById("thumbs").innerHTML = miniaturas;
  cambiarVisor(juegoActual.media[0].url, juegoActual.media[0].title);

  // juegos similares: mismo genero principal
  let similares = "";
  juegos.forEach((juego) => {
    if (
      juego.id != juegoActual.id &&
      juego.genres[0].name == juegoActual.genres[0].name
    ) {
      similares += `<div class="card-skeleton" onclick="irAJuego(${juego.id})" style="cursor:pointer">
                      <img alt="fondo-artwork" class="skeleton-img" src="${juego.background_image}">
                      <span class="skeleton-title"> ${juego.name}</span>
                      <span class="skeleton-rating"> ${juego.rating}</span>
                    </div>`;
    }
  });
  document.getElementById("similar-track").innerHTML = similares;
};

/**
 * Desplaza la tira de miniaturas (positivo = derecha, negativo = izquierda)
 * @method desplazarMiniaturas
 */
desplazarMiniaturas = (pixeles) => {
  document.getElementById("thumbs").scrollLeft += pixeles;
};

/**
 * funcion que carga todos los juegos directamente en el explorador
 * @method cargarTencargarExploradosdencias
 */
cargarExplorados = (newJuegos = juegos) => {
  let explorados = "";

  newJuegos.forEach((juego) => {
    explorados += `<div class="card-skeleton" onclick="irAJuego(${juego.id})">
                      <img alt = "fondo-artwork" class = "skeleton-img" src = "${juego.background_image}">
                      <span class = "skeleton-title"> ${juego.name}</span> 
                      <span class = "skeleton-rating"> ${juego.rating}</span> 
                   </div>`;
  });

  document.getElementById("explore-grid").innerHTML = explorados;
};

/**
 * funcion para filtrar los juegos con el formulario (aplicando al boton de submit)
 * @method filtrarJuegos
 */

filtrarJuegos = () => {
  let searchWord = document.getElementById("search-input").value;
  let genero = document.getElementById("category-select").value;
  let rating = document.getElementById("rating-range").value;
  let year = document.getElementById("year-input").value;
  let newJuegos = juegos;

  if (searchWord) {
    newJuegos = newJuegos.filter((g) =>
      g.name.toLowerCase().includes(searchWord.toLowerCase()),
    );
    console.log("se aplico");

    if (!newJuegos.length > 0) {
      alert("has escrito el nombre del juego mal");
      document.getElementById("search-input").value = "";
    }
  }

  if (genero != "") {
    newJuegos = newJuegos.filter((g) =>
      g.genres.some((gen) => gen.name === genero),
    );
  }

  if (rating) {
    newJuegos = newJuegos.filter((g) => g.rating >= rating);
  }

  if (!(year == "")) {
    if ((year > 1980) & (year < 2026)) {
      newJuegos = newJuegos.filter((g) => g.released == year);
    } else {
      alert("el rango de anios no es adecuado");
      document.getElementById("year-input").value = "";
    }
  }

  cargarExplorados(newJuegos);
  document.getElementById("results-count").textContent = newJuegos.length;
};

/**
 * al mover el filtro de rating, el numero debe modificarse
 * @method aumentarRating
 */
aumentarRating = () => {
  document.getElementById("rating-value").innerText =
    document.getElementById("rating-range").value;
};

/**
 * al clickear el boton de reiniciar, se reiniciar los filtros y se devuelven todos los juegos
 * @method reiniciarBusqueda
 */
reiniciarBusqueda = () => {
  document.getElementById("search-input").value = "";
  document.getElementById("category-select").value = "";
  document.getElementById("rating-range").value = "";
  document.getElementById("year-input").value = "";

  filtrarJuegos();
  aumentarRating();
};
