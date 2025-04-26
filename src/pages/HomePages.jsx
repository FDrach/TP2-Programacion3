import React from "react";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";

const HomePages = ({ integrantesData, onAddIntegrante }) => {
  return (
    <div>
      <Header />
      <Main
        integrantesData={integrantesData}
        onAddIntegrante={onAddIntegrante}
      />
      <Footer integrantesData={integrantesData} />
    </div>
  );
};

export default HomePages;
