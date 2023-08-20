import "./App.css";
import logo from "./image/logo.png";
import Button from "./components/Button";
import Count from "./components/count";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  //funcion flecha

  const [numClics, setNumClics] = useState(0);
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };
  return (
    <div className="App">
      <div className="image">
        <img className="logo" src={logo} alt="Logo " />
      </div>

      <div className="contenedor-principal">
        <Count numeroClics={numClics} />
        <Button texto="Clic" esBotonClic={true} manejarClic={manejarClic} />
        <Button
          texto="Reiniciar"
          esBotonClic={false}
          manejarClic={reiniciarContador}
        />
      </div>

      <Footer />
    </div>
  );
}
export default App;
