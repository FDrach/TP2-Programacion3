import React, { useState } from "react";

const UAdmin = "admin";
const CAdmin = "1234";

const LoginPages = ({ logueado, setLogueado }) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [bienvenida, setBienvenida] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === UAdmin && password === CAdmin) {
      setLogueado(true);
      setError("");
      setBienvenida(true);
      setTimeout(() => {
        setBienvenida(false);
        window.location.href = "/home";
      }, 2000); // 2 segundos
    } else {
      setError("Usuario o contraseña incorrectos");
      setLogueado(false);
    }
  };

  if (logueado && bienvenida) {
    return (
      <div className="login-container">
        <div className="login-form-box">
          <h2>¡Bienvenido, {usuario}!</h2>
          <p>Redirigiendo al inicio...</p>
        </div>
      </div>
    );
  }

  if (logueado) {
    window.location.href = "/home";
    return null;
  }

  return (
    <div className="login-container">
      <form className="login-form-box" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginPages;
