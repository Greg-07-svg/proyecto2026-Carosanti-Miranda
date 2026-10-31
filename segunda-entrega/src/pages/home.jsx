import "../styles/style.css";

const Home = () => {
  return (
    <div>
      <section className="hero-section" id="hero">
        <div className="hero-overlay">
          <div className="hero-container" id="hero-container"></div>
        </div>
      </section>

      <section id="section-trends">
        <h2 className="section-title">Tendencias</h2>

        <div className="games-container" id="trend-games-container">
          <div className="card-skeleton">
            <img
              alt="fondo-artwork"
              src="imagenes/Baldurs-gate-3-background.webp"
              className="skeleton-img"
            />
            <span className="skeleton-title"> BALDURS</span>
            <span className="skeleton-rating"> 4.2</span>
          </div>
        </div>
      </section>

      <section className="section-categories">
        <h2 className="section-title">Categorías</h2>

        <div className="categories-grid">
          {/* onClick="dirigirExplorarFiltro()" */}
          <a
            href="explore.html?category=Acción"
            className="category-card"
          >
            Acción
          </a>
          {/* onclick="dirigirExplorarFiltro()" */}
          <a
            href="explore.html?category=Aventura"
            className="category-card"
          >
            Aventura
          </a>
          {/* onclick="dirigirExplorarFiltro()" */}
          <a
            href="explore.html?category=RPG  "
            className="category-card"
          >
            RPG
          </a>
          {/* onclick="dirigirExplorarFiltro()" */}
          <a
            href="explore.html?category=Estrategia"
            className="category-card"
          >
            Estrategia
          </a>
          {/* onclick="dirigirExplorarFiltro()" */}
          <a
            href="explore.html?category=Deportes"
            className="category-card"
          >
            Deportes
          </a>
          {/* onclick="dirigirExplorarFiltro()" */}
          <a
            href="explore.html?category=Puzzle"
            className="category-card"
          >
            Puzzle
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
