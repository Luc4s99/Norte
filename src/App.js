import {BrowserRouter, Route} from 'react-router-dom';

import GlobalStyles from "./styles/GlobalStyles";
import Cadastro from "./view/cadastro";
import CadastroEmpresa from "./view/cadastroEmpresa"
import CadastroPessoa from "./view/cadastroPessoa";
import Login from "./view/login"
import PerfilPessoa from "./view/perfilPessoa";
import CadastroCurriculo from "./view/cadastroCurriculo";
import Home from './view/home';
import PerfilEmpresa from './view/perfilEmpresa';
import PerfilCurriculo from './view/perfilCurriculo';


function App() {

  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/cadastroEmpresa" component={CadastroEmpresa} />
        <Route exact path="/cadastroPessoa" component={CadastroPessoa} />
        <Route exact path="/cadastroCurriculo" component={CadastroCurriculo} />
        <Route exact path="/perfilPessoa" component={PerfilPessoa} />
        <Route exact path="/perfilEmpresa" component={PerfilEmpresa} />
        <Route exact path="/perfilCurriculo" component={PerfilCurriculo} />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
