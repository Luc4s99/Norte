import React, { useState } from 'react';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import { H2style, Tablediv, Box, H5style, Wrapper, Buttongroup } from './styles';
import { PlusSquare } from '@styled-icons/boxicons-solid/PlusSquare';
import { Link } from 'react-router-dom';

import firebase from '../../config/firebase'
import 'firebase/auth';
import {useSelector} from 'react-redux';
// import { Redirect } from 'react-router-dom';

function CadastroCurriculo() {

    var aux = '';

    const [experiencia, setExperiencia] = useState([]);
    const [formacao, setFormacao] = useState([]);
    const [habilidades, setHabilidades] = useState([]);
    const [idiomas, setIdiomas] = useState([]);
    const [referencias, setReferencias] = useState([]);
    const [outrasAtividades, setOutrasAtividades] = useState([]);
    const usuarioEmail = useSelector(state => state.user.usuarioEmail)  

    const db = firebase.firestore();

    if(usuarioEmail === null){
        window.location.href = "http://localhost:3000/login";
    }

    function adicionarExperiencia() {

        // Adicionando experiencia para a lista de arrays
        setExperiencia([...experiencia, aux]);
    }

    function excluirExperiencia(index) {

        // Joga a lista experiencia para uma outra lista
        // Isso é feito pois não é recomendado mexer diretamente na experiencia que é um estado
        const list =[...experiencia];

        // Retira de list 1 elemento no index determinado
        list.splice(index, 1);

        // Insere no estado a lista que foi modificado
        setExperiencia(list);
    }

    function adicionarFormacao() {

        setFormacao([...formacao, aux]);
    }

    function excluirFormacao(index) {

        const list =[...formacao];

        list.splice(index, 1);

        setFormacao(list);
    }

    function adicionarHabilidades() {

        setHabilidades([...habilidades, aux]);
    }

    function excluirHabilidades(index) {

        const list =[...habilidades];

        list.splice(index, 1);

        setHabilidades(list);
    }

    function adicionarIdiomas() {

        setIdiomas([...idiomas, aux]);
    }

    function excluirIdiomas(index) {

        const list =[...idiomas];

        list.splice(index, 1);

        setIdiomas(list);
    }

    function adicionarReferencias() {

        setReferencias([...referencias, aux]);
    }

    function excluirReferencias(index) {

        const list =[...referencias];

        list.splice(index, 1);

        setReferencias(list);
    }

    function adicionarOutrasAtividades() {

        setOutrasAtividades([...outrasAtividades, aux]);
    }

    function excluirOutrasAtividades(index) {

        const list =[...outrasAtividades];

        list.splice(index, 1);

        setOutrasAtividades(list);
    }

    function novoCurriculo() {

        console.log(usuarioEmail)
        db.collection('curriculos').doc(usuarioEmail).set({

            experiencia: experiencia,
            formacao: formacao,
            habilidades: habilidades,
            idiomas: idiomas,
            referencias: referencias,
            outrasAtividades: outrasAtividades,
            usuarioEmail: usuarioEmail
        }).then(() => {
            alert("Curriculo cadastrado com sucesso!");
            //Redirect não está funcionando
            //<Redirect to="/perfilPessoa" />
            window.location.href = "http://localhost:3000/perfilPessoa";
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
                            <table className="table table-bordered table-hover text-center">
                                <colgroup>
                                    <col span="1" style={{width: "80%"}}></col>
                                    <col span="1" style={{width: "20%"}}></col>
                                </colgroup>
                                <thead>
                                    <tr className="thead-dark">
                                        <th>Experiência</th> 
                                        <th>
                                            <button type="button" id="adicionaExperiencia" className="btn btn-secondary" data-toggle="modal" data-target="#modalExperiencia">
                                                <PlusSquare size="24" />
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody id="corpoTabela">
                                    {experiencia.map((exp, index) => {
                                        return(<tr key={index} className="table-secondary">
                                        <td className="col-md-1">{exp}</td>
                                        <td><button onClick={() => excluirExperiencia(index)} type="button" className="btn btn-outline-danger">Deletar</button></td>
                                        </tr>)    
                                    })}
                                </tbody>
                            </table>
                        </Tablediv>
                    </Box>

                    <Box>

                        <H5style>Agora nos conte sobre sua formação:</H5style>

                        <Tablediv>
                            <table className="table table-bordered table-hover text-center">
                                <colgroup>
                                    <col span="1" style={{width: "80%"}}></col>
                                    <col span="1" style={{width: "20%"}}></col>
                                </colgroup>
                                <thead>
                                    <tr className="thead-dark">
                                        <th scope="col">Formação</th>
                                        <th scope="col">
                                            <button type="button" id="adicionaFormacao" className="btn btn-secondary" data-toggle="modal" data-target="#modalFormacao">
                                                <PlusSquare size="24" />
                                            </button> 
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formacao.map((forma, index) => {
                                        return(<tr key={index} className="table-secondary">
                                        <td className="col-md-1">{forma}</td>
                                        <td><button onClick={() => excluirFormacao(index)} type="button" className="btn btn-outline-danger">Deletar</button></td>
                                        </tr>)    
                                    })}
                                </tbody>
                            </table>
                        </Tablediv>
                    </Box>

                    <Box>

                        <H5style>E suas habilidades?</H5style>

                        <Tablediv>
                            <table className="table table-bordered table-hover text-center">
                                <colgroup>
                                    <col span="1" style={{width: "80%"}}></col>
                                    <col span="1" style={{width: "20%"}}></col>
                                </colgroup>
                                <thead>
                                    <tr className="thead-dark">
                                        <th scope="col">Habilidades</th>
                                        <th scope="col">
                                            <button type="button" id="adicionaHabilidades" className="btn btn-secondary" data-toggle="modal" data-target="#modalHabilidades">
                                                <PlusSquare size="24" />
                                            </button>  
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {habilidades.map((habi, index) => {
                                        return(<tr key={index} className="table-secondary">
                                        <td className="col-md-1">{habi}</td>
                                        <td><button onClick={() => excluirHabilidades(index)} type="button" className="btn btn-outline-danger">Deletar</button></td>
                                        </tr>)    
                                    })}
                                </tbody>
                            </table>
                        </Tablediv>
                    </Box>

                    <Box>

                        <H5style>Seus idiomas:</H5style>

                        <Tablediv>
                            <table className="table table-bordered table-hover text-center">
                                <colgroup>
                                    <col span="1" style={{width: "80%"}}></col>
                                    <col span="1" style={{width: "20%"}}></col>
                                </colgroup>
                                <thead>
                                    <tr className="thead-dark">
                                        <th scope="col">Idiomas</th>
                                        <th scope="col">
                                            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#modalIdiomas">
                                                <PlusSquare size="24" />
                                            </button> 
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {idiomas.map((idi, index) => {
                                            return(<tr key={index} className="table-secondary">
                                            <td className="col-md-1">{idi}</td>
                                            <td><button onClick={() => excluirIdiomas(index)} type="button" className="btn btn-outline-danger">Deletar</button></td>
                                            </tr>)    
                                    })}
                                </tbody>
                            </table>
                        </Tablediv>
                    </Box>

                    <Box>

                        <H5style>Referências:</H5style>

                        <Tablediv>
                            <table className="table table-bordered table-hover text-center">
                                <colgroup>
                                    <col span="1" style={{width: "80%"}}></col>
                                    <col span="1" style={{width: "20%"}}></col>
                                </colgroup>
                                <thead>
                                    <tr className="thead-dark">
                                        <th scope="col">Referências</th>
                                        <th scope="col">
                                            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#modalReferencias">
                                                <PlusSquare size="24" />
                                            </button>  
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {referencias.map((ref, index) => {
                                        return(<tr key={index} className="table-secondary">
                                        <td className="col-md-1">{ref}</td>
                                        <td><button onClick={() => excluirReferencias(index)} type="button" className="btn btn-outline-danger">Deletar</button></td>
                                        </tr>)    
                                    })}
                                </tbody>
                            </table>
                        </Tablediv>
                    </Box>

                    <Box>

                        <H5style>Adicione aqui atividades que julga importante:</H5style>

                        <Tablediv>
                            <table className="table table-bordered table-hover text-center">
                                <colgroup>
                                    <col span="1" style={{width: "80%"}}></col>
                                    <col span="1" style={{width: "20%"}}></col>
                                </colgroup>
                                <thead>
                                    <tr className="thead-dark">
                                        <th scope="col">Outras Atividades</th>
                                        <th scope="col">
                                            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#modalOutrasAtividades">
                                                <PlusSquare size="24" />
                                            </button>   
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {outrasAtividades.map((oAtiv, index) => {
                                        return(<tr key={index} className="table-secondary">
                                        <td className="col-md-1">{oAtiv}</td>
                                        <td><button onClick={() => excluirOutrasAtividades(index)} type="button" className="btn btn-outline-danger">Deletar</button></td>
                                        </tr>)    
                                    })}
                                </tbody>
                            </table>
                        </Tablediv>
                    </Box>

                    <Buttongroup>

                        <Link to="/perfilPessoa" type="button" className="btn btn-warning">Pular</Link>
                        {/* <button type="button" className="btn btn-danger">Cancelar</button> */}
                        <Link to="/perfilPessoa" onClick={novoCurriculo} type="button" className="btn btn-success">Concluir</Link>
                        {/* <button onClick={novoCurriculo} type="button" className="btn btn-success">Continuar</button> */}

                    </Buttongroup>

                </Wrapper>

            <Footer />


            {/* Modal Experiencia */}
            <div className="modal fade" id="modalExperiencia" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Experiência</h5>
                        </div>

                        <div className="modal-body">
                            <input type="text" className="form-control" onBlur={e => aux = e.target.value} />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => aux = ''}>Fechar</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => adicionarExperiencia()}>Adicionar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal Formacao */}
            <div className="modal fade" id="modalFormacao" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Formação</h5>
                        </div>

                        <div className="modal-body">
                            <input type="text" className="form-control" onBlur={e => aux = e.target.value} />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => aux = ''}>Fechar</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => adicionarFormacao()}>Adicionar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal Habilidades */}
            <div className="modal fade" id="modalHabilidades" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Habilidades</h5>
                        </div>

                        <div className="modal-body">
                            <input type="text" className="form-control" onBlur={e => aux = e.target.value} />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => aux = ''}>Fechar</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => adicionarHabilidades()}>Adicionar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal Idiomas */}
            <div className="modal fade" id="modalIdiomas" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Idiomas</h5>
                        </div>

                        <div className="modal-body">
                            <input type="text" className="form-control" onBlur={e => aux = e.target.value} />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => aux = ''}>Fechar</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => adicionarIdiomas()}>Adicionar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal Referencias */}
            <div className="modal fade" id="modalReferencias" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Referências</h5>
                        </div>

                        <div className="modal-body">
                            <input type="text" className="form-control" onBlur={e => aux = e.target.value} />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => aux = ''}>Fechar</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => adicionarReferencias()}>Adicionar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal Outras Atividades */}
            <div className="modal fade" id="modalOutrasAtividades" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Outras Atividades</h5>
                        </div>

                        <div className="modal-body">
                            <input type="text" className="form-control" onBlur={e => aux = e.target.value} />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => aux = ''}>Fechar</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => adicionarOutrasAtividades()}>Adicionar</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default CadastroCurriculo;