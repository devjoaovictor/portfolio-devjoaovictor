import React from 'react'
import Header from './Components/Head/Header'
import './App.css'
import Inicio from './Components/Inicio/Inicio'
import Habilidades from './Components/Habilidades/Habilidades'
import Portfolio from './Components/Portfolio/Portfolio'
import Estudo from './Components/Estudo/Estudo'
import Contato from './Components/Contato/Contato'
import Footer from './Components/Footer'

const App = () => {
  return ( 
    <>
      <Header />
      <Inicio />
      <Habilidades />
      <Portfolio />
      <Estudo />
      <Contato />
      <Footer />
    </>
  )
}

export default App