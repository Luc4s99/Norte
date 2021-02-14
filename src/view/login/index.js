import React from 'react';
import Footer from '../../components/footer';
import './styles.css';
import logo from '../../assets/images/logo.jpg'
import { Link } from 'react-router-dom';

function Login() {

    return(
        <>
            <div className="content">
                <img src={logo} alt="Logo do site"></img>

                <form>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><h3>Usuário</h3></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"><h3>Senha</h3></label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                </form>

                <div className="links">

                    <a href="#">Ainda não possui conta?</a>
                    <br/>
                    <br/>
                    <a href="#">Esqueceu sua senha?</a>

                </div>

            </div>

            <Footer/>
        </>
    );
}

export default Login;