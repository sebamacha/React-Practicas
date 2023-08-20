import React from "react";
import "../stylesheet/Fotter.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-container">
          <img
            src={require("../image/logo.png")}
            alt="Logo"
            className="rotating-logo"
          />
        </div>
        <p>
          &copy; {new Date().toLocaleDateString("es-AR")} Sebastian Macharette
        </p>
        <p>
          Contacto:{" "}
          <a
            href="https://www.macharette.com.ar"
            target="_blank"
            rel="noopener noreferrer">
            www.macharette.com.ar
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
