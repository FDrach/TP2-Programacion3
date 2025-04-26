import React from "react";

const Header = () => {
  return (
    <header className="app-header">
      <h1 className="app-title">Presentación Grupo 3 - React JS</h1>

      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="#nosotros" className="nav-link">
              Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a href="#login" className="nav-link">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="#view" className="nav-link">
              Vista
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
