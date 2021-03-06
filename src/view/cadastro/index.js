import React, {useState} from 'react';

import logo from '../../assets/images/logo.jpg'
import empresa from '../../assets/images/empresa.jpg'
import candidato from '../../assets/images/candidato.jpg'
import Footer from '../../components/footer'

<<<<<<< HEAD
import {Link, Redirect} from 'react-router-dom';
import{useSelector, useDispatch} from 'react-redux';

=======
import { Switch, Route, Link, Redirect} from 'react-router-dom';
>>>>>>> 908eec3985398e13f87a5d206272870427293c26
import { Container, Logo, Label, Opcao, Voltar, Imagem, Botao } from './styles';
import Navbar from '../../components/navbar';

import CadastroPessoa from '../cadastroPessoa';
import CadastroEmpresa from '../cadastroEmpresa';

function cadastro() {
  return (
<<<<<<< HEAD
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
=======
    <>
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
            <Link to="/cadastroPessoa" className="btn btn-lg">Um Candidato</Link>
            <Link to="/cadastroEmpresa" className="btn btn-lg">Uma Empresa</Link>
          </Botao>          
        </Opcao>
        <Voltar> <button type="button" className="btn btn-lg my-5">Voltar</button> </Voltar>        
        <Footer/>

      <Switch>
        <Route exact path="/cadastroPessoa">
          <CadastroPessoa />
        </Route>

        <Route exact path="/cadastroEmpresa" />
      </Switch>

    </Container>
>>>>>>> 908eec3985398e13f87a5d206272870427293c26
    </>
  );
}

export default cadastro;