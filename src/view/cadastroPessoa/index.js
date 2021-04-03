import React, { useState } from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import { Formgroup, H2style, Inputgroup, Descricao, Fotoinput, Fotopreview, Buttongroup, Wrapper } from './styles';

import firebase from '../../config/firebase';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';

function CadastroPessoa() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState(new Date());
    const [endereco, setEndereco] = useState('');
    const [estado, setEstado] = useState('');
    const [descricao, setDescricao] = useState('');
    const [foto, setFoto] = useState();

    const dispatch = useDispatch();
    const db = firebase.firestore();
    const storage = firebase.storage();

    function novoUsuario(){

        if(!email || !senha || email === '' || senha === ''){
            
            alert('E-mail e Senha são obrigatórios.');
            return;
        }        

        firebase.auth()
        .createUserWithEmailAndPassword(email,senha)
        .then( () => {
            
            db.collection("usuarios").doc(email).set({

                email: email,
                telefone: telefone,
                estado: estado,
                nascimento: new Date(nascimento),
                cidade: cidade,
                cpf: cpf,
                nome: nome,
                endereco: endereco,
                descricao: descricao,
                foto: foto.name + email

            }).then( () => {

                storage.ref(`imagens/${foto.name+email}`)
                       .put(foto)
                       .then(()=>{

                        firebase.auth()
                                .signInWithEmailAndPassword(email, senha) //Verifica o login do usuario
                                .then(                    
                                    //Buscar restante dos dados do usuario
                                    db.collection('usuarios').doc(email).get().then(
                                        
                                        (doc) => {
                                            
                                            if (doc.exists) {
                                                

                                                //Monta os dados do usuario de acordo com o que esta no firebase
                                                setTimeout( () => {
                                                    dispatch({
                                                        type:'LOG_IN',
                                                        payload: {
                                                            usuarioEmail: email,
                                                            usuarioNome: doc.data().nome,
                                                            usuarioCidade: doc.data().cidade,
                                                            usuarioCpf: doc.data().cpf,
                                                            usuarioEndereco: doc.data().endereco,
                                                            usuarioEstado: doc.data().estado,
                                                            usuarioTelefone: doc.data().telefone,
                                                            usuarioNascimento: doc.data().nascimento,
                                                            usuarioDescricao: doc.data().descricao,
                                                            usuarioFoto: doc.data().foto
                                                        }
                                                    });
                                                    window.location.href = "./perfilPessoa";
                                                }, 1500);
                                    
                                            } else {
                                                console.log("Documento não encontrado");
                                            }
                                        }
                                    ).catch((error) => {
                                        console.log("Erro com o documento: ", error);
                                    })                        
                                )
                                .catch(
                                    (error) => {
                                        console.log("Deu ruim no login usuario");
                                    }
                                );

                       }).catch(()=>{
                           console.log("Erro ao cadastrar foto no DB");
                       })
                //Redirect não funcionando
                // <Redirect exact to="/cadastroCurriculo" />
                // window.location.href = "http://localhost:3000/cadastroCurriculo";
                
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
                    <H2style>Cadastro de Pessoa</H2style>

                    <Formgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Nome</span>
                                <input type="text" className="form-control" onChange={e => setNome(e.target.value)} aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Cidade</span>
                                <input type="text" className="form-control" onChange={e => setCidade(e.target.value)} aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">CPF</span>
                                <input type="text" className="form-control" onChange={e => setCpf(e.target.value)} aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Telefone</span>
                                <input type="text" className="form-control" onChange={e => setTelefone(e.target.value)} aria-describedby="inputGroup-sizing-default"/>
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Nascimento</span>
                                <input type="date" className="form-control" onChange={e => setNascimento(e.target.value)} aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Endereço</span>
                                <input type="text" className="form-control" onChange={e => setEndereco(e.target.value)} aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">E-mail</span>
                                <input type="email" className="form-control"  aria-describedby="inputGroup-sizing-default" onChange={e => setEmail(e.target.value)} />
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
                                <span className="input-group-text" id="inputGroup-sizing-default">Senha</span>
                                <input type="password" className="form-control" aria-describedby="inputGroup-sizing-default" onChange={e => setSenha(e.target.value)} />
                            </div>
                        </Inputgroup>
                    
                    </Formgroup>

                    <Fotoinput>

                        <Fotopreview>

                            <label> Foto de Perfil: </label>
 
                        </Fotopreview>

                        <input type="file"  id="inputGroupFile04" className="form-control" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={(e) => setFoto(e.target.files[0])}/>
                            
                    </Fotoinput>

                    <H2style>Descrição</H2style>

                    <Descricao>
                        <div className="input-group">
                            <span className="input-group-text">Descrição</span>
                            <textarea onChange={e => setDescricao(e.target.value)} className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </Descricao>

                    

                    <Buttongroup>

                        <Link to="/"><button type="button" className="btn btn-danger">Cancelar</button></Link>

                        <button type="button" className="btn btn-success" onClick={novoUsuario}>Continuar</button>

                    </Buttongroup>
                    
                </Wrapper>
            <Footer/>
            
        </>
    );
}

export default CadastroPessoa;