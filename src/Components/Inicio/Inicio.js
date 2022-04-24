import React from 'react'
import './Inicio.css'
import hero from '../pic/hero.gif'
import { Typewriter } from 'react-simple-typewriter'


const Inicio = () => {
    return (
      <>
        <section className='hero' id='inicio'>
          <div className='container f_flex top'>
            <div className='left top'>
              <h3>
                  Bem Vindo Ao Meu Portfolio
              </h3>
              <h1>
                Sou o <span>João Victor</span>
              </h1>
              <h2>
                <span>
                  <Typewriter 
                  words={[' Desenvolvedor.', ' Web Júnior.']} 
                  loop
                  cursor 
                  cursorStyle='|' 
                  typeSpeed={70} 
                  deleteSpeed={50} 
                  delaySpeed={1000} />
                </span>
              </h2>
                <p>
                    Sou iniciante na area de Desenvolvimento Web, 
                    Gosto da area de Front-End, Trabalho com HTML5, CSS3, JavaScript, React,
                    mas também me arrisco um pouco 
                    no Back-End, com Python, PHP.  
                </p>
                <div className='hero_btn d_flex'>
                  <div className='col_1'>
                    <h4>
                      MEU PERFIL
                    </h4>
                  <div className='button'>
                    <button className='btn_shadow'>
                      <i className='fab fa-github'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-linkedin-in'></i>
                    </button>
                    <button className='home-btn'>BAIXAR CV</button>
                  </div>
                </div>
              </div>   
            </div>
              <div className='right'>
                <div className='right_img'>
                  <img src={hero} alt='Animação' />
                </div>
              </div>
          </div>
        </section>
    </>
  )
}

export default Inicio