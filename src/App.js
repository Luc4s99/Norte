import GlobalStyles from "./styles/GlobalStyles";
import Cadastro from "./view/cadastro";
import CadastroEmpresa from "./view/cadastroEmpresa"
import CadastroPessoa from "./view/cadastroPessoa";
import Login from "./view/login"
import PerfilPessoa from "./view/perfilPessoa";


function App() {
  return (
    <>
      {/* <PerfilPessoa /> */}
      {/* <CadastroPessoa/> */}
      {/* <Cadastro /> */}
      <CadastroEmpresa />
      {/*<Login />*/}
      <GlobalStyles />
    </>
  );
}

export default App;
