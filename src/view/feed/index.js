import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Curriculo from '../../components/curriculo';
import {Link} from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Wrapper, DivCurriculo, Header, Filtro, Filtros } from './styles';

import firebase from '../../config/firebase';
import 'firebase/auth';

import {useLocation, useHistory} from 'react-router-dom';
import qs from 'query-string';


function Feed() {

  const [curriculos, setCurriculos] = useState([]);
  const listaCurriculos = [];
  const [pesquisa, setPesquisa] = useState('');
  const [tipoFiltro, setTipoFiltro] = useState('');
  const emailEmpresa = useSelector(state => state.emp.emailEmpresa)

  const [qtdPaginas, setQtdPaginas] = useState(1);
  const [qtdCurriculos, setQtdCurriculos] = useState(1);
  const [paginaAtual, setPaginaAtual] = useState(1);

  let location = useLocation(); //Da acesso aos parametros da url
  const history = useHistory(); //Manipula a URL
  
  useEffect(() => {

    const queryParans = qs.parse(location.source);
    history.push({
        search: qs.stringify({
            ...queryParans,
            page: paginaAtual
        })
    })

  }, [paginaAtual]);

  useEffect(() => {

    setPaginaAtual(getPaginaAtual() || 1);

  },[]);

  function getPaginaAtual(){
    const queryParans = qs.parse(location.source);
    const page = queryParans.page;
    return page ? Number(page) : undefined;
  }

  function pagination(page, amount){
    return curriculos.map(
      (item,i) => {
        return(
          i >= amount * (page-1) && i < page * amount &&
          <Curriculo 
            key={item.i}
            usuarioEmail={item.usuarioEmail}
            experiencia={item.experiencia}
            formacao={item.formacao}
            habilidades={item.habilidades}
            emailEmpresa={emailEmpresa}
          />
        ) 
      })
  }

  useEffect(()=>{
    
    if(tipoFiltro === "" || pesquisa === ""){

      firebase.firestore().collection('curriculos').get().then( resultado => {
     
        resultado.docs.map( (doc,index) =>{           
          return(        
            listaCurriculos.push({id: index, ...doc.data()})
          )
        })
        setCurriculos(listaCurriculos);
        setQtdCurriculos(listaCurriculos.length);
        setQtdPaginas(parseInt(listaCurriculos.length/5)+1);        
      });

    } else {

      if(tipoFiltro === "Experiencia"){

        firebase.firestore().collection('curriculos').where('experiencia','array-contains',pesquisa).get().then( resultado => {
     
          resultado.docs.map( (doc,index) =>{           
            return(        
              listaCurriculos.push({id: index, ...doc.data()})
            )
          })
          setCurriculos(listaCurriculos);
          setQtdCurriculos(listaCurriculos.length);
          setQtdPaginas(parseInt(listaCurriculos.length/5)+1);    
        });

      } else if(tipoFiltro === "Formacao"){

        firebase.firestore().collection('curriculos').where('formacao','array-contains',pesquisa).get().then( resultado => {
     
          resultado.docs.map( (doc,index) =>{           
            return(        
              listaCurriculos.push({id: index, ...doc.data()})
            )
          })
          setCurriculos(listaCurriculos);
          setQtdCurriculos(listaCurriculos.length);
          setQtdPaginas(parseInt(listaCurriculos.length/5)+1);    
        });

      } else if(tipoFiltro === "Habilidades"){

        firebase.firestore().collection('curriculos').where('habilidades','array-contains',pesquisa).get().then( resultado => {
     
          resultado.docs.map( (doc,index) =>{           
            return(        
              listaCurriculos.push({id: index, ...doc.data()})
            )
          })
          setCurriculos(listaCurriculos);
          setQtdCurriculos(listaCurriculos.length);
          setQtdPaginas(parseInt(listaCurriculos.length/5)+1);    
        });

      } else if(tipoFiltro === "Idiomas"){

        firebase.firestore().collection('curriculos').where('idiomas','array-contains',pesquisa).get().then( resultado => {
     
          resultado.docs.map( (doc,index) =>{           
            return(        
              listaCurriculos.push({id: index, ...doc.data()})
            )
          })
          setCurriculos(listaCurriculos);
          setQtdCurriculos(listaCurriculos.length);
          setQtdPaginas(parseInt(listaCurriculos.length/5)+1);    
        });

      } else if(tipoFiltro === "Referencias"){

        firebase.firestore().collection('curriculos').where('outrasAtividades','array-contains',pesquisa).get().then( resultado => {
     
          resultado.docs.map( (doc,index) =>{           
            return(        
              listaCurriculos.push({id: index, ...doc.data()})
            )
          })
          setCurriculos(listaCurriculos);
          setQtdCurriculos(listaCurriculos.length);
          setQtdPaginas(parseInt(listaCurriculos.length/5)+1);    
        });

      } else if(tipoFiltro === "Atividades"){

        firebase.firestore().collection('curriculos').where('referencias','array-contains',pesquisa).get().then( resultado => {
     
          resultado.docs.map( (doc,index) =>{           
            return(        
              listaCurriculos.push({id: index, ...doc.data()})
            )
          })
          setCurriculos(listaCurriculos);
          setQtdCurriculos(listaCurriculos.length);
          setQtdPaginas(parseInt(listaCurriculos.length/5)+1);    
        });
      }
    }

  }, [pesquisa, tipoFiltro]);

  function onChangeValue(event){
    setTipoFiltro(event.target.value);
  }

  function limpaFiltro(){    
    document.getElementById("inputPesquisa").value = ''
    var ele = document.getElementsByName("tipoFiltro");
    for(var i=0; i<ele.length; i++){
      ele[i].checked = false;
    }
    setTipoFiltro('');
    setPesquisa('');
    setPaginaAtual(1);
  }
  
  return (
    <>
        <Navbar />
        <Wrapper >
          <Header>
            <h1> Curriculos cadastrados</h1>
            <input type="text" id="inputPesquisa" onChange={(e)=> setPesquisa(e.target.value)}
              placeholder="Pesquisar curriculo por:"
              className="form-control text-left"/>
            <Filtro>
              <div><label>Filtrar Por:</label></div>
              <Filtros onChange={onChangeValue}>
                <label htmlFor="Experiencia">Experiência</label>
                <input type="radio" id="experiencia" name="tipoFiltro" value="Experiencia"></input>

                <label htmlFor="Formacao">Formação</label>
                <input type="radio" id="formacao" name="tipoFiltro" value="Formacao"></input>
                
                <label htmlFor="Habilidades">Habilidades</label>
                <input type="radio" id="habilidades" name="tipoFiltro" value="Habilidades"></input>

                <label htmlFor="Idiomas">Idiomas</label>
                <input type="radio" id="Idiomas" name="tipoFiltro" value="Idiomas"></input>
                
                <label htmlFor="Referencias">Referências</label>
                <input type="radio" id="Referencias" name="tipoFiltro" value="Referencias"></input>

                <label htmlFor="Atividades">Outros</label>
                <input type="radio" id="Atividades" name="tipoFiltro" value="Atividades"></input>
              </Filtros>
            </Filtro>
            <button type="button" className="btn btn-primary" onClick={()=>limpaFiltro()}> Limpar filtros </button>
          </Header>
          <DivCurriculo>
            {pagination(paginaAtual,5)}
            {
              Array(qtdPaginas).fill('').map((_,index) => {
                  return  <button  key={index}
                            disabled={index === (paginaAtual-1)}
                            onClick={() => {
                                setPaginaAtual(index+1);    
                            }}
                            className="btn btn-primary btn-lg mr-3">
                            {index+1}
                          </button>
              })
            }
          </DivCurriculo>
          <Link to="/perfilEmpresa" type="button" className="btn btn-success my-3">Voltar</Link>
        </Wrapper>
        <Footer />
    </>
  );
}

export default Feed;