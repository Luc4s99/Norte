import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { Tablediv, Wrapper, H2style, Formgroup, Inputgroup, Fotoinput, Fotopreview, Buttongroup, Descricao, Interesses } from './styles';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CadastroEmpresa() {

    const emailEmpresa = useSelector(state => state.emp.emailEmpresa)
    // const nomeFantasia = useSelector(state => state.emp.nomeFantasia)
    // const cnpj = useSelector(state => state.emp.cnpj)
    // const razaoSocial = useSelector(state => state.emp.razaoSocial)
    // const empresaCidade = useSelector(state => state.emp.empresaCidade)
    // const empresaEstado = useSelector(state => state.emp.empresaEstado)
    // const empresaEndereco = useSelector(state => state.emp.empresaEndereco)
    // const empresaTelefone = useSelector(state => state.emp.empresaTelefone)
    // const interesses = useSelector(state => state.emp.interesses)
    // const empresaDescricao = useSelector(state => state.emp.empresaDescricao)

    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [empresaCidade, setEmpresaCidade] = useState('');
    const [empresaEstado, setEmpresaEstado] = useState('');
    const [empresaEndereco, setEmpresaEndereco] = useState('');
    const [empresaTelefone, setEmpresaTelefone] = useState('');
    const [interesses, setInteresses] = useState([]);
    const [empresaDescricao, setEmpresaDescricao] = useState('');
    
    const db = firebase.firestore();

    const [alterou, setAlterou] = useState(false);
    const [placeholderNomeFantasia, setPlaceholderNomeFantasia] = useState('');
    const [placeholderCnpj, setPlaceholderCnpj] = useState('');
    const [placeholderRazaoSocial, setPlaceholderRazaoSocial] = useState('');
    const [placeholderEmpresaCidade, setPlaceholderEmpresaCidade] = useState('');
    const [placeholderEmpresaEstado, setPlaceholderEmpresaEstado] = useState('');
    const [placeholderEmpresaEndereco, setPlaceholderEmpresaEndereco] = useState('');
    const [placeholderEmpresaTelefone, setPlaceholderEmpresaTelefone] = useState('');
    const [placeholderInteresses, setPlaceholderInteresses] = useState('');
    const [placeholderDescricao, setPlaceholderDescricao] = useState('');
        
    useEffect(()=>{        
        if(emailEmpresa === null){
            window.location.href = "http://localhost:3000/login";
        } else {
            
            db.collection("empresas").doc(emailEmpresa).get().then((doc)=>{
                
                setEmpresaCidade(doc.data().cidade);
                setCnpj(doc.data().cnpj);
                setRazaoSocial(doc.data().razaoSocial);
                setNomeFantasia(doc.data().nomeFantasia);
                setEmpresaEstado(doc.data().estado);
                setEmpresaEndereco(doc.data().endereco);
                setEmpresaTelefone(doc.data().telefone);                
                setEmpresaDescricao(doc.data().descricao);
                setInteresses([...interesses, doc.data().interesses])

                setAlterou(!alterou);


            }).catch((error)=>{
                console.log("Erro ao tentar recuperar informações da empresa:",error);
            });
            
        }
    },[]) 

    useEffect(()=>{

        setPlaceholderNomeFantasia(nomeFantasia);
        setPlaceholderCnpj(cnpj);
        setPlaceholderRazaoSocial(razaoSocial);
        setPlaceholderEmpresaCidade(empresaCidade);
        setPlaceholderEmpresaEstado(empresaEstado);
        setPlaceholderEmpresaEndereco(empresaEndereco);
        setPlaceholderEmpresaTelefone(empresaTelefone);
        setPlaceholderInteresses(...interesses);
        setPlaceholderDescricao(empresaDescricao);
        
        console.log(nomeFantasia, cnpj, razaoSocial, empresaCidade, empresaEstado, empresaEndereco, empresaTelefone, interesses, empresaDescricao)
    },[alterou])

    function handleChangeNomeFantasia(event){
        setPlaceholderNomeFantasia(event.target.value);
    }

    function handleChangeRazaoSocial(event){
        setPlaceholderRazaoSocial(event.target.value);
    }

    function handleChangeCnpj(event){
        setPlaceholderCnpj(event.target.value);
    }

    function handleChangeEmpresaEstado(event){
        setPlaceholderEmpresaEstado(event.target.value);
    }

    function handleChangeCidade(event){
        setPlaceholderEmpresaCidade(event.target.value);
    }

    function handleChangeEndereco(event){
        setPlaceholderEmpresaEndereco(event.target.value);
    }

    function handleChangeTelefone(event){
        setPlaceholderEmpresaTelefone(event.target.value);
    }

    function handleChangeDescricao(event){
        setPlaceholderDescricao(event.target.value);
    }

    // function handleChangeNomeFantasia(event){
    //     setPlaceholderNomeFantasia(event.target.value);
    // }
    
    function salvarAlteracoes(){
        
        db.collection("empresas").doc(emailEmpresa).get().then((doc)=>{

            setEmpresaCidade(doc.data().cidade);
            setCnpj(doc.data().cnpj);
            setRazaoSocial(doc.data().razaoSocial);
            setNomeFantasia(doc.data().nomeFantasia);
            setEmpresaEstado(doc.data().estado);
            setEmpresaEndereco(doc.data().endereco);
            setEmpresaTelefone(doc.data().telefone);                
            setEmpresaDescricao(doc.data().descricao);
            setInteresses([...interesses, doc.data().interesses])

            setAlterou(!alterou);

        }).catch(()=>{
            console.log("Erro na edição, tente novamente!");
        });

        db.collection("empresas").doc(emailEmpresa).set({

            email: emailEmpresa,
            cidade: placeholderEmpresaCidade,
            cnpj: placeholderCnpj,
            descricao: placeholderDescricao,
            endereco: placeholderEmpresaEndereco,
            estado: placeholderEmpresaEstado,
            interesses: placeholderInteresses,
            nomeFantasia: placeholderNomeFantasia,
            razaoSocial: placeholderRazaoSocial,
            telefone: placeholderEmpresaTelefone            

        }).then( () => {

            alert("Dados alterados com sucesso!");
            
        }).catch(() => {
    
            alert("Erro na edição, tente novamente!");
        })
    }

    return (
        <>
            <Navbar/>
                <Wrapper>

                    <H2style>Perfil da Empresa</H2style>

                    <Formgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Nome Fantasia</span>
                                <input type="text" className="form-control" value={nomeFantasia} readOnly />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Cidade</span>
                                <input type="text" className="form-control" value={empresaCidade} readOnly />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">CNPJ</span>
                                <input type="text" className="form-control" value={cnpj} readOnly />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Estado</label>
                                <select disabled className="form-select" value={empresaEstado} id="inputGroupSelect01"
                                style={{
                                    width:"25%", height:"calc(1.5em + .75rem + 2px)", border:"1px solid #ced4da",
                                    padding:".375rem .75rem", background:"#e9ecef"
                                }} >
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                </select>
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Razão Social</span>
                                <input type="text" className="form-control" value={razaoSocial} readOnly />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Endereço</span>
                                <input type="text" className="form-control" value={empresaEndereco} readOnly />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">E-mail</span>
                                <input type="text" className="form-control" value={emailEmpresa} readOnly />
                            </div>
                        </Inputgroup>

                        <Inputgroup>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Telefone</span>
                                <input type="email" className="form-control" value={empresaTelefone} readOnly />
                            </div>
                        </Inputgroup>
                    
                    </Formgroup>

                    <Fotoinput>

                        <Fotopreview>

                            <img className="preview-img" alt="Logo Empresa"/>

                        </Fotopreview>

                        <input type="file"  id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                            
                    </Fotoinput>

                    {/* <i className="fas fa-plus fa-lg"></i> */}

                    <H2style>Interesses</H2style>
                    <Interesses>
                        <Tablediv>
                            <table className="table table-bordered table-hover text-center">
                                <thead className="thead-dark">
                                    <tr>
                                        <th colSpan="2">Interesses</th>                                        
                                    </tr>
                                </thead>
                                <tbody id="corpoTabela">
                                    {interesses.length > 0 
                                    ?
                                        interesses.map((inte,index) => {
                                            return(                                            
                                                <tr key={index} className="table-secondary">
                                                    <td>{index+1}</td>
                                                    <td>{inte}</td>
                                                </tr>)
                                        })
                                    :
                                    (<tr className="table-secondary">
                                        <td colSpan={2}>Não há interesses cadastrados.</td>
                                    </tr>)
                                    }
                                </tbody>
                            </table>
                        </Tablediv>
                    </Interesses>

                    <H2style>Descrição</H2style>

                    <Descricao>
                        <div className="input-group">
                            <span className="input-group-text">Descrição</span>
                            <textarea value={empresaDescricao} readOnly className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </Descricao>

                    <Buttongroup>

                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalEdicaoEmpresa"> 
                            Editar Perfil
                        </button>

                        <Link to="/feed" type="button" className="btn btn-success">Ver Feed </Link>
                        
                    </Buttongroup>    
                </Wrapper>

            <Footer/>

            {/* Modal Edição */}
            <div className="modal fade" id="modalEdicaoEmpresa" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header text-center">
                            <h5 className="modal-title w-100">Editar Perfil da Empresa</h5>
                        </div>

                        <div className="modal-body">
                            <div>                                
                                <label>Nome Fantasia</label>
                                <input type="text" value={placeholderNomeFantasia} onChange={handleChangeNomeFantasia} className="form-control mb-2" />
                            </div>
                            <div>                                
                                <label>Razão Social</label>
                                <input type="text" value={placeholderRazaoSocial} onChange={handleChangeRazaoSocial} className="form-control mb-2" />
                            </div>
                            <div>                                
                                <label>CNPJ</label>
                                <input type="text" value={placeholderCnpj} onChange={handleChangeCnpj} className="form-control mb-2" />
                            </div>
                            <div>                                
                                <label>Estado</label>
                                {/* <input type="text" value={placeholderEstado} onChange={handleChangeEstado} className="form-control mb-2" /> */}
                                <select onChange={handleChangeEmpresaEstado} className="form-select mb-2" value={placeholderEmpresaEstado} 
                                style={{
                                    width:"100%", height:"calc(1.5em + .75rem + 2px)", border:"1px solid #ced4da",
                                    padding:".375rem .75rem"
                                }} >
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                </select>
                            </div>
                            <div>                                
                                <label>Cidade</label>
                                <input type="text" value={placeholderEmpresaCidade} onChange={handleChangeCidade} className="form-control mb-2" />
                            </div>
                            <div>                                
                                <label>Endereço</label>
                                <input type="text" value={placeholderEmpresaEndereco} onChange={handleChangeEndereco} className="form-control mb-2" />
                            </div>
                            <div>                                
                                <label>Telefone</label>
                                <input type="text" value={placeholderEmpresaTelefone} onChange={handleChangeTelefone} className="form-control mb-2" />
                            </div>
                            <div>                                
                                <label>Descrição</label>
                                <input type="text" value={placeholderDescricao} onChange={handleChangeDescricao} className="form-control mb-2" />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>setAlterou(!alterou)}>Cancelar</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => salvarAlteracoes()}>Salvar</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
  );
}

export default CadastroEmpresa;