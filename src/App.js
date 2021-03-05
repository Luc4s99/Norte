import GlobalStyles from "./styles/GlobalStyles";
import Cadastro from "./view/cadastro";
import CadastroEmpresa from "./view/cadastroEmpresa"
import CadastroPessoa from "./view/cadastroPessoa";
import Login from "./view/login"
import PerfilPessoa from "./view/perfilPessoa";
import CadastroCurriculo from "./view/cadastroCurriculo";
import { BrowserRouter, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>

        <Route exact path="/perfilPessoa" component={PerfilPessoa} />
        <Route exact path="/cadastroPessoa" component={CadastroPessoa} />
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/cadastroCurriculo" component={CadastroCurriculo} />
        <Route exact path="/cadastroEmpresa" component={CadastroEmpresa} />
        <Route exact path="/login" component={Login} />

        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;
