import {BrowserRouter, Route} from 'react-router-dom';

import GlobalStyles from "./styles/GlobalStyles";
import Cadastro from "./view/cadastro";
import CadastroEmpresa from "./view/cadastroEmpresa"
import CadastroPessoa from "./view/cadastroPessoa";
import Login from "./view/login"
import PerfilPessoa from "./view/perfilPessoa";
import CadastroCurriculo from "./view/cadastroCurriculo";
<<<<<<< HEAD
import UsuarioNovo from './view/usuario-novo';

=======
import { BrowserRouter, Route } from "react-router-dom";
>>>>>>> 908eec3985398e13f87a5d206272870427293c26

function App() {

  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
        <Route exact path="/login" component={Login} />
        <Route exact path="/novousuario" component={UsuarioNovo} />  
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/cadastroEmpresa" component={CadastroEmpresa} />
        <Route exact path="/cadastroPessoa" component={CadastroPessoa} />
        <Route exact path="/cadastroCurriculo" component={CadastroCurriculo} />
        <Route exact path="/perfilPessoa" component={PerfilPessoa} />
      </BrowserRouter>
      <GlobalStyles />
=======

        <Route exact path="/perfilPessoa" component={PerfilPessoa} />
        <Route exact path="/cadastroPessoa" component={CadastroPessoa} />
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/cadastroCurriculo" component={CadastroCurriculo} />
        <Route exact path="/cadastroEmpresa" component={CadastroEmpresa} />
        <Route exact path="/login" component={Login} />

        <GlobalStyles />
      </BrowserRouter>
>>>>>>> 908eec3985398e13f87a5d206272870427293c26
    </>
  );
}

export default App;
