import React, { useState, useEffect } from "react";

function CountDown() {
    const [targetSeconds, setTargetSeconds] = useState(null);
    const [elapseSeconds, setElapseSeconds] = useState(0);

    useEffect(function () {
        if (targetSeconds === null) return;

        // Verificar si el contador llegó a cero
        if (elapseSeconds === targetSeconds) {
            clearInterval(intervalId);
        }

        // Crear un intervalo para actualizar el contador de tiempo
        const intervalId = setInterval(function () {
            setElapseSeconds(prevElapseSeconds => prevElapseSeconds + 1);
        }, 1000);

        // Limpieza del intervalo cuando el componente se desmonta
        return function () {
            clearInterval(intervalId);
        };
    }, [targetSeconds, elapseSeconds]);

    function parseForm(ev) {
        ev.preventDefault();
        const seconds = parseInt(ev.target.seconds.value);
        setTargetSeconds(seconds);
        setElapseSeconds(0);
    }

    // Reiniciar la aplicación
    function resetApp() {
        setTargetSeconds(null);
        setElapseSeconds(0);
    }

    return (
        <div>
            {targetSeconds !== null ? (
                <>
                    {/* Mostrar mensaje cuando el tiempo ha transcurrido */}
                    {elapseSeconds === targetSeconds ? (
                        <div>
                            <p>Se han cumplido los segundos ingresados</p>
                            <button onClick={resetApp}>Reiniciar</button>
                        </div>
                    ) : (
                        <div>
                            <p>Soy un conteo hasta {targetSeconds - elapseSeconds} segundos</p>
                            <p>Segundos transcurridos: {elapseSeconds}</p>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <p>Ingrese cantidad de segundos a contar</p>
                    <form action="#" onSubmit={ev => parseForm(ev)}>
                        <input type="number" name="seconds" />
                        <button>Iniciar</button>
                    </form>
                </>
            )}
        </div>
    );
}

export default CountDown;
