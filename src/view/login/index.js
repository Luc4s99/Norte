import React, {useState} from 'react';
import Footer from '../../components/footer';
import { Wrapper, Links, Box } from './styles.js';
import logo from '../../assets/images/logo.jpg';

import firebase from '../../config/firebase';
import 'firebase/auth';
import {Link, Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();

    const db = firebase.firestore();

    function handleLogin() {        
        
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
                                            usuarioDescricao: doc.data().descricao
                                        }
                                    });
                                }, 1500);
                                
                                setMsg('Sucesso');
                            } else {
                                console.log("Documento não encontrado");
                            }
                        }
                    ).catch((error) => {
                        console.log("Erro com o documento: ", error);
                    })
                )
                .catch(
                    erro => {
                        setMsg('Erro');
                    }
                )
        
    }

    return(
        <>
            {useSelector(state => state.user.usuarioLogado) === 1 ? <Redirect to="/perfilPessoa" /> : null}
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

                        <button className="btn btn-primary" type="button" onClick={handleLogin}>Entrar</button>

                        <div className="opcoes-login text-white my-5">
                    
                            { msg === "Sucesso" && <strong>Login realizado com sucesso</strong> }
                            <br/>
                            { msg === "Erro" && <strong>Verifique suas credenciais</strong> }

                        </div>
                    </form>
                </Box>

                <Links>

                    <Link to="/cadastro">Ainda não possui conta?</Link>
                    <a href="#">Esqueceu sua senha?</a>

                </Links>

            </Wrapper>

            <Footer/>
        </>
    );
}

export default Login;