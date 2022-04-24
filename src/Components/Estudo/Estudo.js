/* eslint-disable array-callback-return */
import React from 'react'
import './Estudo.css'
import EstudoApi from './EstudoApi'
import Card from './Card'

const Estudo = () => {
    return (
      <>
        <section className='Estudo' id='estudo'>
          <div className='container top'>
            <div className='heading text-center'>
              <h4>
                  EXPERIENCIA
              </h4>
              <h1>
                  MEU ESTUDO
              </h1>

            </div>
  
            <div className='content-section mtop d_flex'>
              <div className='left'>
                <div className='heading'>
                  <h4>
                      2022-2025
                 </h4>

                  <h1>
                      Universidades e Bootcamp
                  </h1>
                </div>
  
                <div className='content'>
                  {EstudoApi.map((val, id) => {
                    if (val.category === 'education') {
                      return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                    }
                  })}
  
                  {/*<div className='box btn_shadow'>
                    <div className='title_content d_flex'>
                      <div className='title'>
                        <h2>Personal Portfolio April Fools</h2>
                        <span>University of DVI (1997 - 2001)</span>
                      </div>
                      <div className='rate'>
                        <button className='btn_shadow '>4.30/5</button>
                      </div>
                    </div>
                    <hr />
                    <p> The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                  </div>*/}
                </div>
              </div>
              <div className='left'>
                <div className='heading'>
                  <h4>2021-</h4>
                  <h1>Diploma</h1>
                </div>
  
                <div className='content'>
                  {EstudoApi.map((val, index) => {
                    if (val.category === 'experience') {
                      return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

export default Estudo