import React from 'react';
import { Bodymargin } from './styles';
import { Bell } from '@styled-icons/entypo/Bell';

function Navbar() {

    return (
        <>
            
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Norte</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Função 1</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Função 2</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Função 3</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Função 4</a>
                            </li>
                            
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        {/*Verificar como fazer a modal funcionar */}
                        <li class="nav-item">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                <Bell size="36" />
                            </button>
                        </li>

                    </div>
                </div>
            </nav>
            
            <Bodymargin />
        </>
    );
}

export default Navbar;