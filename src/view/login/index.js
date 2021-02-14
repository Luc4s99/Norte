import React from 'react';
import Footer from '../../components/footer';
import './styles.css';
import logo from '../../assets/images/logo.jpg'

function Login() {

    return(
        <>
            <div className="content">
                <img src={logo}></img>

                <p>Olá</p>
            </div>

            <Footer/>
        </>
    );
}

export default Login;