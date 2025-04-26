import React from "react";

const Footer = ({ integrantesData }) => {
  return (
    <footer className="app-footer">
      <h3 className="footer-title">Grupo 3 - Contacto</h3>

      <ul className="member-links-list">
        {integrantesData.map((member) => (
          <li key={member.legajo} className="member-link-item">
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="member-link"
            >
              {member.nombre} {member.apellido}
            </a>
          </li>
        ))}
      </ul>

      <p className="copyright-notice">© 2025 - Grupo N.º 3 – Programación 3</p>
    </footer>
  );
};

export default Footer;
