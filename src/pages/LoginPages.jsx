import React, { useState } from "react";

const USUARIO_PRUEBA = "admin";
const PASSWORD_PRUEBA = "1234";

const LoginPages = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [logueado, setLogueado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === USUARIO_PRUEBA && password === PASSWORD_PRUEBA) {
      setLogueado(true);
      setError("");
    } else {
      setError("Usuario o contraseña incorrectos");
      setLogueado(false);
    }
  };

  if (logueado) {
    return (
      <div>
        <h2>¡Bienvenido, {usuario}!</h2>
        <p>Has iniciado sesión correctamente.</p>
      </div>
    );
  }

  return (
    <main>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </main>
  );
};

export default LoginPages;
