import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import Curriculo from '../../components/curriculo';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Wrapper, DivCurriculo } from './styles';

import firebase from '../../config/firebase';
import 'firebase/auth';

function Feed({match}) {

  const [curriculos, setCurriculos] = useState([]);
  const listaCurriculos = [];
  const [pesquisa, setPesquisa] = useState('');
  

  useEffect(()=>{
  
    firebase.firestore().collection('curriculos').get()
    .then( resultado => {
      resultado.docs.map( (doc,index) =>{ return(
        listaCurriculos.push({id: index, ...doc.data()}))
      })
      setCurriculos(listaCurriculos);
    });

  }, [pesquisa]);
  return (
    <>
        <Navbar />
        <Wrapper >
          <div>
            <h2> Curriculos cadastrados</h2>
            <input type="text" onChange={(e)=> setPesquisa(e.target.value)}
              placeholder="Pesquisar curriculo por palavra - chave"
              className="form-control text-left" />
          </div>
          <DivCurriculo>
            
            {/* {console.log("Curriculos",curriculos)} */}
            {/* {console.log("Usuarios",usuarios)} */}
            {curriculos.map(
              (item) => {
                return(
                  console.log(item),
                  <Curriculo 
                    key={item.id}
                    usuarioEmail={item.usuarioEmail}
                    experiencia={item.experiencia}
                    formacao={item.formacao}
                    habilidades={item.habilidades}
                    idiomas={item.idiomas}
                    outrasAtividades={item.outrasAtividades}
                    referencias={item.referencias}
                  />                  
                )
              }
            )}
          </DivCurriculo>
        </Wrapper>
        <Footer />
    </>
  );
}

export default Feed;