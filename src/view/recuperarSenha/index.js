import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';

import firebase from '../../config/firebase';
import 'firebase/auth';

import {Form} from './styles';

function RecuperarSenha(){

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function handleRecuperaSenha(){

        firebase.auth().sendPasswordResetEmail(email)
            .then(result => setMsg('Enviamos um link no seu e-mail para redefinição de senha.'))
            .catch(erro => setMsg('Verifique se o e-mail é válido.'));

    }

   return (
       <>
         <NavBar/>

         <Form className="text-center form-signin mx-auto mt-5" >
             <h3 className="mb-5 font-weight-bold">Recuperar senha</h3>

             <div className="my-4 text-center">
                 <span>{msg}</span>
             </div>


             <input type="email" 
                    className="form-control my-2" 
                    placeholder="E-mail"
                    onChange={(e)=> setEmail(e.target.value)}/>



             <button className="btn btn-lg btn-block btn-primary" 
                     type="button"
                     onClick={handleRecuperaSenha}>
                         Recuperar Senha</button>
            <Link to="/" type="button" className="btn btn-success btn-block"> Voltar </Link>
         </Form>
        <Footer />
       </>
   )

}


export default RecuperarSenha;