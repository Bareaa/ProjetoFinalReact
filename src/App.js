import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Filmes from "./pages/menus/Filmes";
import Starships from "./pages/menus/Starships";
import People from "./pages/menus/People";
import Planets from "./pages/menus/Planets";
import Species from "./pages/menus/Species";
import Duvidas from "./pages/menus/Duvidas";
import Sobre from "./pages/menus/Sobre";
import './assets/css/estilos.css'

function App() {

  const [login, setLogin] = useState(false)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login setLogin={setLogin} />,
    },
    {
      path: "/menu",
      element: login === true ? <Menu setLogin={setLogin}/> : <Login setLogin={setLogin} />,
    },
    {
      path: "/filmes",
      element: <Filmes />,
    },
    {
      path: "/starships",
      element: <Starships setLogin={setLogin}/> 
    },
    {
      path: "/people",
      element: <People setLogin={setLogin}/> 
    },
    {
      path: "/species",
      element: <Species setLogin={setLogin}/> 
    },
    {
      path: "/duvidas",
      element: <Duvidas setLogin={setLogin}/> 
    },
    {
      path: "/sobre",
      element: <Sobre setLogin={setLogin}/> 
    },
    {
      path: "/planets",
      element: <Planets setLogin={setLogin}/> 
    },

  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;