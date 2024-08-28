
import React, { useState, useEffect } from 'react';

const Pie = () => {
    const [fechaHora, setFechaHora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setFechaHora(new Date());
        }, 1000);

        return () => clearInterval(intervalo); 
    }, []);

    const formatoFecha = fechaHora.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    const formatoHora = fechaHora.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    return (
        <div className='foote'>
            <h1>MueblesFAST</h1>
            <div>
                <p>Fecha: {formatoFecha}</p>
                <p>Hora: {formatoHora}</p>
            </div>
        </div>
    );
};

export default Pie;