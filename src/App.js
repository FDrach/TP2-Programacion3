/*
Franco Eduardo Drachenberg - 61236
Said Ghisaura - 61584
Cristian Ballespin - 62171
Ignacio Diaz Valdez - 61551
Martin Alvarez - 61984
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
    legajo: "61584",
    github: "https://github.com/SaidJG22",
    foto: "https://avatars.githubusercontent.com/SaidJG22",
  },
  {
    nombre: "Cristian",
    apellido: "Ballespin",
    legajo: "62171",
    github: "https://github.com/CrisBallespin15",
    foto: "https://avatars.githubusercontent.com/CrisBallespin15",
  },
  {
    nombre: "Ignacio",
    apellido: "Diaz Valdez",
    legajo: "61551",
    github: "https://github.com/IgnacioDiazV",
    foto: "https://avatars.githubusercontent.com/IgnacioDiazV",
  },
  {
    nombre: "Martin",
    apellido: "Alvarez",
    legajo: "61984",
    github: "https://github.com/martin0192",
    foto: "https://avatars.githubusercontent.com/martin0192",
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
