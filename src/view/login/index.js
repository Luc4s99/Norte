import React, {useState} from 'react';
import Footer from '../../components/footer';
import { Wrapper, Links, Box } from './styles.js';
import logo from '../../assets/images/logo.jpg';
<<<<<<< HEAD

import firebase from '../../config/firebase';
import 'firebase/auth';
import {Link, Redirect} from 'react-router-dom';
import{useSelector, useDispatch} from 'react-redux';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();

    function handleLogin(){

        firebase.auth()
                .signInWithEmailAndPassword(email, senha)
                .then(
                    resultado => {
                        setMsg('Sucesso');
                       
                        setTimeout( ()=> {
                            dispatch({
                                type:'LOG_IN',
                                payload: {usuarioEmail: email}
                            });
                        }, 2000);
                        
                        //console.log(JSON.stringify(resultado));
                    }
                )
                .catch(
                    erro => {
                        setMsg('Erro');
                        //console.log(JSON.stringify(erro));
                    }
                )
=======
import firebase from '../../config/firebase';
import 'firebase/auth';
import { Redirect, Link } from 'react-router-dom';
import Cadastro from "../cadastro";



function Login() {

    const[user, setUser] = useState('');
    const[password, setPassword] = useState('');
    const[logged, setLogged] = useState(false);

    //Ainda verificar essa função
    function handleLogin() {
        
        //Função não está funcionando corretamente
        firebase.auth().signInWithEmailAndPassword(user, password).then(
            () => {
                alert("sucesso")
                //<Redirect to="/cadastro" />
            }
        ).catch((error) => {
            alert(error.code);
        })
>>>>>>> 908eec3985398e13f87a5d206272870427293c26
    }

    return(
        <>
            {useSelector(state => state.user.usuarioLogado) === 1 ? <Redirect to="/cadastro" /> : null}
            <Wrapper>
                <img src={logo} alt="Logo do site"></img>

                <h3>Login</h3>

                <Box>
                    <form>

                        <div className="mb-3">
<<<<<<< HEAD
                            <label for="exampleInputEmail1" className="form-label"><h4>Usuário</h4></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label"><h4>Senha</h4></label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setSenha(e.target.value)}/>
                        </div>

                        <button className="btn btn-lg btn-login btn-block" type="button"
                            onClick={handleLogin}>
                            Logar
                        </button>

                        <div className="opcoes-login text-white my-5">
                    
                            { msg === "Sucesso" &&
                            <span>
                                WOW! <strong> Você está conectado! &#128526;</strong>
                            </span>
                            }
                            <br/>
                            {
                                msg === "Erro" &&                    
                            <span>
                                Ops! <strong> Verifique se a senha ou o usuário estão corretos! &#128549;</strong>
                            </span>
                            }

=======
                            <label htmlFor="inputEmail" className="form-label"><h4>Usuário</h4></label>
                            <input placeholder="Digite seu usuário..." type="email" className="form-control" id="inputEmail" onChange={e => setUser(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="form-label"><h4>Senha</h4></label>
                            <input placeholder="Digite sua senha..." type="password" className="form-control" id="inputPassword" onChange={e => setPassword(e.target.value)} />
>>>>>>> 908eec3985398e13f87a5d206272870427293c26
                        </div>

                        <button className="btn btn-primary" onClick={handleLogin}>Entrar</button>

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