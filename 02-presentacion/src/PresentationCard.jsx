import React from 'react';
import perro from './assets/perro.jpg';
import './presentationCard.css';

function PresentationCard() {
  return (
    <div className="presentation-card"> {/* Corregir el nombre de la clase aquí */}
      {/* expresion javascript */}
      <h1>Hola soy {name} y estoy aprendiendo react </h1>
      <img src={perro} alt="" className='presentation-card' /> {/* Corregir el nombre de la clase aquí */}
    </div>
  );
}

// definir variable
let name = 'Sebastian'

export default PresentationCard;
