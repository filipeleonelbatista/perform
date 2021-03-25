import React, { useState, useEffect } from 'react';
import { ThemeProvider, jsx } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Floating from 'components/floating';
import ContactForm from 'sections/contact-form';

import Modal from 'react-modal';

import imgModal from '../assets/Marketing-Digital.png'

import {
  FaTimes
} from 'react-icons/fa';
import CallToAction from 'sections/call-to-action';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    borderRadius: '0.8rem',
  }
};

export default function PoliticaDePrivacidadePage() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");

  function handleSaveModalForm(){
    if((celular === "")||(celular === "")) {
      return closeModal();
    }

    window.confirm(`Você digitou ${celular} e ${email}`);
    closeModal();
  }

  function openModal() {
    // const modal = sessionStorage.getItem('modal');
    // if(modal === null){
    //   sessionStorage.setItem('modal', true);
    // }
    // if(modal === 'false'){
    //   sessionStorage.setItem('modal', false);      
    //   setIsOpen(false);
    // }else{
    //   setIsOpen(true);
    //   sessionStorage.setItem('modal', true);
    // }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }

  function closeModalButton() {
    setIsOpen(false);
    sessionStorage.setItem('modal', false);
  }

  return (
    <div onMouseLeave={openModal}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          zIndex: '1000',
        }}>
          <div style={{
            width: '25rem',
          }}>
            <img src={imgModal} style={{
              width: 'inherit',
              height: '100%',
              objectFit: 'cover',
            }} />
          </div>
          <div style={{
            width: '25rem',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.8rem 1.8rem',
            }}>
              <h2>Faça seu plano de voo <strong>GRATUITO!</strong></h2>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#CCC',
                borderWidth: 0,
                width: '2.6rem',
                height: '2.6rem',
                borderRadius: '50%',
              }} onClick={closeModalButton}>
                <FaTimes color="#000" size={16} />
              </button>
            </div>
            <div style={{
              padding: '0.8rem 1.8rem',
            }}>
              <p>Cadastra-se gratuitamente para receber uma CONSULTORIA da sua empresa e conduza seu negocio para outras PLANETAS!</p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <label style={{
                  fontWeight: 'bolder',
                  color: '#000'
                }} htmlFor="phone">Celular</label>
                <input style={{
                  width: '100%',
                  height: 'auto',
                  padding: '0.8rem',
                  borderRadius: '0.8rem',
                  fontSize: 18,
                }} id="phone" value={celular} onChange={(e) => { setCelular(e.target.value) }} />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '0.4rem 0',
              }}>
                <label style={{
                  fontWeight: 'bolder',
                  color: '#000'
                }} htmlFor="email">E-mail</label>
                <input style={{
                  width: '100%',
                  height: 'auto',
                  padding: '0.8rem',
                  borderRadius: '0.8rem',
                  fontSize: 18,
                }} id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
              </div>
              <button style={{
                fontWeight: 'bolder',
                color: '#fff',
                backgroundColor: '#333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0.8rem 0',
                borderWidth: 0,
                width: '100%',
                height: '1.8rem',
                padding: '1.4rem',
                borderRadius: '1.8rem',
              }} onClick={handleSaveModalForm}>Eu quero receber</button>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTop: '2px Solid #CCC',
              padding: '1.4rem',
            }}>
              Não enviamos span!
            </div>
          </div>
        </div>
      </Modal>
      <ThemeProvider theme={theme}>
        <StickyProvider>
          <Layout>
            <SEO title="Política de privacidade | Agência Perform | Impulsionando resultados digitais" />            
            <CallToAction title="Política de privacidade"
                subtitle="" />
            <ContactForm location="Página Política de privacidade" />
          </Layout>
        </StickyProvider>
      </ThemeProvider>
      <Floating location="Página Política de privacidade" />
    </div>
  );
}
