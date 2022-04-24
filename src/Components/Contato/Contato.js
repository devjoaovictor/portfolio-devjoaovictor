import React, { useState } from 'react'
import './Contato.css'

const Contato = () => {
    const [data, setData] = useState({
      fullname: '',
      phone: '',
      email: '',
      subject: '',
      message: '',})
  
    const InputEvent = (event) => {
      const { name, value } = event.target
  
      setData((preVal) => {
        return {
          ...preVal,
          [name]: value,
        }
      })
    }
  
    const formSubmit = (event) => {
      event.preventDefault()
      alert(
        `My name is ${data.fullname}. 
      My phone number is ${data.phone}. 
      My email address is ${data.email}. 
      My Subject on  ${data.subject}. 
      Here is my message I want to say : ${data.message}. 
      `
      )
    }
    return (
      <>
        <section className='Contato' id='contato'>
          <div className='container top'>
            <div className='heading text-center'>
              <h1>CONTATO</h1>
            </div>
  
            <div className='content d_flex'>
              <div className='left'>
                <div className='box box_shadow'>
                  <div className='img'>
                    {/* <img src={contato1} alt='' /> */}
                  </div>
                  <div className='details'>
                    <h1>Contato</h1>
                    <p>Preencha o formulário para entrar em contato comigo</p>
                    <br />
                    <br />
                    <span>CONTATOS</span>
                    <div className='button f_flex'>
                      <button className='btn_shadow'>
                        <i className='fab fa-facebook-f'></i>
                      </button>
                      <button className='btn_shadow'>
                        <i className='fab fa-instagram'></i>
                      </button>
                      <button className='btn_shadow'>
                        <i className='fab fa-twitter'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className='right box_shadow'>
                <form onSubmit={formSubmit}>
                  <div className='f_flex'>
                    <div className='input row'>
                      <span>NOME</span>
                      <input type='text' name='fullname' placeholder='Nome Completo' value={data.fullname} onChange={InputEvent} />
                    </div>
                    <div className='input row'>
                      <span>TELEFONE </span>
                      <input type='number' name='phone' placeholder='Telefone' value={data.phone} onChange={InputEvent} />
                    </div>
                  </div>
                  <div className='input'>
                    <span>EMAIL </span>
                    <input type='email' name='email' placeholder='Digite o seu melhor Email' value={data.email} onChange={InputEvent} />
                  </div>
                  <div className='input'>
                    <span>ASSUNTO </span>
                    <input type='text' name='subject' placeholder='Assunto' value={data.subject} onChange={InputEvent} />
                  </div>
                  <div className='input'>
                    <span>MENSAGEM </span>
                    <textarea cols='30' rows='4' name='message' placeholder='Mensagem' value={data.message} onChange={InputEvent}></textarea>
                  </div>
                  <button className='btn_shadow'>
                    ENVIAR MENSAGEM <i className='fa fa-long-arrow-right'></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

export default Contato