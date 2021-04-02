import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import { H2style, Tablediv, Box, H5style, Wrapper, Buttongroup } from './styles';
import { PlusSquare } from '@styled-icons/boxicons-solid/PlusSquare';

import firebase from '../../config/firebase';
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
                    console.log(doc.data());
                } else{
                    console.log("Este documento não existe.");
                }
            }).catch((error)=>{
                console.log("Erro ao tentar recuperar curriculo:",error);
            });
        }
        
    },[])   

    return(
        <>

        <NavBar />
            
            <Wrapper>
                
                <H2style>Currículo</H2style>

                <Box>

                    <H5style>Experiências:</H5style>

                    <Tablediv>
                        <table className="table table-dark table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Experiência</th>
                                    <th scope="col">
                                        <button disabled={true} type="button" id="adicionaExperiencia" className="btn btn-secondary" data-toggle="modal" data-target="#modalExperiencia">
                                            <PlusSquare size="24" />
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="corpoTabela">
                                {experiencia.map((exp, index) => {
                                    return(<tr key={index}>
                                    <td className="col-md-1">{exp}</td>
                                    <td><button disabled={true} type="button" className="btn btn-outline-danger">Deletar</button></td>
                                    </tr>)    
                                })}
                            </tbody>
                        </table>
                    </Tablediv>
                </Box>

                <Box>

                    <H5style>Formação:</H5style>

                    <Tablediv>
                        <table className="table table-dark table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Formação</th>
                                    <th scope="col">
                                        <button disabled={true} type="button" id="adicionaFormacao" className="btn btn-secondary" data-toggle="modal" data-target="#modalFormacao">
                                            <PlusSquare size="24" />
                                        </button> 
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {formacao.map((forma, index) => {
                                    return(<tr key={index}>
                                    <td className="col-md-1">{forma}</td>
                                    <td><button disabled={true} type="button" className="btn btn-outline-danger">Deletar</button></td>
                                    </tr>)    
                                })}
                            </tbody>
                        </table>
                    </Tablediv>
                </Box>

                <Box>

                    <H5style>Habilidades:</H5style>

                    <Tablediv>
                        <table className="table table-dark table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Habilidades</th>
                                    <th scope="col">
                                        <button disabled={true} type="button" id="adicionaHabilidades" className="btn btn-secondary" data-toggle="modal" data-target="#modalHabilidades">
                                            <PlusSquare size="24" />
                                        </button>  
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {habilidades.map((habi, index) => {
                                    return(<tr key={index}>
                                    <td className="col-md-1">{habi}</td>
                                    <td><button disabled={true} type="button" className="btn btn-outline-danger">Deletar</button></td>
                                    </tr>)    
                                })}
                            </tbody>
                        </table>
                    </Tablediv>
                </Box>

                <Box>

                    <H5style>Idiomas:</H5style>

                    <Tablediv>
                        <table className="table table-dark table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Idiomas</th>
                                    <th scope="col">
                                        <button disabled={true} type="button" className="btn btn-secondary" data-toggle="modal" data-target="#modalIdiomas">
                                            <PlusSquare size="24" />
                                        </button> 
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {idiomas.map((idi, index) => {
                                    return(<tr key={index}>
                                    <td className="col-md-1">{idi}</td>
                                    <td><button disabled={true} type="button" className="btn btn-outline-danger">Deletar</button></td>
                                    </tr>)    
                                })}
                            </tbody>
                        </table>
                    </Tablediv>
                </Box>

                <Box>

                    <H5style>Referências:</H5style>

                    <Tablediv>
                        <table className="table table-dark table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Referências:</th>
                                    <th scope="col">
                                        <button disabled={true} type="button" className="btn btn-secondary" data-toggle="modal" data-target="#modalReferencias">
                                            <PlusSquare size="24" />
                                        </button>  
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {referencias.map((ref, index) => {
                                    return(<tr key={index}>
                                    <td className="col-md-1">{ref}</td>
                                    <td><button disabled={true} type="button" className="btn btn-outline-danger">Deletar</button></td>
                                    </tr>)    
                                })}
                            </tbody>
                        </table>
                    </Tablediv>
                </Box>

                <Box>

                    <H5style>Outras Atividades:</H5style>

                    <Tablediv>
                        <table className="table table-dark table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Outras Atividades</th>
                                    <th scope="col">
                                        <button disabled={true} type="button" className="btn btn-secondary" data-toggle="modal" data-target="#modalOutrasAtividades">
                                            <PlusSquare size="24" />
                                        </button>   
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {outrasAtividades.map((oAtiv, index) => {
                                    return(<tr key={index}>
                                    <td className="col-md-1">{oAtiv}</td>
                                    <td><button disabled={true} type="button" className="btn btn-outline-danger">Deletar</button></td>
                                    </tr>)    
                                })}
                            </tbody>
                        </table>
                    </Tablediv>
                </Box>

                <Buttongroup>

                    <Link to="/perfilPessoa" type="button" className="btn btn-danger"> Voltar para o Perfil </Link>
                    <Link to="/" type="button" className="btn btn-success"> Editar Cúrriculo </Link>

                </Buttongroup>

            </Wrapper>

        <Footer />

        </>
    );
}

export default PerfilCurriculo;