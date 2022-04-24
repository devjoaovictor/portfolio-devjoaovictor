import React from 'react'
import './Habilidades.css'
import Card from './Card.js'
import Card2 from './Card2'
import Card3 from './Card3'

const Habilidades = () => {
  return (
    <>
        <section className='habilidades top' id='habilidades'>
            <div className='container'>
                <div className='heading text-center'>
                    <h4>
                        Habilidades
                    </h4>
                    <h1>
                        Experiencia
                    </h1>
                </div>
                <div className='content grid'>
                    <Card />
                    <Card2 />
                    <Card3 />
                </div>
            </div>
        </section>
    </>
  )
}
export default Habilidades