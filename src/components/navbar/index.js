import React, { useEffect, useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { Bodymargin, Empresas } from './styles';
import { Bell } from '@styled-icons/entypo/Bell';

import firebase from '../../config/firebase';
import 'firebase/auth';

function Navbar() {

    const dispatch = useDispatch();
    const [logout, setLogout] = useState(0);
    const [redireciona, setRedireciona] = useState(false);
    const [empresa, setEmpresa] = useState('');
    const usuarioEmail = useSelector(state => state.user.usuarioEmail);
    const [empresasInteressadas, setEmpresasInteressadas] = useState([]);
    

    function handleLogout() {
        
        setLogout(1);
        dispatch({
           type: 'LOG_OUT'
        });

        // window.location.href = "http://localhost:3000/login";
    }
   
    useEffect(()=>{
        if(usuarioEmail !== ""){
            firebase.firestore().collection("notificacoes").doc(usuarioEmail).get().then((doc)=>{
                setEmpresasInteressadas(doc.data().empresasInteressadas);
            }).catch((error)=>console.log(error));
        }
    },[]) 

    return (
        <>
            {logout === 1 ? <Redirect to ="/login" /> : null}
            {redireciona === true ? <Redirect to={`/detalheEmpresa/${empresa}`}/> : null}

            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="/">Norte</a> */}
                    <Link to="/">Norte</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        {/*
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Função 1</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Função 2</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Função 3</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Função 4</a>
                            </li>
                            
                        
                        <form className="d-flex mr-5 ml-auto">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                <Bell size="36" />
                            </button>
                        </li> */}
                        
                        { usuarioEmail !== '' && empresasInteressadas.length > 0 ? 
                        
                        <li className="nav-item mr-3">
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalEmpresasInteressadas">
                                <Bell size="26" />
                            </button>
                        </li>

                        : null}
                        
                        { useSelector(state => state.user.usuarioLogado) === 1 &&

                            <li className="nav-item ml-3 mt-3">
                                <button onClick={handleLogout}> Sair <span className="sr-only">(current)</span> </button>
                            </li>                    
                            
                        }
                        </ul>
                    </div>
                </div>
            </nav>
            
            <Bodymargin />

            {/* Modal Empresas Interessas */}
            <div className="modal fade" id="modalEmpresasInteressadas" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        
                        <div className="modal-header text-center">
                            <h5 className="modal-title w-100">Empresas interessadas em você:</h5>
                        </div>

                        <Empresas className="modal-body">
                            
                            {<ul className="list-group">{empresasInteressadas.map((item, index)=>{
                                return(                                
                                    <li key={index} className="list-group-item"> 
                                        <div>
                                            {item} 
                                            <button 
                                                type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {
                                                    setRedireciona(true);
                                                    setEmpresa(item);
                                                }}>
                                                    + Detalhes
                                            </button> 
                                        </div>
                                    </li>                                  
                                )
                            })}</ul>}

                        </Empresas>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Fechar</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar; 