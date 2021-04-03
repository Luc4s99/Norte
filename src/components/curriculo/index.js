import React, {useState, useEffect} from 'react';

import { Container } from './styles';
import firebase from '../../config/firebase';

function curriculo({experiencia, formacao, habilidades, idiomas, outrasAtividades, referencias, usuarioEmail}) {
    console.log(experiencia, formacao, habilidades, idiomas, outrasAtividades, referencias, usuarioEmail)
    return (
        <>
        <div className="col-md-3 col-sm-12">
            <div className="card-body">
                <h5>{usuarioEmail}</h5>
            </div>
        </div>
        </>
    );
}

export default curriculo;