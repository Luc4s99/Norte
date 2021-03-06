import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { Bodymargin } from './styles';
import { Bell } from '@styled-icons/entypo/Bell';

function Navbar() {

    const dispatch = useDispatch();

    function handleLogout() {

        <Redirect to="/cadastro" />

        dispatch({
           type: 'LOG_OUT'
        });
    }

    return (
        <>
            {useSelector(state => state.user.usuarioLogado) === 0 ? <Redirect to="/login" /> : null}
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Norte</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                            
                        </ul>
                        <form className="d-flex mr-5 ml-auto">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        {/*Verificar como fazer a modal funcionar */}
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                <Bell size="36" />
                            </button>
                        </li>

                        { useSelector(state => state.user.usuarioLogado) === 1 &&
                                                          
                            <li className="nav-item">
                                <Link className="nav-link" to="#" onClick={handleLogout} >Sair <span className="sr-only">(current)</span> </Link>
                            </li>                    
                            
                        }

                    </div>
                </div>
            </nav>
            
            <Bodymargin />
        </>
    );
}

export default Navbar;