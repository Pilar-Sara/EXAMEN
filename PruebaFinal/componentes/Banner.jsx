import React, { useState, useEffect } from 'react'; 
import mueble1 from '../Imagenes/mueble1.jpg';
import mueble2 from '../Imagenes/mueble2.jpg';
import mueble3 from '../Imagenes/mueble3.jpg';
import '../componentes/Estilos.css'

function BannerM() {
  // Índice de la imagen
  const [indiceImg, nuevaImg] = useState(0);

  // Array
  const imagen = [mueble1, mueble2, mueble3];
  
  useEffect(() => {
    // Función para rotar la imagen
    const rotarImagen = () => {
      nuevaImg((indicePrevio) => (indicePrevio + 1) % imagen.length);
    };

    // Iniciar la rotación cada segundo
    const intervaloId = setInterval(rotarImagen, 3000);


    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervaloId);
  }, [indiceImg, imagen]); // Aseguramos que se vuelva a ejecutar el efecto cuando cambie el índice o las imágenes

  return (
        <>
            <img className="imagenBannerM" src={imagen[indiceImg]} alt={`Banner ${indiceImg}`} />
        </>
  );
}
export default BannerM;