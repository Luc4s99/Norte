import React, {useState} from 'react';
import Footer from '../../components/footer';
import { Wrapper, Links, Box } from './styles.js';
import logo from '../../assets/images/logo.jpg';

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
                            <label htmlFor="inputEmail" className="form-label"><h4>Usuário</h4></label>
                            <input placeholder="Digite seu usuário..." type="email" className="form-control" id="inputEmail" onChange={e => setUser(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="form-label"><h4>Senha</h4></label>
                            <input placeholder="Digite sua senha..." type="password" className="form-control" id="inputPassword" onChange={e => setPassword(e.target.value)} />
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