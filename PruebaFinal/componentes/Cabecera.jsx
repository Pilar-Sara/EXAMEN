
import React, { useEffect } from 'react';
import logoM from '../Imagenes/logoM.jpg'
import './Estilos.css'
import fb from '../Imagenes/facebook.png'
import ins from '../Imagenes/instagram.png'
import ytb from '../Imagenes/youtube.png'

function Cabecera() {
  
    return (
       <>
        <div id="cabeceraM">
          <a href=''>
            <img className="logoMenuM" src={logoM} alt="Logo"/>
            MueblesFast
          </a>
            <div className='redesM'>
                <a href=""><img src={fb} alt="" /></a>
                <a href=""><img src={ins} alt="" /></a>
                <a href=""><img src={ytb} alt="" /></a>
            </div>
        </div>
        <hr />
      </>
    );
  }
  
  export default Cabecera;