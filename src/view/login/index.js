import React, {useState} from 'react';
import Footer from '../../components/footer';
import { Wrapper, Links, Box } from './styles.js';
import logo from '../../assets/images/logo.jpg';

import firebase from '../../config/firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();
    
    const db = firebase.firestore();

    const [tipoUsuario, setTipoUsuario] = useState('');

    function onChangeValue(event){
        setTipoUsuario(event.target.value);
    }


    function handleLogin() {        
        
        if (tipoUsuario === 'pessoa'){
            
            firebase.auth()
                .signInWithEmailAndPassword(email, senha) //Verifica o login do usuario
                .then(                    
                    //Buscar restante dos dados do usuario
                    db.collection('usuarios').doc(email).get().then(
                        
                        (doc) => {
                            
                            if (doc.exists) {
                                
                                setMsg('Sucesso');

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
                                            usuarioDescricao: doc.data().descricao
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
                        setMsg("Erro");
                    }
                );

        } else if (tipoUsuario === 'empresa') {

            firebase.auth()
                .signInWithEmailAndPassword(email, senha) //Verifica o login do usuario
                .then(
                    //Buscar restante dos dados do usuario
                    db.collection('empresas').doc(email).get().then(
                        
                        (doc) => {
                            if (doc.exists) {
                                
                                setMsg('Sucesso');

                                //Monta os dados do usuario de acordo com o que esta no firebase
                                setTimeout( () => {
                                    dispatch({
                                        type:'LOG_IN',
                                        payload: {
                                            usuarioEmail: email,
                                            nomeFantasia: doc.data().nomeFantasia,
                                            cnpj: doc.data().cnpj,
                                            razaoSocial: doc.data().razaoSocial,
                                            emailEmpresa: doc.data().email,
                                            empresaSenha: doc.data().senha,
                                            empresaCidade: doc.data().cidade,
                                            empresaEstado: doc.data().estado,
                                            empresaEndereco: doc.data().endereco,
                                            empresaTelefone: doc.data().telefone,
                                            interesses: doc.data().interesses,
                                            empresaDescricao: doc.data().descricao
                                        }
                                    });
                                    window.location.href = "./perfilEmpresa";
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
                        console.log("Deu ruim no login empresa");
                        setMsg("Erro");
                    }
                );

        } else setMsg("tipoUsuario");        
        
    }

    return(
        <>            
            <Wrapper>
                <img src={logo} alt="Logo do site"></img>

                <h3>Login</h3>

                <Box>
                    <form>

                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label"><h4>Usuário</h4></label>
                            <input placeholder="Digite seu usuário..." type="email" className="form-control" id="inputEmail" onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="form-label"><h4>Senha</h4></label>
                            <input placeholder="Digite sua senha..." type="password" className="form-control" id="inputPassword" onChange={e => setSenha(e.target.value)} />
                        </div>

                        <div onChange={onChangeValue}>
                            <label htmlFor="pessoa">Pessoa</label>
                            <input type="radio" id="pessoa" name="tipoUsuario" value="pessoa"></input>

                            <label htmlFor="empresa">Empresa</label>
                            <input type="radio" id="empresa" name="tipoUsuario" value="empresa"></input>
                        </div>

                        <button className="btn btn-primary" type="button" onClick={handleLogin}>Entrar</button>

                        <div className="opcoes-login text-white my-5">
                    
                            { msg === "Sucesso" && <strong>Login realizado com sucesso</strong> }
                            { msg === "Erro" && <strong>Verifique suas credenciais</strong> }
                            { msg === "tipoUsuario" && <strong>Selecione o tipo de usuario!</strong>}

                        </div>
                    </form>
                </Box>

                <Links>

                    <Link to="/cadastro">Ainda não possui conta?</Link>
                    <Link to="/">Esqueceu sua senha?</Link>

                </Links>

            </Wrapper>

            <Footer/>
        </>
    );
}

export default Login;