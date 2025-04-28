import React from "react";
import Main from "../components/Main.jsx";

const HomePages = ({ integrantesData, onAddIntegrante }) => {
  return (
    <div>
      <Main
        integrantesData={integrantesData}
        onAddIntegrante={onAddIntegrante}
      />
    </div>
  );
};

export default HomePages;
