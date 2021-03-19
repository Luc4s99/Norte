import React, { useState } from 'react';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import { H2style, Tablediv, Box, H5style, Wrapper, Buttongroup } from './styles';
import { PlusSquare } from '@styled-icons/boxicons-solid/PlusSquare';
import { Trash } from '@styled-icons/boxicons-regular/Trash';

import firebase from '../../config/firebase'
import 'firebase/auth';
import {useSelector} from 'react-redux';

function CadastroCurriculo() {

    const [experiencia, setExperiencia] = useState([]);
    const [formacao, setFormacao] = useState([]);
    const [habilidades, setHabilidades] = useState([]);
    const [idiomas, setIdiomas] = useState([]);
    const [referencias, setReferencias] = useState([]);
    const [outrasAtividades, setOutrasAtividades] = useState([]);
    const usuarioEmail = useSelector(state => state.user.usuarioEmail)

    const db = firebase.firestore();

    function novoCurriculo() {

        db.collection('curriculos').doc(usuarioEmail).set({

            experiencia: experiencia,
            formacao: formacao,
            habilidades: habilidades,
            idiomas: idiomas,
            referencias: referencias,
            outrasAtividades: outrasAtividades,
            usuarioEmail: usuarioEmail
        }).then(() => {

            window.location.href = "http://localhost:3000/cadastroCurriculo";
        }).catch(() => {

            alert('Erro no cadastro do currículo, tente novamente!');
        })
    }

    return(
        <>

            <NavBar />
                
                <Wrapper>
                    
                    <H2style>Agora vamos cadastrar seu currículo!</H2style>

                    <Box>

                        <H5style>Vamos começar com suas experiências:</H5style>

                        <Tablediv>
                            <table className="table table-dark table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Experiência</th>
                                        <th scope="col">
                                        <button><PlusSquare size="24" /></button> 
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="col-md-1" scope="row">Aqui vai a experiência adicionada</td>
                                        <td><button><Trash size="24" /></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Tablediv>
                    </Box>

                    <Box>

                        <H5style>Agora nos conte sobre sua formação:</H5style>

                        <Tablediv>
                            <table className="table table-dark table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Formação</th>
                                        <th scope="col">
                                            <button><PlusSquare size="24" /></button> 
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="col-md-1" scope="row">Aqui vai a formação adicionada</td>
                                        <td><button><Trash size="24" /></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Tablediv>
                    </Box>

                    <Box>

                        <H5style>E suas habilidades?</H5style>

                        <Tablediv>
                            <table className="table table-dark table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Habilidades</th>
                                        <th scope="col">
                                            <button><PlusSquare size="24" /></button> 
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="col-md-1" scope="row">Aqui vai a habilidade adicionada</td>
                                        <td><button><Trash size="24" /></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Tablediv>
                    </Box>

                    <Box>

                        <H5style>Seus idiomas:</H5style>

                        <Tablediv>
                            <table className="table table-dark table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Idiomas</th>
                                        <th scope="col">
                                            <button><PlusSquare size="24" /></button> 
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="col-md-1" scope="row">Aqui vai o idioma adicionado</td>
                                        <td><button><Trash size="24" /></button></td>
                                    </tr>
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
                                        <th scope="col">Referências</th>
                                        <th scope="col">
                                            <button><PlusSquare size="24" /></button> 
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="col-md-1" scope="row">Aqui vai a referência adicionada</td>
                                        <td><button><Trash size="24" /></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Tablediv>
                    </Box>

                    <Box>

                        <H5style>Adicione aqui atividades que julga importante:</H5style>

                        <Tablediv>
                            <table className="table table-dark table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Outras Atividades</th>
                                        <th scope="col">
                                            <button><PlusSquare size="24" /></button> 
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="col-md-1" scope="row">Aqui vai a atividade adicionada</td>
                                        <td><button><Trash size="24" /></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Tablediv>
                    </Box>

                    <Buttongroup>

                        <button type="button" className="btn btn-danger">Cancelar</button>

                        <button onClick={novoCurriculo} type="button" className="btn btn-success">Continuar</button>

                    </Buttongroup>

                </Wrapper>

            <Footer />
        </>
    );
}

export default CadastroCurriculo;