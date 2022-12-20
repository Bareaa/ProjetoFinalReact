import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/menus/Main";
import Filmes from "./pages/menus/Filmes";
import Starships from "./pages/menus/Starships";
import People from "./pages/menus/People";
import Planets from "./pages/menus/Planets";
import Species from "./pages/menus/Species";
import Duvidas from "./pages/menus/Duvidas";
import Sobre from "./pages/menus/Sobre";
import './assets/css/estilos.css'
import Registro from "./pages/menus/Registro";
// import * as Firebase from './services/FirebaseConnect'
// import axios from 'axios';
// import {useEffect} from 'react';


function App() {


  const [login, setLogin] = useState(false)

  const verificarLogin = () => {
    setLogin(sessionStorage.getItem("login"))
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/voltar",
      element: <Menu />,
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
    {
      path: "/registro",
      element: <Registro setLogin={setLogin}/> 
    },


  ]);

  return (
    <RouterProvider router={router} />

  );
}

export default App;