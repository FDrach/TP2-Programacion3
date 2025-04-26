import React from "react";

const Nosotros = (props) => {
  const { listaIntegrantes } = props;

  return (
    <div className="integrantes-grid">
      {listaIntegrantes.map((integrante) => (
        <div key={integrante.legajo} className="integrante-card">
          <img src={integrante.foto} alt={`Foto de ${integrante.nombre}`} />
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
