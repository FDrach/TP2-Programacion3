import React from "react";

const Header = ({ logueado, setLogueado }) => (
  <header className="app-header">
    <h1 className="app-title">Presentación Grupo 3 - React JS</h1>
    <nav className="main-nav">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/home" className="nav-link">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a href="/nosotros" className="nav-link">
            Nosotros
          </a>
        </li>
        <li className="nav-item">
          <a href="/view" className="nav-link">
            Vista
          </a>
        </li>
        {!logueado && (
          <li className="nav-item">
            <a href="/login" className="nav-link">
              Login
            </a>
          </li>
        )}
        {logueado && (
          <li className="nav-item">
            <button
              className="logout-btn"
              onClick={() => {
                if (
                  window.confirm(
                    "¿Estás seguro de que deseas cerrar sesión?"
                  )
                ) {
                  setLogueado(false);
                }
              }}
            >
              Cerrar sesión
            </button>
          </li>
        )}
      </ul>
    </nav>
  </header>
);

export default Header;
