# FINDG

---

## Índice

- [FINDG](#findg)
- [Índice](#índice)
- [Autores](#autores)
- [Descripción](#descripción)
- [Funcionalidades](#funcionalidades)
- [Tecnologías](#tecnologías)
- [Pasos de ejecución](#pasos-de-ejecución)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Link de la página](#link-de-la-página)

---

## Autores

- **Gregorio Miranda**
- **Lucca Carosanti**

---

### Descripción

FINDG es una página web planteada por **dos estudiantes** de Ingeniería en Informática en la UCC con la idea de poder buscar juegos cuando no sabes qué querés jugar.

---

### Funcionalidades

- **Juego del día:** recomendación destacada en la pantalla principal.
- **Tendencias:** visualización de los títulos más populares y valorados.
- **Explorador:** catálogo para filtrar y encontrar videojuegos por categorías y géneros.
- **Detalle de juego:** galería de imágenes, rating, reseñas y juegos similares.
- **Favoritos:** lista personalizada para guardar los juegos preferidos (se guarda en `localStorage`).
- **Diseño responsive:** interfaz adaptable tanto para computadoras de escritorio como para dispositivos móviles.

---

### Tecnologías

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

| _tecnologia_              | _proposito_                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| **_React_**               | construcción de la interfaz con componentes y hooks (`useState`, `useEffect`, `useNavigate`) |
| **_Vite_**                | herramienta con la que se creó el proyecto React y servidor de desarrollo                    |
| **_react-router-dom_**    | enrutamiento entre páginas, usando `Outlet` para renderizar las rutas hijas                  |
| **_Sass (.scss)_**        | estilos de toda la aplicación, guardados en la carpeta `styles`                              |
| **_json-server_**         | mock del servicio (`db.json`) para consultar los datos de los juegos                         |
| **_fetch + async/await_** | consumo del servicio mockeado desde la carpeta `api`                                         |
| **_localStorage_**        | guardado de los juegos favoritos en el navegador                                             |
| **_JavaScript_**          | lógica de la aplicación                                                                      |
| **_HTML_**                | estructura base (`index.html` de Vite y JSX)                                                 |

---

### Pasos de ejecución

**Requisitos:** tener instalado [Node.js](https://nodejs.org/) (versión LTS) y `npm`.

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/greg-07-svg/proyecto2026-Carosanti-Miranda.git
   ```

2. Entrar a la carpeta del proyecto React (donde está el `package.json`):

   ```bash
   cd proyecto2026-Carosanti-Miranda/<carpeta-del-proyecto>
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Levantar el mock del servicio (`db.json`) en una terminal:

   ```bash
   npm run server
   ```

5. Levantar la aplicación en otra terminal:

   ```bash
   npm run dev
   ```

6. Abrir en el navegador la dirección que muestra Vite (por defecto `http://localhost:5173`).

**Scripts disponibles**

| _comando_         | _que hace_                                |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | inicia la aplicación en modo desarrollo   |
| `npm run server`  | inicia el servicio mockeado con `db.json` |
| `npm run build`   | genera la versión de producción           |
| `npm run preview` | previsualiza la versión de producción     |

> Los dos servicios (`server` y `dev`) tienen que estar corriendo al mismo tiempo para que la aplicación cargue los juegos.

---

### Link de la página

- **[FINDG en GitHub Pages](https://greg-07-svg.github.io/proyecto2026-Carosanti-Miranda/primera-entrega/src/front/index.html)**
