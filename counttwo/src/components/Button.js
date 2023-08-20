import React from "react";
import "../stylesheet/Button.css";

function Button({ texto, esBotonClic, manejarClic }) {
  return (
    //sintaxis de desestructuracion en ves de props
    <button
      className={esBotonClic ? "boton-clic" : "boton-reiniciar"}
      //eventListener, oyente de eventos
      onClick={manejarClic}>
      {texto}
    </button>
  );
}
export default Button;
