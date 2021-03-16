import React, {useState} from 'react';

import logo from '../../assets/images/logo.jpg'
import empresa from '../../assets/images/empresa.jpg'
import candidato from '../../assets/images/candidato.jpg'
import Footer from '../../components/footer'

import {Link, Redirect, Route, Switch} from 'react-router-dom';
import{useSelector, useDispatch} from 'react-redux';

import { Container, Logo, Label, Opcao, Voltar, Imagem, Botao } from './styles';
import Navbar from '../../components/navbar';

import CadastroPessoa from '../cadastroPessoa';
import CadastroEmpresa from '../cadastroEmpresa';

function cadastro() {
  return (
    <>
    <Navbar />
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
        <Voltar><Link to='/'><button type="button" className="btn btn-lg my-5">Voltar</button></Link></Voltar>        
        <Footer/>

      <Switch>
        <Route exact path="/cadastroPessoa" />

        <Route exact path="/cadastroEmpresa" />
      </Switch>

    </Container>
    </>
  );
}

export default cadastro;