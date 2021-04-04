import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import { H2style, H3style, Tablediv, Box, Wrapper, Buttongroup } from './styles';

import firebase from '../../config/firebase';
import 'firebase/auth';

import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

function DetalheCurriculo({match}) {
    
    const [experiencia, setExperiencia] = useState([]);
    const [formacao, setFormacao] = useState([]);
    const [habilidades, setHabilidades] = useState([]);
    const [idiomas, setIdiomas] = useState([]);
    const [referencias, setReferencias] = useState([]);
    const [outrasAtividades, setOutraAtividades] = useState([]);    
        
    const usuarioEmail = (match.params.id);
    const db = firebase.firestore();
    useEffect(()=>{
        
        db.collection("curriculos").doc(usuarioEmail).get().then((doc)=>{
            if(doc.exists){
                
                setExperiencia([...experiencia,doc.data().experiencia])
                setFormacao([...formacao,doc.data().formacao])
                setHabilidades([...habilidades,doc.data().habilidades])
                setIdiomas([...idiomas,doc.data().idiomas])
                setReferencias([...referencias,doc.data().referencias])
                setOutraAtividades([...outrasAtividades,doc.data().outrasAtividades])

            } else{
                console.log("Este documento não existe.");
            }
        }).catch((error)=>{
            console.log("Erro ao tentar recuperar curriculo:",error);
        });
        
    },[])     

    return(
        <>

        <NavBar />
            
            <Wrapper>
                
                <H2style>Currículo</H2style>

                <Box>

                    <H3style>Experiências:</H3style>

                    <Tablediv>                    
                        <table className="table table-bordered table-hover text-center" style={{width:"100%"}}>                            
                            <thead className="thead-dark">
                                <tr>
                                    <th>Experiencias</th>                                                                   
                                </tr>
                            </thead>
                            <tbody id="corpoTabela">                                
                                {
                                experiencia.length > 0 ?
                                    experiencia[0].map((exp, index) => {
                                        return(
                                        <tr key={index} className="table-secondary">
                                            <td>{exp}</td>   
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
                            <thead className="thead-dark">
                                <tr>
                                    <th>Formação</th>
                                </tr>
                            </thead>
                            <tbody id="corpoTabela">
                                {formacao.length > 0 ?
                                    formacao[0].map((form, index) => {
                                        return(
                                        <tr key={index} className="table-secondary">
                                            <td>{form}</td>
                                            
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
                            <thead className="thead-dark">
                                <tr>
                                    <th>Habilidades</th>
                                </tr>
                            </thead>
                            <tbody id="corpoTabela">
                                {habilidades.length > 0 ?
                                    habilidades[0].map((hab, index) => {
                                        return(
                                        <tr key={index} className="table-secondary">
                                            <td>{hab}</td>
                                            
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
                            <thead className="thead-dark">
                                <tr>
                                    <th>Idiomas</th>
                                </tr>
                            </thead>
                            <tbody id="corpoTabela">
                                {idiomas.length > 0 ?
                                    idiomas[0].map((idi, index) => {
                                        return(
                                        <tr key={index} className="table-secondary">
                                            <td>{idi}</td>
                                            
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
                            <thead className="thead-dark">
                                <tr>
                                    <th>Referencias</th>
                                </tr>
                            </thead>
                            <tbody id="corpoTabela">
                                {referencias.length > 0 ?
                                    referencias[0].map((ref, index) => {
                                        return(
                                        <tr key={index} className="table-secondary">
                                            <td>{ref}</td>
                                            
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
                            <thead className="thead-dark">
                                <tr>
                                    <th>Outras Atividades</th>
                                </tr>
                            </thead>
                            <tbody id="corpoTabela">
                                {outrasAtividades.length > 0 ?
                                    outrasAtividades[0].map((atv, index) => {
                                        return(
                                        <tr key={index} className="table-secondary">
                                            <td>{atv}</td>
                                            
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
                    <Link to="/feed" type="button" className="btn btn-danger"> Voltar para o Feed </Link>
                </Buttongroup>

            </Wrapper>

        <Footer />  
        </>
    );
}

export default DetalheCurriculo;