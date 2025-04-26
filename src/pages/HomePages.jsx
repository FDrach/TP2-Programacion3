import React from "react";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";

const HomePages = ({ integrantesData }) => {
  return (
    <div>
      <Header />
      <Main integrantesData={integrantesData} />
      <Footer />
    </div>
  );
};

export default HomePages;
