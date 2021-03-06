import React, {useState} from 'react';

import logo from '../../assets/images/logo.jpg'
import empresa from '../../assets/images/empresa.jpg'
import candidato from '../../assets/images/candidato.jpg'
import Footer from '../../components/footer'

import {Link, Redirect} from 'react-router-dom';
import{useSelector, useDispatch} from 'react-redux';

import { Container, Logo, Label, Opcao, Voltar, Imagem, Botao } from './styles';
import Navbar from '../../components/navbar';

function cadastro() {
  return (
    <> 
       
      <Navbar/>
      <Container>
          <Logo>
            <img src={logo} alt="Norte"></img>
          </Logo>
          <Label> Quem deseja se cadastrar? </Label>
          <Opcao>
            <Imagem>
              <img src={candidato} alt="candidato" />
              <img src={empresa} alt="empresa" />            
            </Imagem>
            <Botao>
              <button type="button" className="btn btn-lg">Um Candidato</button>
              <button type="button" className="btn btn-lg">Uma Empresa</button>
            </Botao>          
          </Opcao>
          <Voltar> <button type="button" className="btn btn-lg my-5">Voltar</button> </Voltar>        
          <Footer/>
      </Container>
    </>
  );
}

export default cadastro;