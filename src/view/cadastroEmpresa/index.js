import React from 'react';
import Footer from '../../components/footer'
import { Container, Dados, Opcoes } from './styles';

function cadastroEmpresa() {
  return (
    <>
        <Container>
            <Dados className="input-group mb-3">
                
                <span className="input-group-text">CNPJ</span>
                <input type="text" className="form-control" placeholder="CNPJ"></input>
            
            </Dados>
            <Opcoes>

            </Opcoes>
            <Footer/>
        </Container>
    </>
  );
}

export default cadastroEmpresa;