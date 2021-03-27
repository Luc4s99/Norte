import React, { useState } from 'react';
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { Tablediv, Wrapper, H2style, Formgroup, Inputgroup, Fotoinput, Fotopreview, Buttongroup, Descricao, Interesses } from './styles';

import 'firebase/auth';
import { PlusSquare } from '@styled-icons/boxicons-solid/PlusSquare';
import { useSelector } from 'react-redux';

function CadastroEmpresa() {
    
    const nomeFantasia = useSelector(state => state.emp.nomeFantasia)
    const cnpj = useSelector(state => state.emp.cnpj)
    const razaoSocial = useSelector(state => state.emp.razaoSocial)
    const emailEmpresa = useSelector(state => state.emp.emailEmpresa)
    const empresaSenha = useSelector(state => state.emp.empresaSenha)
    const empresaCidade = useSelector(state => state.emp.empresaCidade)
    const empresaEstado = useSelector(state => state.emp.empresaEstado)
    const empresaEndereco = useSelector(state => state.emp.empresaEndereco)
    const empresaTelefone = useSelector(state => state.emp.empresaTelefone)
    const interesses = useSelector(state => state.emp.interesses)
    const empresaDescricao = useSelector(state => state.emp.empresaDescricao)

    function editarEmpresa() {

    }

    return (
        <>
            <Navbar/>
                <Wrapper>

                    <H2style>Perfil da Empresa</H2style>

                    <Formgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Nome Fantasia</span>
                                <input type="text" className="form-control" value={nomeFantasia} readOnly />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Cidade</span>
                                <input type="text" className="form-control" value={empresaCidade} readOnly />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">CNPJ</span>
                                <input type="text" className="form-control" value={cnpj} readOnly />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Estado</label>
                                <select readOnly className="form-select" defaultValue={empresaEstado} id="inputGroupSelect01">
                                    <option value="Selecione">Selecione</option>
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                </select>
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Razão Social</span>
                                <input type="text" className="form-control" value={razaoSocial} readOnly />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Endereço</span>
                                <input type="text" className="form-control" value={empresaEndereco} readOnly />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">E-mail</span>
                                <input type="text" className="form-control" value={emailEmpresa} readOnly />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Telefone</span>
                                <input type="email" className="form-control" value={empresaTelefone} readOnly />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Senha</span>
                                <input type="password" className="form-control" value={empresaSenha} readOnly />
                            </div>
                        </Inputgroup>                         
                    
                    </Formgroup>

                    <Fotoinput>

                        <Fotopreview>

                            <img className="preview-img" />

                        </Fotopreview>

                        <input type="file"  id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                            
                    </Fotoinput>

                    {/* <i className="fas fa-plus fa-lg"></i> */}

                    <H2style>Interesses</H2style>
                    <Interesses>
                        <Tablediv>
                            <table className="table table-dark table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Interesses</th>
                                        <th scope="col">
                                            <button disabled="true" type="button" id="adicionaInteresses" className="btn btn-secondary" data-toggle="modal" data-target="#modalInteresses">
                                                <PlusSquare size="24" />
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody id="corpoTabela">
                                    {interesses.map((inte) => {
                                        return(<tr>
                                        <td className="col-md-1" scope="row">{inte}</td>
                                        <td><button disabled="true" type="button" className="btn btn-outline-danger">Deletar</button></td>
                                        </tr>)    
                                    })}
                                </tbody>
                            </table>
                        </Tablediv>
                    </Interesses>

                    <H2style>Descrição</H2style>

                    <Descricao>
                        <div className="input-group">
                            <span className="input-group-text">Descrição</span>
                            <textarea value={empresaDescricao} readOnly className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </Descricao>

                    <Buttongroup>

                        <button type="button" className="btn btn-danger">Cancelar</button>

                        <button type="button" className="btn btn-success" onClick={editarEmpresa}>Editar</button>

                    </Buttongroup>

                    {/* Modal Interesses 
                    <div className="modal fade" id="modalInteresses" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5 className="modal-title">Interesses</h5>
                                </div>

                                <div className="modal-body">
                                    <input type="text" className="form-control" onBlur={e => aux = e.target.value} />
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => aux = ''}>Fechar</button>
                                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => adicionarInteresses()}>Adicionar</button>
                                </div>

                            </div>
                        </div>
                    </div>*/}

                </Wrapper>

            <Footer/>
        </>
  );
}

export default CadastroEmpresa;

