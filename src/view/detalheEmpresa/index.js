import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { Tablediv, Wrapper, H2style, Formgroup, Inputgroup, Fotoinput, Fotopreview, Buttongroup, Descricao, Interesses } from './styles';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { Link } from 'react-router-dom';

function DetalheEmpresa({match}) {
    const emailEmpresa = (match.params.id);

    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [empresaCidade, setEmpresaCidade] = useState('');
    const [empresaEstado, setEmpresaEstado] = useState('');
    const [empresaEndereco, setEmpresaEndereco] = useState('');
    const [empresaTelefone, setEmpresaTelefone] = useState('');
    const [interesses, setInteresses] = useState([]);
    const [empresaDescricao, setEmpresaDescricao] = useState('');
    const [logoEmpresa, setLogoEmpresa] = useState('');
    
    const db = firebase.firestore();    
    const [placeholderLogoEmpresa, setPlaceholderLogoEmpresa] = useState('');
    
    useEffect(()=>{     

        db.collection("empresas").doc(emailEmpresa).get().then((doc)=>{
            
            setEmpresaCidade(doc.data().cidade);
            setCnpj(doc.data().cnpj);
            setRazaoSocial(doc.data().razaoSocial);
            setNomeFantasia(doc.data().nomeFantasia);
            setEmpresaEstado(doc.data().estado);
            setEmpresaEndereco(doc.data().endereco);
            setEmpresaTelefone(doc.data().telefone);                
            setEmpresaDescricao(doc.data().descricao);
            setInteresses([...interesses, doc.data().interesses]);
            setLogoEmpresa(doc.data().logoEmpresa);

        }).catch((error)=>{
            console.log("Erro ao tentar recuperar informações da empresa:",error);
        }); 
        
    },[]) 

    useEffect(()=>{
        console.log(logoEmpresa);
        firebase.storage().ref(`imagens/${logoEmpresa}`).getDownloadURL()
                          .then(url => setPlaceholderLogoEmpresa(url))
                          .catch(erro => setPlaceholderLogoEmpresa("https://via.placeholder.com/100x50"));
    },[logoEmpresa]);
    
    return (
        <>
            <Navbar/>
                <Wrapper>

                    <H2style>Detalhes da Empresa</H2style>

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

                        <img src={placeholderLogoEmpresa} alt="Pré-visualização da foto" className="preview-img" />                        

                        </Fotopreview>

                        <input type="file"  id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                            
                    </Fotoinput>

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

                        <Link to="/perfilPessoa" type="button" className="btn btn-primary">Voltar </Link>
                        
                    </Buttongroup>    
                </Wrapper>

            <Footer/>
            
        </>
  );
}

export default DetalheEmpresa;