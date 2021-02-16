import React from 'react';
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { Container, H2style, Formgroup, Inputgroup, Fotoinput, Fotopreview, Buttongroup, Button, Descricao, Interesses } from './styles';

function cadastroEmpresa() {
  return (
    <>
        <Container>
            <Navbar/>

            <Navbar/>

                <div className="content">

                    <H2style>Cadastro de Empresa</H2style>

                    <Formgroup>

                        <Inputgroup>
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroup-sizing-default">Nome Fantasia</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroup-sizing-default">Cidade</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroup-sizing-default">CNPJ</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div class="input-group mb-3">
                                <label class="input-group-text" for="inputGroupSelect01">Estado</label>
                                <select class="form-select" id="inputGroupSelect01">
                                    <option selected>Selecione</option>
                                    <option value="1">AC</option>
                                    <option value="2">AL</option>
                                    <option value="3">AP</option>
                                    <option value="3">AM</option>
                                    <option value="3">BA</option>
                                    <option value="3">CE</option>
                                    <option value="3">DF</option>
                                    <option value="3">ES</option>
                                    <option value="3">GO</option>
                                    <option value="3">MA</option>
                                    <option value="3">MT</option>
                                    <option value="3">MS</option>
                                    <option value="3">MG</option>
                                    <option value="3">PA</option>
                                    <option value="3">PB</option>
                                    <option value="3">PR</option>
                                    <option value="3">PE</option>
                                    <option value="3">PI</option>
                                    <option value="3">RJ</option>
                                    <option value="3">RN</option>
                                    <option value="3">RS</option>
                                    <option value="3">RO</option>
                                    <option value="3">RR</option>
                                    <option value="3">SC</option>
                                    <option value="3">SP</option>
                                    <option value="3">SE</option>
                                    <option value="3">TO</option>
                                </select>
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroup-sizing-default">Razão Social</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroup-sizing-default">Endereço</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroup-sizing-default">E-mail</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroup-sizing-default">Telefone</span>
                                <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>                        
                    
                    </Formgroup>

                    <Fotoinput>

                        <Fotopreview>

                            <img class="preview-img" />

                        </Fotopreview>

                        <input type="file"  id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                            
                    </Fotoinput>

                    {/* <i class="fas fa-plus fa-lg"></i> */}

                    <H2style>Interesses <button type="button" class="btn btn-info">+</button></H2style>
                    <Interesses>
                        <div class="input-group">
                            <textarea class="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </Interesses>

                    <H2style>Descrição</H2style>

                    <Descricao>
                        <div class="input-group">
                            <span class="input-group-text">Descrição</span>
                            <textarea class="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </Descricao>

                    <Buttongroup>

                        <Button>

                            <button type="button" class="btn btn-danger">Cancelar</button>
                            
                        </Button>

                        <Button>

                            <button type="button" class="btn btn-success">Continuar</button>

                        </Button>

                    </Buttongroup>

                </div>

            <Footer/>
        </Container>
    </>
  );
}

export default cadastroEmpresa;

