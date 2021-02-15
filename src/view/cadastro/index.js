import React from 'react';
import logo from '../../assets/images/logo.jpg'
import Footer from '../../components/footer'

import { Container, Logo, Label, Opcao, Voltar } from './styles';

function cadastro() {
  return (
    <>
    <Container>
        <Logo>
          <img src={logo} alt="Norte"></img>
        </Logo>
        <Label> Quem deseja se cadastrar? </Label>
        <Opcao> 
          <button type="button" className="btn btn-lg">Um Candidato</button>
          <button type="button" className="btn btn-lg">Uma Empresa</button>
        </Opcao>
        <Voltar> <button type="button" className="btn btn-lg my-5">Voltar</button> </Voltar>        
        <Footer/>
    </Container>
    </>
  );
}

export default cadastro;