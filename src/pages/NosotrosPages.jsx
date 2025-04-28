import React, { useState } from "react";
import Nosotros from "../components/Nosotros.jsx";

const NosotrosPages = ({ integrantesData, onAddIntegrante }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [legajo, setLegajo] = useState("");
  const [github, setGithub] = useState("");
  const [foto, setFoto] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !legajo || !github || !foto) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const nuevoIntegrante = {
      nombre: nombre,
      apellido: apellido,
      legajo: legajo,
      github:
        github.startsWith("https://") || github.startsWith("http://")
          ? github.replace("http://", "http://")
          : `https://github.com/${github}`,
      foto: foto,
    };

    onAddIntegrante(nuevoIntegrante);

    setNombre("");
    setApellido("");
    setLegajo("");
    setGithub("");
    setFoto("");
  };
  return (
    <main>
      <h2>Nuestro Equipo</h2>
      <Nosotros listaIntegrantes={integrantesData} />
      <div style={{ display: "none" }}>
        <h3>Agregar Nuevo Integrante</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              placeholder="Juan"
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              value={apellido}
              placeholder="Perez"
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="legajo">Legajo:</label>
            <input
              type="text"
              id="legajo"
              value={legajo}
              placeholder="123456"
              onChange={(e) => setLegajo(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="github">GitHub (URL o usuario):</label>
            <input
              type="text"
              id="github"
              value={github}
              placeholder="usuario / https://github.com/usuario"
              onChange={(e) => setGithub(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="foto">URL de la Foto:</label>
            <input
              type="url"
              id="foto"
              value={foto}
              placeholder="https://..."
              onChange={(e) => setFoto(e.target.value)}
              required
            />
          </div>
          <button type="submit">Agregar Integrante</button>
        </form>
      </div>
    </main>
  );
};

export default NosotrosPages;
