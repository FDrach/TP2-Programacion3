/*
Franco Eduardo Drachenberg - 61236
Said Ghisaura - 00000
Cristian Ballespin - 00000
Ignacio Diaz Valdez - 00000
Martin Alvarez - 00000
*/

import React from "react";
import "./styles/App.css";
import HomePages from "./pages/HomePages.jsx";

function App() {
  const integrantes = [
    {
      nombre: "Franco Eduardo",
      apellido: "Drachenberg",
      legajo: "61236",
      github: "https://github.com/FDrach",
      foto: "https://avatars.githubusercontent.com/FDrach",
    },
    {
      nombre: "Said",
      apellido: "Ghisaura",
      legajo: "00000",
      github: "https://github.com/sghisaura",
      foto: "https://avatars.githubusercontent.com/github",
    },
    {
      nombre: "Cristian",
      apellido: "Ballespin",
      legajo: "00000",
      github: "https://github.com/cballespin",
      foto: "https://avatars.githubusercontent.com/github",
    },
    {
      nombre: "Ignacio",
      apellido: "Diaz Valdez",
      legajo: "00000",
      github: "https://github.com/idiazvaldez",
      foto: "https://avatars.githubusercontent.com/github",
    },
    {
      nombre: "Martin",
      apellido: "Alvarez",
      legajo: "00000",
      github: "https://github.com/AA-Martin07",
      foto: "https://avatars.githubusercontent.com/AA-Martin07",
    },
  ];

  return (
    <div className="App">
      <HomePages integrantesData={integrantes} />
    </div>
  );
}

export default App;
