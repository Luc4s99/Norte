import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import { H2style, H3style, Tablediv, Box, Wrapper, Buttongroup } from './styles';
import { PlusSquare } from '@styled-icons/boxicons-solid/PlusSquare';

import firebase from '../../config/firebase';
import firebaseUpdate from 'firebase/app';
import 'firebase/auth';

import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

function PerfilCurriculo() {
    
    const [experiencia, setExperiencia] = useState([]);
    const [formacao, setFormacao] = useState([]);
    const [habilidades, setHabilidades] = useState([]);
    const [idiomas, setIdiomas] = useState([]);
    const [referencias, setReferencias] = useState([]);
    const [outrasAtividades, setOutraAtividades] = useState([]);

    const [alterou, setAlterou] = useState(false);
    const [placeholderExperiencia, setPlaceholderExperiencia] = useState('');
    const [placeholderFormacao, setPlaceholderFormacao] = useState('');
    const [placeholderHabilidades, setPlaceholderHabilidades] = useState('');
    const [placeholderIdiomas, setPlaceholderIdiomas] = useState('');
    const [placeholderAtividades, setPlaceholderAtividades] = useState('');
    const [placeholderReferencias, setPlaceholderReferencias] = useState('');
    
    const usuarioEmail = useSelector(state => state.user.usuarioEmail)    
    const db = firebase.firestore();
    useEffect(()=>{

        if(usuarioEmail === null){
            window.location.href = "http://localhost:3000/login";
        } else {
            db.collection("curriculos").doc(usuarioEmail).get().then((doc)=>{
                if(doc.exists){
                   
                    setExperiencia([...experiencia,doc.data().experiencia])
                    setFormacao([...formacao,doc.data().formacao])
                    setHabilidades([...habilidades,doc.data().habilidades])
                    setIdiomas([...idiomas,doc.data().idiomas])
                    setReferencias([...referencias,doc.data().referencias])
                    setOutraAtividades([...outrasAtividades,doc.data().outrasAtividades])
                    setAlterou(!alterou);
                } else{
                    console.log("Este documento não existe.");
                }
            }).catch((error)=>{
                console.log("Erro ao tentar recuperar curriculo:",error);
            });
        }
        
    },[])   

    function handleChangeExperiencia(event){
        setPlaceholderExperiencia(event.target.value);
    }   

    function adicionarNovaExperiencia(){

        db.collection("curriculos").doc(usuarioEmail).update({
            experiencia: firebaseUpdate.firestore.FieldValue.arrayUnion(placeholderExperiencia)
        });

        setTimeout(()=>{
            alert("Experiência adicionada com sucesso!");
            window.location.reload();
        },[500]);
    }

    function excluirExperiencia(exp){

        if (window.confirm("Tem certeza que deseja excluir essa experiência?")){
            
            db.collection("curriculos").doc(usuarioEmail).update({
                experiencia: firebaseUpdate.firestore.FieldValue.arrayRemove(exp)
            });
    
            setTimeout(()=>{
                alert("Experiência removida com sucesso!");
                window.location.reload();
            },[500]);
        }        
    }

    function handleChangeFormacao(event){
        setPlaceholderFormacao(event.target.value);
    }

    function adicionarNovaFormacao(){

        db.collection("curriculos").doc(usuarioEmail).update({
            formacao: firebaseUpdate.firestore.FieldValue.arrayUnion(placeholderFormacao)
        });

        setTimeout(()=>{
            alert("Formação adicionada com sucesso!");
            window.location.reload();
        },[500]);
    }

    function excluirFormacao(form){

        if (window.confirm("Tem certeza que deseja excluir essa formação?")){
            
            db.collection("curriculos").doc(usuarioEmail).update({
                formacao: firebaseUpdate.firestore.FieldValue.arrayRemove(form)
            });
    
            setTimeout(()=>{
                alert("Formação removida com sucesso!");
                window.location.reload();
            },[500]);
        }        
    }

    function handleChangeHabilidades(event){
        setPlaceholderHabilidades(event.target.value);
    }

    function adicionarNovaHabilidade(){

        db.collection("curriculos").doc(usuarioEmail).update({
            habilidades: firebaseUpdate.firestore.FieldValue.arrayUnion(placeholderHabilidades)
        });

        setTimeout(()=>{
            alert("Habilidade adicionada com sucesso!");
            window.location.reload();
        },[500]);
    }

    function excluirHabilidade(habi){

        if (window.confirm("Tem certeza que deseja excluir essa habilidade?")){
            
            db.collection("curriculos").doc(usuarioEmail).update({
                habilidades: firebaseUpdate.firestore.FieldValue.arrayRemove(habi)
            });
    
            setTimeout(()=>{
                alert("Habilidade removida com sucesso!");
                window.location.reload();
            },[500]);
        }        
    }

    function handleChangeIdiomas(event){
        setPlaceholderIdiomas(event.target.value);
    }

    function adicionarNovoIdioma(){

        db.collection("curriculos").doc(usuarioEmail).update({
            idiomas: firebaseUpdate.firestore.FieldValue.arrayUnion(placeholderIdiomas)
        });

        setTimeout(()=>{
            alert("Formação adicionada com sucesso!");
            window.location.reload();
        },[500]);
    }

    function excluirIdioma(idi){

        if (window.confirm("Tem certeza que deseja excluir esse idioma?")){
            
            db.collection("curriculos").doc(usuarioEmail).update({
                idiomas: firebaseUpdate.firestore.FieldValue.arrayRemove(idi)
            });
    
            setTimeout(()=>{
                alert("Idioma removido com sucesso!");
                window.location.reload();
            },[500]);
        }        
    }

    function handleChangeAtividades(event){
        setPlaceholderAtividades(event.target.value);
    }

    function adicionarNovaAtividade(){

        db.collection("curriculos").doc(usuarioEmail).update({
            outrasAtividades: firebaseUpdate.firestore.FieldValue.arrayUnion(placeholderAtividades)
        });

        setTimeout(()=>{
            alert("Atividade adicionada com sucesso!");
            window.location.reload();
        },[500]);
    }

    function excluirAtividade(atv){

        if (window.confirm("Tem certeza que deseja excluir essa atividade?")){
            
            db.collection("curriculos").doc(usuarioEmail).update({
                outrasAtividades: firebaseUpdate.firestore.FieldValue.arrayRemove(atv)
            });
    
            setTimeout(()=>{
                alert("Atividade removida com sucesso!");
                window.location.reload();
            },[500]);
        }        
    }

    function handleChangeReferencias(event){
        setPlaceholderReferencias(event.target.value);
    }

    function adicionarNovaReferencia(){

        db.collection("curriculos").doc(usuarioEmail).update({
            referencias: firebaseUpdate.firestore.FieldValue.arrayUnion(placeholderReferencias)
        });

        setTimeout(()=>{
            alert("Referencia adicionada com sucesso!");
            window.location.reload();
        },[500]);
    }

    function excluirReferencia(ref){

        if (window.confirm("Tem certeza que deseja excluir essa referência?")){
            
            db.collection("curriculos").doc(usuarioEmail).update({
                referencias: firebaseUpdate.firestore.FieldValue.arrayRemove(ref)
            });
    
            setTimeout(()=>{
                alert("Referência removida com sucesso!");
                window.location.reload();
            },[500]);
        }        
    }

    return(
        <>

        <NavBar />
            
            <Wrapper>
                
                <H2style>Currículo</H2style>

                <Box>

                    <H3style>Experiências:</H3style>

                    <Tablediv>                    
                        <table className="table table-bordered table-hover text-center" style={{width:"100%"}}>
                            <colgroup>
                                <col span="1" style={{width: "80%"}}></col>
                                <col span="1" style={{width: "20%"}}></col>
                            </colgroup>
                            <thead className="thead-dark">
                                <tr>
                                    <th>Experiencias</th>
                                    <th>
                                        <button type="button" id="adicionaExperiencia" className="btn btn-secondary" data-toggle="modal" data-target="#modalCurriculoExperiencia">
                                            <PlusSquare size="24" />
                                        </button>                                  
                                    </th>                                
                                </tr>
                            </thead>
                            <tbody id="corpoTabela">                                
                                {
                                experiencia.length > 0 ?
                                    experiencia[0].map((exp, index) => {
                                        return(
                                        <tr key={index} className="table-secondary">
                                            <td>{exp}</td>
                                            <td>
                                                <button disabled={true} type="button" className="btn btn-outline-danger">
                                                    Editar
                                                </button>
                                                <button type="button" className="btn btn-outline-danger" onClick={()=>excluirExperiencia(exp, index)}>
                                                    Deletar
                                                </button>
                                            </td>
                                        </tr>)                                    
                                })
                                : (<tr className="table-secondary">
                                    <td colSpan={2}> Não há experiencias cadastradas </td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </Tablediv>
                </Box>

                <Box>

                    <H3style>Formação:</H3style>

                    <Tablediv>
                        <table className="table table-bordered table-hover text-center" style={{width:"100%"}}>
                            <colgroup>
                                <col span="1" style={{width: "80%"}}></col>
                                <col span="1" style={{width: "20%"}}></col>
                            </colgroup>
                            <thead className="thead-dark">
                                <tr>
                                    <th>Formação</th>
                                    <th>
                                        <button type="button" id="adicionaFormacao" className="btn btn-secondary" data-toggle="modal" data-target="#modalCurriculoFormacao">
                                            <PlusSquare size="24" />
                                        </button>                                  
                                    </th>                                
                                </tr>
                            </thead>
                            <tbody id="corpoTabela">
                                {formacao.length > 0 ?
                                    formacao[0].map((form, index) => {
                                        return(
                                        <tr key={index} className="table-secondary">
                                            <td>{form}</td>
                                            <td>
                                                <button disabled={true} type="button" className="btn btn-outline-danger">
                                                    Editar
                                                </button>
                                                <button type="button" className="btn btn-outline-danger" onClick={()=>excluirFormacao(form, index)}>
                                                    Deletar
                                                </button>
                                            </td>
                                        </tr>)                                    
                                })
                                : (<tr className="table-secondary">
                                    <td colSpan={2}> Não há formações cadastradas </td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </Tablediv>
                </Box>

                <Box>

                    <H3style>Habilidades:</H3style>

                    <Tablediv>
                        <table className="table table-bordered table-hover text-center" style={{width:"100%"}}>
                            <colgroup>
                                <col span="1" style={{width: "80%"}}></col>
                                <col span="1" style={{width: "20%"}}></col>
                            </colgroup>
                            <thead className="thead-dark">
                                <tr>
                                    <th>Habilidades</th>
                                    <th>
                                        <button type="button" id="adicionaHabilidade" className="btn btn-secondary" data-toggle="modal" data-target="#modalCurriculoHabilidades">
                                            <PlusSquare size="24" />
                                        </button>                                  
                                    </th>                                
                                </tr>
                            </thead>
                            <tbody id="corpoTabela">
                                {habilidades.length > 0 ?
                                    habilidades[0].map((hab, index) => {
                                        return(
                                        <tr key={index} className="table-secondary">
                                            <td>{hab}</td>
                                            <td>
                                                <button disabled={true} type="button" className="btn btn-outline-danger">
                                                    Editar
                                                </button>
                                                <button type="button" className="btn btn-outline-danger" onClick={()=>excluirHabilidade(hab, index)}>
                                                    Deletar
                                                </button>
                                            </td>
                                        </tr>)                                    
                                })
                                : (<tr className="table-secondary">
                                    <td colSpan={2}> Não há habilidades cadastradas </td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </Tablediv>
                </Box>

                <Box>

                    <H3style>Idiomas:</H3style>

                    <Tablediv>
                        <table className="table table-bordered table-hover text-center" style={{width:"100%"}}>
                            <colgroup>
                                <col span="1" style={{width: "80%"}}></col>
                                <col span="1" style={{width: "20%"}}></col>
                            </colgroup>
                            <thead className="thead-dark">
                                <tr>
                                    <th>Idiomas</th>
                                    <th>
                                        <button type="button" id="adicionaIdioma" className="btn btn-secondary" data-toggle="modal" data-target="#modalCurriculoIdiomas">
                                            <PlusSquare size="24" />
                                        </button>                                  
                                    </th>                                
                                </tr>
                            </thead>
                            <tbody id="corpoTabela">
                                {idiomas.length > 0 ?
                                    idiomas[0].map((idi, index) => {
                                        return(
                                        <tr key={index} className="table-secondary">
                                            <td>{idi}</td>
                                            <td>
                                                <button disabled={true} type="button" className="btn btn-outline-danger">
                                                    Editar
                                                </button>
                                                <button type="button" className="btn btn-outline-danger" onClick={()=>excluirIdioma(idi, index)}>
                                                    Deletar
                                                </button>
                                            </td>
                                        </tr>)                                    
                                })
                                : (<tr className="table-secondary">
                                    <td colSpan={2}> Não há idiomas cadastrados </td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </Tablediv>
                </Box>

                <Box>

                    <H3style>Referências:</H3style>

                    <Tablediv>
                        <table className="table table-bordered table-hover text-center" style={{width:"100%"}}>
                            <colgroup>
                                <col span="1" style={{width: "80%"}}></col>
                                <col span="1" style={{width: "20%"}}></col>
                            </colgroup>
                            <thead className="thead-dark">
                                <tr>
                                    <th>Referencias</th>
                                    <th>
                                        <button type="button" id="adicionaReferencia" className="btn btn-secondary" data-toggle="modal" data-target="#modalCurriculoReferencias">
                                            <PlusSquare size="24" />
                                        </button>                                  
                                    </th>                                
                                </tr>
                            </thead>
                            <tbody id="corpoTabela">
                                {referencias.length > 0 ?
                                    referencias[0].map((ref, index) => {
                                        return(
                                        <tr key={index} className="table-secondary">
                                            <td>{ref}</td>
                                            <td>
                                                <button disabled={true} type="button" className="btn btn-outline-danger">
                                                    Editar
                                                </button>
                                                <button type="button" className="btn btn-outline-danger" onClick={()=>excluirReferencia(ref, index)}>
                                                    Deletar
                                                </button>
                                            </td>
                                        </tr>)                                    
                                })
                                : (<tr className="table-secondary">
                                    <td colSpan={2}> Não há referências cadastradas </td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </Tablediv>
                </Box>

                <Box>

                    <H3style>Outras Atividades:</H3style>

                    <Tablediv>
                        <table className="table table-bordered table-hover text-center" style={{width:"100%"}}>
                            <colgroup>
                                <col span="1" style={{width: "80%"}}></col>
                                <col span="1" style={{width: "20%"}}></col>
                            </colgroup>
                            <thead className="thead-dark">
                                <tr>
                                    <th>Outras Atividades</th>
                                    <th>
                                        <button type="button" id="adicionaAtividade" className="btn btn-secondary" data-toggle="modal" data-target="#modalCurriculoAtividades">
                                            <PlusSquare size="24" />
                                        </button>                                  
                                    </th>                                
                                </tr>
                            </thead>
                            <tbody id="corpoTabela">
                                {outrasAtividades.length > 0 ?
                                    outrasAtividades[0].map((atv, index) => {
                                        return(
                                        <tr key={index} className="table-secondary">
                                            <td>{atv}</td>
                                            <td>
                                                <button disabled={true} type="button" className="btn btn-outline-danger">
                                                    Editar
                                                </button>
                                                <button type="button" className="btn btn-outline-danger" onClick={()=>excluirAtividade(atv, index)}>
                                                    Deletar
                                                </button>
                                            </td>
                                        </tr>)                                    
                                })
                                : (<tr className="table-secondary">
                                    <td colSpan={2}> Não há atividades cadastradas </td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </Tablediv>
                </Box>

                <Buttongroup>
                    <Link to="/perfilPessoa" type="button" className="btn btn-danger"> Voltar para o Perfil </Link>
                </Buttongroup>

            </Wrapper>

        <Footer />

        {/* Modal Experiencia */}
        <div className="modal fade" id="modalCurriculoExperiencia" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header text-center">
                        <h5 className="modal-title w-100">Adicionar Experiencia</h5>
                    </div>

                    <div className="modal-body">
                        <label>Digite sua nova Experiencia</label>
                        <input type="text" className="form-control mb-2" onChange={handleChangeExperiencia} />
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setPlaceholderExperiencia('')}>Cancelar</button>
                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => adicionarNovaExperiencia()}>Adicionar</button>
                    </div>

                </div>
            </div>
        </div>

        {/* Modal Formação */}
        <div className="modal fade" id="modalCurriculoFormacao" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header text-center">
                        <h5 className="modal-title w-100">Adicionar Formação</h5>
                    </div>

                    <div className="modal-body">
                        <label>Digite sua nova Formação</label>
                        <input type="text" className="form-control mb-2" onChange={handleChangeFormacao} />
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setPlaceholderFormacao('')}>Cancelar</button>
                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => adicionarNovaFormacao()}>Adicionar</button>
                    </div>

                </div>
            </div>
        </div>

        {/* Modal Habilidades */}
        <div className="modal fade" id="modalCurriculoHabilidades" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header text-center">
                        <h5 className="modal-title w-100">Adicionar Habilidade</h5>
                    </div>

                    <div className="modal-body">
                        <label>Digite sua nova Habilidade</label>
                        <input type="text" className="form-control mb-2" onChange={handleChangeHabilidades} />
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setPlaceholderHabilidades('')}>Cancelar</button>
                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => adicionarNovaHabilidade()}>Adicionar</button>
                    </div>

                </div>
            </div>
        </div>

        {/* Modal Idiomas */}
        <div className="modal fade" id="modalCurriculoIdiomas" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header text-center">
                        <h5 className="modal-title w-100">Adicionar Idioma</h5>
                    </div>

                    <div className="modal-body">
                        <label>Digite seu novo Idioma</label>
                        <input type="text" className="form-control mb-2" onChange={handleChangeIdiomas} />
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setPlaceholderIdiomas('')}>Cancelar</button>
                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => adicionarNovoIdioma()}>Adicionar</button>
                    </div>

                </div>
            </div>
        </div>

        {/* Modal Atividades */}
        <div className="modal fade" id="modalCurriculoAtividades" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header text-center">
                        <h5 className="modal-title w-100">Adicionar Atividade</h5>
                    </div>

                    <div className="modal-body">
                        <label>Digite sua nova Atividade</label>
                        <input type="text" className="form-control mb-2" onChange={handleChangeAtividades} />
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setPlaceholderAtividades('')}>Cancelar</button>
                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => adicionarNovaAtividade()}>Adicionar</button>
                    </div>

                </div>
            </div>
        </div>

        {/* Modal Referencias */}
        <div className="modal fade" id="modalCurriculoReferencias" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header text-center">
                        <h5 className="modal-title w-100">Adicionar Referência</h5>
                    </div>

                    <div className="modal-body">
                        <label>Digite sua nova Referência</label>
                        <input type="text" className="form-control mb-2" onChange={handleChangeReferencias} />
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setPlaceholderReferencias('')}>Cancelar</button>
                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => adicionarNovaReferencia()}>Adicionar</button>
                    </div>

                </div>
            </div>
        </div>

        </>
    );
}

export default PerfilCurriculo;