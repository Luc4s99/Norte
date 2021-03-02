import GlobalStyles from "./styles/GlobalStyles";
import Cadastro from "./view/cadastro";
import CadastroEmpresa from "./view/cadastroEmpresa"
import CadastroPessoa from "./view/cadastroPessoa";
import Login from "./view/login"
import PerfilPessoa from "./view/perfilPessoa";
import CadastroCurriculo from "./view/cadastroCurriculo";


function App() {
  return (
    <>
      {/* <PerfilPessoa /> */}
      {/* <CadastroPessoa/> */}
      {/* <Cadastro /> */}
      <CadastroCurriculo />
      {/* <CadastroEmpresa /> */}
      {/* <Login /> */}
      <GlobalStyles />
    </>
  );
}

export default App;
