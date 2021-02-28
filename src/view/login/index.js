import React from 'react';
import Footer from '../../components/footer';
import { Wrapper, Links, Box } from './styles.js'
import logo from '../../assets/images/logo.jpg'

function Login() {

    return(
        <>
            <Wrapper>
                <img src={logo} alt="Logo do site"></img>

                <h3>Login</h3>

                <Box>
                    <form>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label"><h4>Usuário</h4></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label"><h4>Senha</h4></label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                    </form>
                </Box>

                <Links>

                    <a href="#">Ainda não possui conta?</a>
                    <a href="#">Esqueceu sua senha?</a>

                </Links>

            </Wrapper>

            <Footer/>
        </>
    );
}

export default Login;