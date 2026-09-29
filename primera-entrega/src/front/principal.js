//se mockean los juegos, primera entrega no permiote el uso de la api, asi que usamos las imagenes de los logos y los gamearts cargados en imagenes. 
// 6 juegos
// js/mockData.js

const MOCK_GAMES = [
  {
    id: 101,
    name: "Elden Ring: Shadow of the Erdtree",
    rating: 4.9,
    released: "2024",
    developer: "FromSoftware",
    store_url: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
    
    cover_image: "primera-entrega\src\front\imagenes\elden-ring-logo.webp",
    // Banner panorámico de fondo
    background_image: "primera-entrega\src\front\imagenes\elden-ring-shadow-of-the-erdtree-backimage.webp",
    description: "Una expansión épica que lleva a los jugadores a explorar la Tierra de las Sombras, llena de nuevos jefes, armas y secretos oscuros por descubrir en un vasto mundo abierto.",
    genres: [
      { name: "RPG" },
      { name: "Acción"}
    ],
    platforms: [
      { name: "PC" },
      { name: "PlayStation 5" },
      { name: "Xbox Series X" }
    ],
    media: [
      { type: "image", url: "primera-entrega\src\front\imagenes\paintings-elden-ring-shadow-of-the-erdtree.webp", title: "Artwork Principal" },
      { type: "image", url: "primera-entrega\src\front\imagenes\elden-ring-boss.webp", title: "Combate de Jefe" },
      { type: "image", url: "primera-entrega\src\front\imagenes\elden-ring-shadow-of-the-erdtree-exploracion.webp", title: "Exploración" }
    ],
    reviews: [
      { user: "Alexander_V", rating: 5, comment: "Una obra maestra indiscutible. La dificultad es alta pero sumamente gratificante." },
      { user: "GamerPro99", rating: 4.8, comment: "El diseño del mundo y los nuevos jefes superaron mis expectativas." }
    ]
  },
  {
    id: 102,
    name: "Cyberpunk 2077: Phantom Liberty",
    rating: 4.8,
    released: "2023",
    developer: "CD Projekt Red",
    store_url: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
    cover_image: "primera-entrega\src\front\imagenes\cyberpunk-2077-logo.webp",
    background_image: "primera-entrega\src\front\imagenes\cyberpunk-2077-background.webp",
    description: "Una aventura de espionaje y suspenso donde encarnas al mercenario V en una misión de alto riesgo dentro del peligroso distrito de Dogtown en Night City.",
    genres: [
      { name: "Acción" },
      { name: "RPG" }
    ],
    platforms: [
      { name: "PC" },
      { name: "PlayStation 5" }
    ],
    media: [
      { type: "image", url: "primera-entrega\src\front\imagenes\Cyberpunk-2077-Phantom-Liberty-ciudad.webp", title: "Dogtown Night City" }
    ],
    reviews: [
      { user: "NeonKnight", rating: 5, comment: "Increíble historia y la redención perfecta para Cyberpunk." }
    ]
  },
  {
    id: 103,
    name: "Baldur's Gate 3",
    rating: 4.9,
    released: "2023",
    developer: "Larian Studios",
    store_url: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
    cover_image: "primera-entrega\src\front\imagenes\baldurs-gate-3-logo.webp",
    background_image: "primera-entrega\src\front\imagenes\Baldurs-gate-3-background.webp",
    description: "Un juego de rol de próxima generación ambientado en el mundo de Dungeons & Dragons, donde tus elecciones dan forma a una historia de amistad, traición y supervivencia.",
    genres: [
      { name: "RPG" },
      { name: "Estrategia"}
    ],
    platforms: [
      { name: "PC" },
      { name: "PlayStation 5"},
      { name: "Xbox Series X" }
    ],
    media: [
      { type: "image", url: "primera-entrega\src\front\imagenes\campamento-baldurs-gate-3.webp", title: "Campamento de Héroes" }
    ],
    reviews: [
      { user: "TavernMaster", rating: 5, comment: "Libertad absoluta para resolver los combates y misiones." }
    ]
  },
  {
    id: 104,
    name: "Hollow Knight",
    rating: 4.7,
    released: "2017",
    developer: "Team Cherry",
    store_url: "https://store.steampowered.com/app/367520/Hollow_Knight/",
    cover_image: "primera-entrega\src\front\imagenes\holow-knight-cover.webp",
    background_image: "primera-entrega\src\front\imagenes\hollow-knight-background.webp",
    description: "Desciende al mundo de Hallownest, un reino en ruinas lleno de insectos y héroes. Explora cavernas retorcidas, combate criaturas corrompidas y forja tu propio camino.",
    genres: [
      { name: "Aventura"},
      { name: "Acción" }
    ],
    platforms: [
      { name: "PC" },
      { name: "Nintendo Switch"}
    ],
    media: [
      { type: "image", url: "primera-entrega\src\front\imagenes\hollow-knight-dirtmouth.webp", title: "Boca Sucia" }
    ],
    reviews: [
      { user: "BugHunter", rating: 5, comment: "Arte visual y música inigualables." }
    ]
  },
  {
    id: 105,
    name: "Portal 2",
    rating: 4.9,
    released: "2011",
    developer: "Valve",
    store_url: "https://store.steampowered.com/app/620/Portal_2/",
    cover_image: "primera-entrega\src\front\imagenes\portal2-cover.webp",
    background_image: "primera-entrega\src\front\imagenes\portal2-background.webp",
    description: "Una hilarante y brillante aventura de acertijos en primera persona donde usas un dispositivo de portales para resolver intrincadas cámaras de pruebas.",
    genres: [
      { name: "Puzzle"}
    ],
    platforms: [
      { name: "PC" }
    ],
    media: [
      { type: "image", url: "primera-entrega\src\front\imagenes\portal2-camara-de-pruebas.webp", title: "Cámara de Pruebas" }
    ],
    reviews: [
      { user: "ApertureScience", rating: 5, comment: "El mejor juego de acertijos de la historia." }
    ]
  }
];