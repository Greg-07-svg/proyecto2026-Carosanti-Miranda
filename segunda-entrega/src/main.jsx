import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@styles/style.scss";
import Layout from "./Layout.jsx";
import Home from "@pages/home.jsx";
// import Favourite from "@pages/favourite.jsx";
// import Explore from "@pages/explore.jsx";
// import Game from "@pages/game.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/*<Route path="/favoritos" element={<Favourite />} />*/}
          {/*<Route path="/juego" element={<Game />} />*/}
          {/*<Route path="/explorar" element={<Explore />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

// en el enrutamiento de juegos ver cual es el path, ya que deberia de depender del id del juego
