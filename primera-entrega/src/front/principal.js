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
    // Portada / Icono principal del juego
    cover_image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop",
    // Banner panorámico de fondo
    background_image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
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
      { type: "image", url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop", title: "Artwork Principal" },
      { type: "image", url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop", title: "Combate de Jefe" },
      { type: "image", url: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1000&auto=format&fit=crop", title: "Exploración" }
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
    cover_image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&auto=format&fit=crop",
    background_image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
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
      { type: "image", url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop", title: "Dogtown Night City" }
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
    cover_image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=400&auto=format&fit=crop",
    background_image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop",
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
      { type: "image", url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1000&auto=format&fit=crop", title: "Campamento de Héroes" }
    ],
    reviews: [
      { user: "TavernMaster", rating: 5, comment: "Libertad absoluta para resolver los combates y misiones." }
    ]
  },
  {
    id: 104,
    name: "EA SPORTS FC 24",
    rating: 3.8,
    released: "2023",
    developer: "EA Vancouver",
    store_url: "https://store.steampowered.com/app/2195250/EA_SPORTS_FC_24/",
    cover_image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=400&auto=format&fit=crop",
    background_image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop",
    description: "La experiencia futbolística más auténtica hasta la fecha con las mayores competiciones, clubes y estrellas del mundo utilizando HyperMotionV.",
    genres: [
      { name: "Deportes"}
    ],
    platforms: [
      { name: "PC" },
      { name: "PlayStation 5" }
    ],
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop", title: "Estadio Lleno" }
    ],
    reviews: [
      { user: "Futbolero22", rating: 3.5, comment: "Buenas animaciones pero la jugabilidad sigue siendo muy similar." }
    ]
  },
  {
    id: 105,
    name: "Hollow Knight",
    rating: 4.7,
    released: "2017",
    developer: "Team Cherry",
    store_url: "https://store.steampowered.com/app/367520/Hollow_Knight/",
    cover_image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop",
    background_image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
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
      { type: "image", url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop", title: "Boca Sucia" }
    ],
    reviews: [
      { user: "BugHunter", rating: 5, comment: "Arte visual y música inigualables." }
    ]
  },
  {
    id: 106,
    name: "Portal 2",
    rating: 4.9,
    released: "2011",
    developer: "Valve",
    store_url: "https://store.steampowered.com/app/620/Portal_2/",
    cover_image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
    background_image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    description: "Una hilarante y brillante aventura de acertijos en primera persona donde usas un dispositivo de portales para resolver intrincadas cámaras de pruebas.",
    genres: [
      { name: "Puzzle"}
    ],
    platforms: [
      { name: "PC" }
    ],
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop", title: "Cámara de Pruebas" }
    ],
    reviews: [
      { user: "ApertureScience", rating: 5, comment: "El mejor juego de acertijos de la historia." }
    ]
  }
];