/*
Franco Eduardo Drachenberg - 61236
Said Ghisaura - 00000
Cristian Ballespin - 00000
Ignacio Diaz Valdez - 00000
Martin Alvarez - 00000
*/

import React, { useState } from "react"; // Import useState
import "./styles/App.css";
import HomePages from "./pages/HomePages.jsx";

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
    legajo: "00001",
    github: "https://github.com/sghisaura",
    foto: "https://avatars.githubusercontent.com/github",
  },
  {
    nombre: "Cristian",
    apellido: "Ballespin",
    legajo: "00002",
    github: "https://github.com/cballespin",
    foto: "https://avatars.githubusercontent.com/github",
  },
  {
    nombre: "Ignacio",
    apellido: "Diaz Valdez",
    legajo: "00003",
    github: "https://github.com/idiazvaldez",
    foto: "https://avatars.githubusercontent.com/github",
  },
  {
    nombre: "Martin",
    apellido: "Alvarez",
    legajo: "00004",
    github: "https://github.com/AA-Martin07",
    foto: "https://avatars.githubusercontent.com/AA-Martin07",
  },
];

function App() {
  const [integrantesData, setIntegrantes] = useState(integrantes);
  const addIntegrante = (nuevoIntegrante) => {
    setIntegrantes((prevIntegrantes) => [...prevIntegrantes, nuevoIntegrante]);
  };

  return (
    <div className="App">
      <HomePages
        integrantesData={integrantesData}
        onAddIntegrante={addIntegrante}
      />
    </div>
  );
}

export default App;
