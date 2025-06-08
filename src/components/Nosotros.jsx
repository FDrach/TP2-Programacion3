import React from "react";

const Nosotros = (props) => {
  const { listaIntegrantes, onEliminarIntegrante } = props;
  const defaultImg = "https://avatars.githubusercontent.com/github";
  return (
    <div className="integrantes-grid">
      {listaIntegrantes.map((integrante) => (
        <div key={integrante.legajo} className="integrante-card">
          {onEliminarIntegrante && (
            <button
              className="eliminar-x"
              onClick={() => onEliminarIntegrante(integrante.legajo)}
              title="Eliminar integrante"
            >
              ×
            </button>
          )}
          <img
            src={integrante.foto}
            alt={`Foto de ${integrante.nombre}`}
            onError={(e) => { e.target.onerror = null; e.target.src = defaultImg }}
          />
          <h4>
            {integrante.nombre} {integrante.apellido}
          </h4>
          <p>Legajo: {integrante.legajo}</p>
          <a href={integrante.github} target="_blank" rel="noopener noreferrer">
            Perfil de GitHub
          </a>
        </div>
      ))}
    </div>
  );
};

export default Nosotros;
