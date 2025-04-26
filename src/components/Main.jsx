import React from "react";
import Nosotros from "./Nosotros.jsx";
const Main = (props) => {
  const { integrantesData } = props;
  return (
    <main>
      <Nosotros listaIntegrantes={integrantesData} />
      <hr />
    </main>
  );
};

export default Main;
