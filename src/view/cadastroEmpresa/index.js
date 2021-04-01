import React, { useState } from 'react';
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { Tablediv, Wrapper, H2style, Formgroup, Inputgroup, Fotoinput, Fotopreview, Buttongroup, Descricao, Interesses } from './styles';

import firebase from '../../config/firebase'
import 'firebase/auth';
import { PlusSquare } from '@styled-icons/boxicons-solid/PlusSquare';
import { useDispatch } from 'react-redux';

function CadastroEmpresa() {
    
    var aux = '';
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [emailEmpresa, setEmailEmpresa] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [descricao, setDescricao] = useState('');
    const [interesses, setInteresses] = useState([]);
    const dispatch = useDispatch();

    const db = firebase.firestore();

    function adicionarInteresses() {
        
        setInteresses([...interesses, aux]);
    }

    function excluirInteresses(index) {

        const list =[...interesses];

        list.splice(index, 1);

        setInteresses(list);
    }

    function novaEmpresa() {

        if(!emailEmpresa || !senha || emailEmpresa === '' || senha === ''){
            
            alert('E-mail e Senha são obrigatórios.');
            return;
        }        

        firebase.auth()
        .createUserWithEmailAndPassword(emailEmpresa,senha)
        .then( () => {
            
            db.collection("empresas").doc(emailEmpresa).set({

                email: emailEmpresa,
                telefone: telefone,
                estado: estado,
                cidade: cidade,
                cnpj: cnpj,
                razaoSocial: razaoSocial,
                endereco: endereco,
                descricao: descricao,
                nomeFantasia: nomeFantasia,
                interesses: interesses,
                senha: senha

            }).then( () => {
                
                //Armazena os dados no redux
                dispatch({
                    type:'LOG_IN',
                    payload: {

                        emailEmpresa: emailEmpresa,
                        empresaTelefone: telefone,
                        empresaEstado: estado,
                        empresaCidade: cidade,
                        cnpj: cnpj,
                        razaoSocial: razaoSocial,
                        empresaEndereco: endereco,
                        empresaDescricao: descricao,
                        nomeFantasia: nomeFantasia,
                        interesses: interesses,
                        empresaSenha: senha

                    }
                });

                //Redirect não funcionando
                //<Redirect exact to="/cadastroCurriculo" />
                window.location.href = "http://localhost:3000/perfilEmpresa";
            }).catch(() => {

                alert("Erro no cadastro, tente novamente!");
            })

        }).catch(erro => {
            switch(erro.message){
                case 'Password should be at least 6 characters':
                    
                    alert('Senha deve possuir pelo menos 6 caracteres');  
                    break;
                case 'The email address is already in use by another account.':
                     
                    alert('Este e-mail já está sendo utilizado');
                    break; 
                case 'The email address is badly formatted.':
                    
                    alert('Formato de e-mail errado');
                    break;
                default:
                    
                    alert('Não foi possível cadastrar');
                    break;
            }
        });
    }
    
    return (
        <>
            <Navbar/>
                <Wrapper>

                    <H2style>Cadastro de Empresa</H2style>

                    <Formgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Nome Fantasia</span>
                                <input type="text" className="form-control" onChange={e => setNomeFantasia(e.target.value)} />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Cidade</span>
                                <input type="text" className="form-control" onChange={e => setCidade(e.target.value)} />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">CNPJ</span>
                                <input type="text" className="form-control" onChange={e => setCnpj(e.target.value)} />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Estado</label>
                                <select onChange={e => setEstado(e.target.value)} className="form-select" defaultValue={'Selecione'} id="inputGroupSelect01">
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
                                <input type="text" className="form-control" onChange={e => setRazaoSocial(e.target.value)} />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Endereço</span>
                                <input type="text" className="form-control" onChange={e => setEndereco(e.target.value)} />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">E-mail</span>
                                <input type="text" className="form-control" onChange={e => setEmailEmpresa(e.target.value)} />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Telefone</span>
                                <input type="email" className="form-control" onChange={e => setTelefone(e.target.value)} />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Senha</span>
                                <input type="password" className="form-control" onChange={e => setSenha(e.target.value)} />
                            </div>
                        </Inputgroup>                         
                    
                    </Formgroup>

                    <Fotoinput>

                        <Fotopreview>

                            <img className="preview-img" alt="Logo da Empresa"/>

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
                                            <button type="button" id="adicionaInteresses" className="btn btn-secondary" data-toggle="modal" data-target="#modalInteresses">
                                                <PlusSquare size="24" />
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody id="corpoTabela">
                                    {interesses.map((inte, index) => {
                                        return(<tr key={index}>
                                        <td className="col-md-1">{inte}</td>
                                        <td><button onClick={() => excluirInteresses(index)} type="button" className="btn btn-outline-danger">Deletar</button></td>
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
                            <textarea onChange={e => setDescricao(e.target.value)} className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </Descricao>

                    <Buttongroup>

                        <button type="button" className="btn btn-danger">Cancelar</button>

                        <button type="button" className="btn btn-success" onClick={novaEmpresa}>Continuar</button>

                    </Buttongroup>

                    {/* Modal Interesses */}
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
                    </div>

                </Wrapper>

            <Footer/>
        </>
  );
}

export default CadastroEmpresa;

