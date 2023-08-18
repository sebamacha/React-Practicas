import { useState } from "react";



function Counter() {
  //asignar el estado del componente
 const [contador, setContador] = useState(0);


return(
  <div>
    <p>
      Haz click al boton, numeros de click {contador}
    </p>
    <button onClick={() => {setContador(contador + 1)}} >incrementar</button>
  </div>
)
  }



export default Counter;
