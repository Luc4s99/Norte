import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Formgroup, H2style, Inputgroup, Descricao, Fotoinput, Fotopreview, Buttongroup, Button, Wrapper } from './styles';
import firebase from '../../config/firebase';
import 'firebase/auth';
import {useSelector, useDispatch} from 'react-redux';

function PerfilPessoa() {

    const usuarioNome = useSelector(state => state.user.usuarioNome)
    const usuarioEmail = useSelector(state => state.user.usuarioEmail)
    const usuarioCidade = useSelector(state => state.user.usuarioCidade)
    const usuarioCpf = useSelector(state => state.user.usuarioCpf)
    const usuarioEndereco = useSelector(state => state.user.usuarioEndereco)
    const usuarioEstado = useSelector(state => state.user.usuarioEstado)
    const usuarioNascimento = useSelector(state => state.user.usuarioNascimento)
    const usuarioTelefone = useSelector(state => state.user.usuarioTelefone)
    const usuarioDescricao = useSelector(state => state.user.usuarioDescricao)

    console.log(usuarioEndereco)

    const db = firebase.firestore();

    return(
        <>
            <Navbar/>

            <Wrapper>

                <H2style>Meu Perfil</H2style>

                <Formgroup>

                    <Inputgroup>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroup-sizing-default">Nome</span>
                            <input value={usuarioNome} readOnly type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </Inputgroup>

                    <Inputgroup>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroup-sizing-default">Cidade</span>
                            <input value={usuarioCidade} readOnly type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </Inputgroup>

                    <Inputgroup>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroup-sizing-default">CPF</span>
                            <input value={usuarioCpf} readOnly type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </Inputgroup>

                    <Inputgroup>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroup-sizing-default">Telefone</span>
                            <input value={usuarioTelefone} readOnly type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                    </Inputgroup>

                    <Inputgroup>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroup-sizing-default">Idade</span>
                            <input value={usuarioNascimento} readOnly type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </Inputgroup>

                    <Inputgroup>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroup-sizing-default">Endereço</span>
                            <input value={usuarioEndereco} readOnly type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </Inputgroup>

                    <Inputgroup>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroup-sizing-default">E-mail</span>
                            <input value={usuarioEmail} readOnly type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </Inputgroup>

                    <Inputgroup>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Estado</label>
                            <select className="form-select" id="inputGroupSelect01" defaultValue={usuarioEstado}>
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
                
                </Formgroup>

                <Fotoinput>

                    <Fotopreview>

                        <img className="preview-img" />
                        Aqui vai o preview da foto

                    </Fotopreview>
                        
                </Fotoinput>

                <H2style>Descrição</H2style>

                <Descricao>
                    <div className="input-group">
                        <span className="input-group-text">Descrição</span>
                        <textarea value={usuarioDescricao} readOnly className="form-control" aria-label="With textarea"></textarea>
                    </div>
                </Descricao>

                <Buttongroup>

                    <Button>

                        <button type="button" className="btn btn-primary">Editar Perfil</button>
                        
                    </Button>

                    <Button>

                        <button type="button" className="btn btn-success">Ver Currículo</button>

                    </Button>

                </Buttongroup>

            </Wrapper>

            <Footer/>
        </>
    );
}

export default PerfilPessoa;