import { useState } from 'react'

import Formulario from '../componentes/Formulario'

import Cabecera from '../componentes/Cabecera'
import BannerM from '../componentes/Banner'
import Pie from '../componentes/Pie'


function App() {

  return (
    <>
      <Cabecera/>
      <BannerM/>
      <Formulario/> 
      <Pie/>
    </>
  )
}

export default App
