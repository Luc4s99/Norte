import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import { Formgroup, H2style, Inputgroup, Descricao, Fotoinput, Fotopreview, Buttongroup, Wrapper } from './styles';

function cadastroPessoa() {

    return (
        <>
            <Navbar/>
                <Wrapper>
                    <H2style>Cadastro de Pessoa</H2style>

                    <Formgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Nome</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Cidade</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">CPF</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Telefone</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Idade</span>
                                <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Endereço</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">E-mail</span>
                                <input type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group mb-3">
                                <label className="input-group-text" for="inputGroupSelect01">Estado</label>
                                <select className="form-select" id="inputGroupSelect01">
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
                    
                    </Formgroup>

                    <Fotoinput>

                        <Fotopreview>

                            <img className="preview-img" />

                        </Fotopreview>

                        <input type="file"  id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                            
                    </Fotoinput>

                    <H2style>Descrição</H2style>

                    <Descricao>
                        <div className="input-group">
                            <span className="input-group-text">Descrição</span>
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </Descricao>

                    

                    <Buttongroup>

                        <button type="button" className="btn btn-danger">Cancelar</button>

                        <button type="button" className="btn btn-success">Continuar</button>

                    </Buttongroup>
                    
                </Wrapper>
            <Footer/>
            
        </>
    );
}

export default cadastroPessoa;